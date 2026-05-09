// COURSE ITEM PAGE

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import request from "@/services/request";

import Header from "@/components/header/Header";
import { Footer } from "@/components/footer/footer";
import CourseFeatures from "./CourseFeatures";
import CourseMetaInfo from "./CourseMetaInfo";
import ServicesSection from "./ServicesSection";

const CourseItem = () => {
    const { course_id } = useParams();
    
    

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



  

 


 

 

    return (
        <div>
          <Header />
           <div className="w-full min-h-screen bg-white">
  {/* Sarlavha qismi - keng qilib olingan */}
  <div className="w-full border-b border-gray-100 py-8 px-4 md:px-8 lg:px-12">
    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
      {courseItem?.name_uz}
    </h1>
  </div>

  {/* Asosiy kontent - to'liq kenglikda */}
  <main className="w-full px-4 md:px-8 lg:px-12 py-6">
    <div
      className="text-lg text-gray-700 leading-relaxed 
        /* HTML ichidagi elementlarni chiroyli qilish */
        [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-gray-800 [&_h3]:mt-10 [&_h3]:mb-4
        [&_ul]:list-none [&_ul]:space-y-3 [&_ul]:my-6
        [&_li]:flex [&_li]:items-start [&_li]:before:content-['•'] [&_li]:before:text-blue-500 [&_li]:before:font-bold [&_li]:before:mr-3
        [&_strong]:text-gray-900 [&_strong]:font-semibold
        [&_p]:mb-4"
      dangerouslySetInnerHTML={{
        __html: courseItem?.description_uz
          ?.replace(/\\n/g, "")
          ?.replace(/\\"/g, '"'),
      }}
    />

   
  </main>
</div>
      <CourseFeatures/>
      <CourseMetaInfo/>
      <ServicesSection/>

            <Footer/>
        </div>
    )
}

export default CourseItem


