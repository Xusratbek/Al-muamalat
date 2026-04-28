import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import { Button } from "../ui/Button";
import { Mail, User, Phone } from "lucide-react";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const auth = useAuth();
  
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ 
    defaultValues: { 
      email: '', password: '',phone_number:'', 
      first_name: '', last_name: '', 
    } 
  });

  const onSubmit = (data) => {
    localStorage.setItem('email',data.email) 
    auth.register(data, (error) => {
      if (error) {
        toast.error(error?.response?.data?.message || "Ro'yxatdan o'tishda xatolik!");
      }
      else{
        toast.success("Ro'yxatdan o'tish muvaffaqiyatli yakunlandi!");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md flex flex-col gap-4">
      <div className="flex flex-col mb-2">
        <h1 className="text-[64px] font-black leading-[0.9] tracking-tighter text-black">
          Get started
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[20px] text-slate-400 font-medium">Already have an account?</span>
          <Link to="/login" className="text-[20px] text-[#009688] font-bold hover:underline">
            Sign in
          </Link>
        </div>
      </div>

      {/* Ism va Familiya yonma-yon */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="First name"
          {...register('first_name', { required: "Ism shart" })}
          rightIcon={User}
          error={errors.first_name?.message}
        />
        <Input
          placeholder="Last name"
          {...register('last_name', { required: "Familiya shart" })}
          rightIcon={User}
          error={errors.last_name?.message}
        />
      </div>

      <Input
        type='email'
        placeholder="Enter your email"
        {...register('email', { required: "Email shart" })}
        rightIcon={Mail}
        error={errors.email?.message}
      />
      
      <Input
        
        placeholder="Enter your phone number"
        {...register('phone_number', { required: "Phone number shart" })}
        rightIcon={Phone}
        error={errors.phone_number?.message}
      />  
     

      {/* Parol va uni tasdiqlash */}
      <Input
        type='password'
        placeholder="Password"
        {...register('password', { required: "Parol shart", minLength: 6 })}
        error={errors.password?.message}
      />
    
      

      <Button
        type="submit"
        className="w-full h-12 bg-[#009688] hover:bg-[#00796b] text-white font-semibold rounded-lg mt-2"
      >
        Register
      </Button>

      
    </form>
  );
}

export default RegisterForm;