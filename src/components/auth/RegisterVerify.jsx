import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import Input from '../ui/Input';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RegisterVerify = () => {
    const auth = useAuth()
    const navigate=useNavigate()
    // React Hook Form sozlamalari
        const {
            handleSubmit,
            register,
            formState: { errors }
          } = useForm({ defaultValues: { otp: '',email:localStorage.getItem('email') } })

        const email=localStorage.getItem('email')

    
  
 const handleResendCode = () => {
        auth.handleOtpResendRegister({email},(error) =>{
            if(!error) {
                toast.success("muvaffaqiyatli yuborildi kod")
            }
            else{
                toast.error(error)
            }
        })
    }
   

    
    const onSubmit = (data) => {
        const {email,otp} =data
       auth.handleVerifyOtp({email,otp},(error)=>{
        if(!error){
            toast.success("Muvaffaqiyatli kirdingiz!");
            navigate('/');
        }
        else {
             toast.error(error);
        }
       })
        
    };

   

    
   

  

    return (
        <div className='w-full h-screen bg-gray-200 flex items-center justify-center'>
            <form 
                className='w-[380px] bg-white shadow-xl rounded-lg p-10 flex flex-col items-center gap-5 relative'
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className='text-2xl font-semibold text-slate-800'>OTP Verification</h2>
                

                <div className='flex items-center justify-center gap-2'>
                    <Input
                        type="text"
                        placeholder="Enter your OTP"
                        {...register('otp')}
                        inputClassName="h-12 border-slate-300 rounded-lg placeholder:text-slate-400"
                    />
                </div>

                <button 
                    type="submit"
                    className='w-full h-11 bg-[#010953] hover:bg-[#081271] text-white rounded-lg font-semibold text-sm transition-colors mt-4'
                >
                    Verify
                </button>

                <div className='flex flex-col items-center gap-2 mt-2'>
                    <p className='text-gray-500 text-sm'>Didn't receive the code?</p>
                    <button onClick={handleResendCode} type="button" className='font-semibold text-sm text-[#1877f2] hover:underline'>
                        Resend code
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterVerify;