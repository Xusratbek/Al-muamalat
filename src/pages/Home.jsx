// src/pages/Home.jsx (yoki joylashgan manzili)

import React from "react";
import Header from "../components/header/Header"; // Figurali qavssiz import
import Hero from "../components/home/Hero";
import SliderDots from "@/components/ui/SliderDots";
import Services from "@/components/home/Services";

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <SliderDots />
      <Services />
    </main>
  );
};

export default Home;