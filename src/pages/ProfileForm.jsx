import React from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import avatar from "@/assets/man.png"; // Rasm yo'lini tekshiring
import { useQuery } from "@tanstack/react-query";
import request from "@/services/request";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const ProfileForm = () => {


    const {data:userData, isLoading}=useQuery({
        queryKey:["userData"],
        queryFn:()=> request.get("/users/me").then((res)=>res.data)
        })


    
  const { register, handleSubmit,formState:{errors} } = useForm();


  const {mutate} = useMutation({
    mutationKey:["user"],
    mutationFn:(data)=> request.put(`/users/${userData?.data?.user_id}`, data),
    onSuccess:()=> {
      toast.success("Profile updated successfully")
    },
    onError:(error)=> {
      toast.error(error.response.data.message)
    }
  })

  const onsubmit=(data)=> {
    mutate(data)
  } 

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 animate-in fade-in duration-500">
      <form onSubmit={handleSubmit(onsubmit)} >
        {/* Header qismi: Rasm, Ism va Save button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-8 text-left">
            <div className="relative">
              <img src={avatar} alt="User" className="w-24 h-24 rounded-full   p-1 object-cover" />
            </div>
            <div className="border-blue-400 px-4 py-2">
               <h2 className="text-3xl font-bold text-gray-900">Alexa Rawles</h2>
            </div>
          </div>
          <Button type="submit" className="bg-[#009688] hover:bg-[#00796b] text-white px-10 py-2.5 rounded-lg h-auto">
            Save
          </Button>
        </div>

        {/* Inputlar qismi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left">
          <div className="flex flex-col gap-2.5">
            <label className="text-gray-800 font-medium ml-1">Full Name</label>
            <Input type="text" {...register("full_name")}  placeholder="Your full Name" className=" border-none rounded-xl h-14" />
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="text-gray-800 font-medium ml-1">Phone Number</label>
            <Input type="text" {...register("phone_number")}  placeholder="Your phone Number" className="border-none rounded-xl h-14" />
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="text-gray-800 font-medium ml-1">Address</label>
            <Input  type="text" {...register("address")} placeholder="Enter Your Address" className="border-none rounded-xl h-14" />
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="text-gray-800 font-medium ml-1">Password</label>
            <Input type="password" {...register("password")} placeholder="Enter Your Password" className="border-none rounded-xl h-14" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;