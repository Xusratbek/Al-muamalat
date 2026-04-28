import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import { useMutation, useQuery } from "@tanstack/react-query";
import { request } from "./services/request";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import LoginVerify from "./components/auth/LoginVerify";
import RegisterVerify from "./components/auth/RegisterVerify";  

// const MbbHujjatlarniImzolashFormPage = lazy(() =>
//   import("@/pages/mbb/hujjatlarni-imzolash/pages/FormPage")
// );

export default function App() {


//   const {data,isLoading,isError} = useQuery({
//     queryKey:['postsData'],
//     queryFn:() => request.get("/courses/main").then((res) => res.data)
//   })
//   if (isLoading){
//     return "hello loading"
//   }

//   if (isError) {
//     return "hello error"
//   }

// const {mutate,isLoading:courseLoading} =useMutation()



  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verifylogin" element={<LoginVerify/> }/>
        <Route path="/verifyregister" element={<RegisterVerify/> }/>
        
        
      </Routes>
    
  );
}