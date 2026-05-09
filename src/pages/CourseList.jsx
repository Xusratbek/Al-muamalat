import React from "react";

const CourseList = () => {
  // Rasmga mos ma'lumotlar
  const courses = [
    { id: 1, category: "Design", title: "Various versions have evolve...", price: 500, reviews: 20, color: "bg-[#FFD5C1]" },
    { id: 2, category: "Business", title: "Various versions have evolve...", price: 500, reviews: 102, color: "bg-[#F3E8FF]" },
    { id: 3, category: "Business", title: "Various versions have evolve...", price: 500, reviews: 102, color: "bg-[#D1E1FF]" },
    { id: 4, category: "Design", title: "Various versions have evolve...", price: 500, reviews: 20, color: "bg-[#FFD5C1]" },
    { id: 5, category: "Business", title: "Various versions have evolve...", price: 500, reviews: 102, color: "bg-[#F3E8FF]" },
    { id: 6, category: "Business", title: "Various versions have evolve...", price: 500, reviews: 102, color: "bg-[#D1E1FF]" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom-4 duration-500">
      {courses.map((course) => (
        <div key={course.id} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-all group">
          {/* Kurs rasmi foni */}
          <div className={`w-full h-52 rounded-2xl ${course.color} flex items-center justify-center relative overflow-hidden`}>
            <span className="absolute top-4 left-4 bg-white/90 px-4 py-1.5 rounded-xl text-xs font-bold text-gray-700 shadow-sm">
              {course.category}
            </span>
            {/* Bu yerga kurs rasmi (PNG) qo'yiladi */}
            <div className="w-24 h-24 bg-white/20 rounded-2xl rotate-12 border border-white/30 group-hover:rotate-45 transition-transform duration-500"></div>
          </div>

          {/* Kurs ma'lumotlari */}
          <div className="flex flex-col gap-2 px-1 text-left">
            <h3 className="font-bold text-lg text-gray-800 line-clamp-1">
              {course.title}
            </h3>
            
            <div className="flex items-center gap-1.5">
              <div className="flex text-orange-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < 4 ? "text-orange-400" : "text-gray-200"}>★</span>
                ))}
              </div>
              <span className="text-gray-400 text-xs ml-1">({course.reviews})</span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-2xl font-extrabold text-gray-900">$ {course.price}</span>
              <button className="bg-[#009688] text-white p-2.5 rounded-xl hover:bg-[#00796b] transition-colors shadow-sm group-hover:scale-110">
                <svg className="w-6 h-6 rotate-[-45deg]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;