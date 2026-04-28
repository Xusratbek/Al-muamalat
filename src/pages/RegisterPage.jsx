import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import avatar from '../assets/Ellipse 118.png'
import img from '../assets/illustration image.webp'



const RegisterPage = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Chap tomon - Form */}
      <div className="flex-1 flex flex-col p-6 md:p-12 lg:p-20">
        {/* Header: Logo & Ask Diyor */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#009688] rounded-md flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="font-bold text-[#009688] tracking-wider">AL MUAMALAT</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-slate-400">Questions?</p>
              <p className="text-sm font-bold text-[#009688]">Ask Diyor</p>
            </div>
            <img 
              src={avatar} 
              alt="Avatar" 
              className="w-10 h-10 rounded-full border-2 border-[#009688]"
            />
          </div>
        </div>

        {/* Login Formasi */}
        <div className="flex-1 flex items-center">
          <RegisterForm />
        </div>
      </div>

      {/* O'ng tomon - Visual */}
      <div className="hidden lg:flex flex-1 bg-[#009688] m-4 rounded-[40px] flex-col items-center justify-center p-12 text-center text-white">
        <div className="relative mb-12">
          {/* Bu yerda sizning rasmingiz bo'ladi */}
          <img 
            src={img}
            alt="Islamic Finance" 
            className="max-w-md"
          />
        </div>
        <h2 className="text-3xl font-bold max-w-md leading-tight">
          Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
        </h2>
      </div>
    </div>
  );
};

export default RegisterPage;