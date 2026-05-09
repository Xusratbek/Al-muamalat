import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import Header from "@/components/header/Header";
import { Footer } from "@/components/footer/footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow max-w-[1200px] mx-auto px-6 py-12 w-full">
        <div className="flex justify-start gap-4 mb-10">
          <NavLink 
            to="/contact" 
            end // /contact/course ga o'tganda bu link active bo'lib qolmasligi uchun
            className={({ isActive }) => 
              `px-12 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-sm ${
                isActive ? "bg-[#009688] text-white" : "bg-white border border-gray-300 text-gray-500"
              }`
            }
          >
            Profile
          </NavLink>
          
          <NavLink 
            to="/contact/course" 
            className={({ isActive }) => 
              `px-12 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-sm ${
                isActive ? "bg-[#009688] text-white" : "bg-white border border-gray-300 text-gray-500"
              }`
            }
          >
            Courses
          </NavLink>
        </div>

        <div className="w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;