import { createContext, useState } from "react";
import  request  from "@/services/request";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const defaultProvider = {
    user: null,
    loading: false,
    setUser: () => null,
    setLoading: () => Boolean,
    login: () => Promise.resolve(),
    register: () => Promise.resolve(),
    logout: () => Promise.resolve(),
      
}


const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
    const navigate=useNavigate()

    const [user, setUser] = useState(defaultProvider.user);
    const [loading, setLoading] = useState(defaultProvider.loading);

    const handleLogin = (params) => {
        console.log(params)
        setLoading(true)
        request.post("/v2/auth/signin/init", params)
            .then((response) => {
                console.log(response.data);
                toast.success(response?.data?.message)
                
                setUser(response.data.user)
                navigate('/verifylogin')

               
            })
            .catch((error) => {
                toast.error(error.response?.data?.message || 'Login failed')
                console.log(error)
                // toast.error(error.response?.data?.message || 'Login failed')
            })
            .finally(() => {
                setLoading(false)
            })
    }


    const handleVerifyOtp = (params) => {
        request.post("/v2/auth/signin/verify", params)
            .then((response) => {
                console.log(response.data);
                toast.success(response?.data?.message)
                localStorage.setItem('userToken', response.data.data.tokens.accessToken)
                localStorage.setItem('refreshToken', response.data.data.tokens.refreshToken)
                navigate('/')

            })
            .catch((error) => {
                toast.error(error.response?.data?.message)
                console.log(error)
            })
            .finally(() => {
                console.log("finally")
            })
    }
    const handleVerifyOtpRegister = (params) => {
        request.post("/v2/auth/signup/verify", params)
            .then((response) => {
                console.log(response.data);
                toast.success(response?.data?.message)
                navigate('/')

            })
            .catch((error) => {
                toast.error(error.response?.data?.message)
                console.log(error)
            })
            .finally(() => {
                console.log("finally")
            })
    }


    const handleOtpResend = (params) => {
        request.post("/v2/auth/signin/resend", params)
            .then((response) => {
                toast.success(response?.data?.message)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                console.log("finally")
            })


    }

     const handleOtpResendRegister = (params) => {
        request.post("/v2/auth/signup/resend", params)
            .then((response) => {
                toast.success(response?.data?.message)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                console.log("finally")
            })


    }

    const handleRegister = (params) => {
        setLoading(true)
        request.post("/v2/auth/signup/init", params)
            .then((response) => {
                toast.success(response?.data?.message)
                localStorage.setItem('userToken', response.data.accessToken)
                localStorage.setItem('refreshToken', response.data.refreshToken)
                setUser(response.data.user)
                navigate('/verifyregister')
            })
            .catch((error) => {
                toast.error(error.response?.data?.message)
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const values = {
        user,
        loading,
        login: handleLogin,
        register: handleRegister,
        handleVerifyOtp,
        handleOtpResend,
        handleVerifyOtpRegister,
        handleOtpResendRegister 
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
