import React from 'react';
import { Button } from '../ui/Button';

const ServiceCard = ({ title, description, icon: Icon, bgColor, iconBgColor }) => {
  return (
    <div className={`p-8 rounded-[24px] flex flex-col items-start gap-4 h-full transition-transform hover:-translate-y-2 duration-300 ${bgColor}`}>
      {/* Icon Circle */}
      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${iconBgColor}`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-slate-900 leading-tight">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-4">
        {description}
      </p>
      
      {/* Button */}
      <Button className="mt-auto bg-[#1a2233] hover:bg-[#2a3447] text-white px-10 rounded-lg h-12 w-full sm:w-auto">
        Learn more
      </Button>
    </div>
  );
};

export default ServiceCard;