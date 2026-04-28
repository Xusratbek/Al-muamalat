import { useState } from "react";
import student from "../../assets/student.png"; 
import {
  Star,
  Calendar,
} from "lucide-react";

export default function Hero() {
        return (
         <section className="relative overflow-hidden bg-[#06a89e]">
        {/* blur circles */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[58%] top-[28%] h-10 w-10 rounded-full bg-white/25 blur-xl" />
          <div className="absolute left-[64%] top-[36%] h-16 w-16 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute left-[72%] top-[27%] h-12 w-12 rounded-full bg-white/15 blur-xl" />
          <div className="absolute left-[79%] top-[34%] h-20 w-20 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute left-[84%] top-[43%] h-12 w-12 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute left-[69%] top-[48%] h-10 w-10 rounded-full bg-white/15 blur-xl" />
          <div className="absolute left-[84%] top-[23%] h-8 w-8 rounded-full bg-white/15 blur-lg" />
        </div>

        <div className="mx-auto grid min-h-[620px] max-w-[1440px] grid-cols-1 items-center px-4 py-10 md:px-8 lg:grid-cols-2 xl:px-16">
          {/* Left content */}
          {/* Left content */}
          <div className="relative z-10 max-w-[723px] pt-2">
            <div className="mb-12 inline-flex rounded-[12px] bg-white px-6 py-3 text-[15px] font-semibold leading-none text-[#4b5563] shadow-sm">
              Seeking Knowledge is an Obligation in Islam
            </div>

            <h1 className="max-w-[723px] text-[58px] font-extrabold leading-[1.15] tracking-[-0.02em] text-white xl:text-[64px]">
              Enhance Your
              <br />
              Understanding of Islamic
              <br />
              Ethics with Al-Muamalat
            </h1>

            <div className="mt-11 flex items-end gap-0">
              <button className="flex h-[60px] min-w-[246px] items-center justify-center rounded-l-[14px] rounded-r-[14px] bg-[#ff6b1a] px-8 text-[15px] font-semibold uppercase tracking-[0.01em] text-white transition hover:bg-[#f26112]">
                STUDENTS’ OPINION
              </button>

              <div className="-ml-5 flex items-center">
                <div className="flex -space-x-3">
                  {[11, 12, 13].map((n, index) => (
                    <img
                      key={n}
                      src={`https://i.pravatar.cc/60?img=${n}`}
                      alt={`reviewer-${index + 1}`}
                      className="h-[52px] w-[52px] rounded-full border-[3px] border-[#06a89e] object-cover shadow-sm"
                    />
                  ))}
                </div>

                <div className="ml-4 pb-[2px]">
                  <div className="flex items-center gap-[2px]">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-[18px] w-[18px] fill-white text-white"
                      />
                    ))}
                    <Star className="h-[18px] w-[18px] text-white" />
                  </div>

                  <p className="mt-1 text-[15px] font-semibold text-white/90">
                    (10k+ Reviews)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative z-10 mt-10 flex justify-center lg:mt-0 lg:justify-end">
            {/* top stats badge */}
            <div className="absolute left-8 top-4 z-20 rounded-[20px] bg-[#d8efef] px-6 py-4 shadow-lg md:left-4 lg:left-10 xl:left-16">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38bdf8] text-white">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[20px] font-extrabold leading-none text-slate-700">
                    250k
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    Assisted Student
                  </p>
                </div>
              </div>
            </div>

            <img
              src={student}
              alt="student"
              className="relative top-10 z-10 w-full max-w-[560px] object-contain"
            />
          </div>
        </div>
      </section>
    );
};