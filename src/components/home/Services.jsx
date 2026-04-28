import React from 'react';
import { Landmark, Globe, GraduationCap, Building2, ShoppingCart, ShieldCheck } from 'lucide-react';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    title: "Islamic Fund Management",
    description: "We assist retail and institutional clients in managing their funds in accordance with Islamic principles...",
    icon: Landmark,
    bgColor: "bg-[#e8f0fe]", // Och ko'k
    iconBgColor: "bg-[#7198e3]"
  },
  {
    title: "International Relations",
    description: "We establish connections with local and international organizations to promote Islamic financial systems...",
    icon: Globe,
    bgColor: "bg-[#e1f7ef]", // Och yashil
    iconBgColor: "bg-[#8ad6ba]"
  },
  {
    title: "Education and Training",
    description: "We offer short-term training courses, seminars, and conferences conducted by experts...",
    icon: GraduationCap,
    bgColor: "bg-[#fce4f4]", // Och pushti
    iconBgColor: "bg-[#e499c8]"
  },
  {
    title: "For Islamic Banks",
    description: "We provide experienced consulting on the establishment and management of Islamic banks and branches...",
    icon: Building2,
    bgColor: "bg-[#e8e4f9]", // Och binafsha
    iconBgColor: "bg-[#a698e3]"
  },
  {
    title: "Islamic Capital Market",
    description: "We provide expert advice on the Islamic capital market, including Shariah-compliant investment products...",
    icon: ShoppingCart,
    bgColor: "bg-[#eff3f6]", // Och kulrang
    iconBgColor: "bg-[#9baab7]"
  },
  {
    title: "Shariah Compliance Audit",
    description: "We provide Shariah supervision and audit services, examining the compliance of business models...",
    icon: ShieldCheck,
    bgColor: "bg-[#fff2cc]", // Och sariq
    iconBgColor: "bg-[#edc371]"
  }
];

const Services = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">Our services</h2>
      <p className="text-slate-500 max-w-2xl mx-auto mb-16">
        Expert guidance for managing funds in alignment with Islamic principles, 
        helping you make informed, halal investment decisions.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;