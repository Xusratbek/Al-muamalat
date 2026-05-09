import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const CourseFeatures = () => {
  const learningPoints = [
    "Gain a comprehensive understanding of Islamic finance principles and ethics.",
    "Build a portfolio with 10+ real-world projects in Islamic financial services.",
    "Learn to develop and manage Sharia-compliant financial products.",
    "Master key concepts in Islamic banking, investment, and wealth management.",
    "Understand the fundamentals of risk management in Islamic finance.",
    "Develop skills to work as an Islamic finance consultant."
  ];

  const whyStudyPoints = [
    "Lifetime access",
    "Video lessons",
    "Tests",
    "Projects",
    "Downloadable resources",
    "Access via mobile device"
  ];

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        
        {/* Left Card: What you'll learn */}
        <div className="bg-[#F4F9FF] rounded-3xl p-8 md:p-12 shadow-sm border border-blue-50">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            What you'll learn
          </h2>
          <ul className="space-y-6">
            {learningPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-slate-700 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 leading-snug">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card: Why study */}
        <div className="bg-[#F4F9FF] rounded-3xl p-8 md:p-12 shadow-sm border border-blue-50">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10 leading-tight">
            Why should you study at <br /> "AL-MUAMALAT"?
          </h2>
          <ul className="space-y-6">
            {whyStudyPoints.map((point, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="w-2 h-2 bg-slate-800 rounded-full flex-shrink-0 ml-1" />
                <span className="text-lg text-gray-700 font-medium">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default CourseFeatures;