// Login form UI
import React, { useState } from 'react';
import Input from '../ui/Input';
import { Button } from '../ui/Button';
import {Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'react-toastify';
const LoginForm = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  



  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ defaultValues: { email: '', password: '' } })



 const onSubmit = data => {
  const { email, password } = data;
  localStorage.setItem('email',email)

  auth.login({ email, password }, (error) => {
    console.log("Xatolik bormi?:", error); // Tekshirish uchun
    if (!error) {
      
      toast.success("Muvaffaqiyatli kirdingiz!");
      navigate('/'); // Yoki kerakli manzil, masalan '/'
    } else {
      toast.error(error);
    }
  });
};


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[400px] justify-center items-center flex flex-col gap-5">
      {/* Sarlavha - font-black va tracking-tighter rasmga juda mos tushadi */}
      <h1 className="text-[52px] font-black leading-tight tracking-tighter text-slate-900 text-left mb-2">
        Get started
      </h1>

      {/* Email Input - rasmda label yo'q, shuning uchun label propini olib tashladik */}
      <Input
        type="email"
        placeholder="Enter your email"
        {...register('email')}
        rightIcon={Mail}
        inputClassName="h-12 border-slate-300 rounded-lg placeholder:text-slate-400"
      />

      {/* Password Input */}
      <Input
        type="password"
        placeholder="Password"
        {...register('password')}
        // Password uchun rightIcon shart emas, chunki Input komponentingizda ko'zcha bor
        inputClassName="h-12 border-slate-300 rounded-lg placeholder:text-slate-400"
      />

      {/* Login Tugmasi */}
      <Button
        type="submit"
        className="w-full h-12 bg-[#009688] hover:bg-[#00796b] text-white font-semibold rounded-lg mt-2 transition-colors"
      >
        Sign in
      </Button>

      {/* Link - pastki qismda markazda yoki chapda */}
      <div className="text-center lg:text-left mt-2">
        <Link
          to="/register"
          className="text-slate-400 text-lg font-medium hover:text-slate-600 transition-colors"
        >
          Create a new account !
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;   
