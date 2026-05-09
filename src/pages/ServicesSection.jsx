import { Check } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import request from "@/services/request";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function ServicesSection() {
  const { course_id } = useParams();
  const services = [
    {
      title: "Space for creative ideas",
      desc: "Cyber Square nourishes young aspiring minds to get a clear vision of their ideas. We guide them in analyzing and building their vision and ideas into reality.",
    },
    {
      title: "Engaging and fun curriculum",
      desc: "Our goal is to create an engaging system that provides exciting activities so children can understand the programming concepts thoroughly so that they can perform them on their own. With Cyber Square kids have fun while they learn without frustrations.",
    },
    {
      title: "Professional teaching methods",
      desc: "We professionals at Cyber Square, have developed an in-depth understanding in how to teach kids and how to code. Moreover, we believe in exposing kids to real programming languages and professional tools.",
    },
  ];

  const paymentList = [
    "Space for creative ideas",
    "Engaging and fun curriculum",
    "Professional teaching methods",
    "Learn from AI & Data Science experts",
    "Courses by IIT, NIT, and IIM alumni",
    "UK certification upon completion",
    "Personalized one-to-one training",
  ];
 const { data: courseList, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: () => request.get("/courses/main").then((res) => res.data)
  })


  const {data:userData, }=useQuery({
        queryKey:["userData"],
        queryFn:()=> request.get("/users/me").then((res)=>res.data)
        })

        const userId=userData?.data.user_id
        console.log(userId)

  const courseItem = courseList?.data?.find((item) => item.course_id == course_id)



   const {mutate, isPending}=useMutation({
    mutationKey:["course"],
    mutationFn:(data)=> request.post("/courses/user", data),
    onSuccess:(data)=> {
      toast.success("Course added successfully")
      request.get(`/courses/purchase/${data?.data?.data?.id}`).then((res)=> {
        console.log(res.data)
        const url = res.data?.data?.data
        if (url) {
          const aTeg= document.createElement("a")
          aTeg.href=url
          aTeg.target= "_blank"
          document.body.appendChild(aTeg)
          aTeg.click()
          aTeg.remove()
           
        }
      })
    },
    onError:(error)=> {
      toast.error(error.response.data.message)
    }
  })


   const submitData = {
      course_id:courseItem?.course_id,
      user_id:userId,
    };
    mutate(submitData)



  return (
    <section className="w-full  py-10">
      <div className="max-w-7xl mx-auto shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="bg-[#009688] text-white px-10 py-14">
          <h2 className="text-5xl font-bold mb-16">Our Services</h2>

          <div className="space-y-14">
            {services.map((item, index) => (
              <div key={index} className="flex gap-5">
                {/* Icon */}
                <div className="mt-1">
                  <Check size={34} strokeWidth={3} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[28px] font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[20px] leading-[1.7] text-white/95 max-w-[520px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className=" px-14 py-14">
          <h2 className="text-5xl font-bold text-black mb-16">
            Payment
          </h2>

          <ul className="space-y-7 mb-20">
            {paymentList.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-5 text-[24px] text-[#111]"
              >
                <span className="w-3 h-3 rounded-full bg-[#009688]" />
                {item}
              </li>
            ))}
          </ul>

          <button  onClick={submitData} className="bg-[#009688] hover:bg-[#008378] transition-all duration-300 text-white text-[24px] font-semibold px-16 py-5 rounded-xl shadow-md">
            Purchase Now
          </button>
        </div>
      </div>
    </section>
  );
}