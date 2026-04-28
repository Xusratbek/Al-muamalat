// src/components/header/ui/Header.jsx

import React,{useState} from 'react';
import {
  ChevronDown,
  BookOpen
} from "lucide-react";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
   const [isProgramsOpen, setIsProgramsOpen] = useState(false);
   const [isLangOpen, setIsLangOpen] = useState(false);
   const languages = [
    {
      code: "ENG",
      flag: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",
      label: "English",
    },
    {
      code: "UZB",
      flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",
      label: "O'zbekcha",
    },
  ];

    const [currentLang, setCurrentLang] = useState({
    code: "ENG",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",
    label: "English",
  });
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-4 md:px-8 xl:px-14">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-teal-600">
              <BookOpen className="h-6 w-6 text-orange-500" />
            </div>
            <span className="text-lg font-extrabold tracking-wide text-teal-700">
              AL MUAMALAT
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex">
            <a href="#" className="text-sm font-semibold text-teal-600">
              Home
            </a>

            <div className="relative">
              <button
                onClick={() => {
                  setIsProgramsOpen(!isProgramsOpen);
                  setIsLangOpen(false);
                }}
                className="flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-teal-600"
              >
                Programs
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isProgramsOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isProgramsOpen && (
                <div className="absolute left-0 top-full mt-3 w-56 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
                  <button className="block w-full rounded-xl px-4 py-2 text-left text-sm hover:bg-teal-50 hover:text-teal-600">
                    Islamic Finance
                  </button>
                  <button className="block w-full rounded-xl px-4 py-2 text-left text-sm hover:bg-teal-50 hover:text-teal-600">
                    Shariah Auditing
                  </button>
                  <button className="block w-full rounded-xl px-4 py-2 text-left text-sm hover:bg-teal-50 hover:text-teal-600">
                    Halal Investments
                  </button>
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-sm font-medium text-slate-600 transition hover:text-teal-600"
            >
              Finance tools
            </a>
            <a
              href="#"
              className="text-sm font-medium text-slate-600 transition hover:text-teal-600"
            >
              Contact
            </a>
          </nav>

          {/* Right side */}
          <div className="hidden items-center gap-5 lg:flex">
            <div className="relative border-r border-slate-300 pr-5">
              <button
                onClick={() => {
                  setIsLangOpen(!isLangOpen);
                  setIsProgramsOpen(false);
                }}
                className="flex items-center gap-2 text-sm font-semibold text-slate-700"
              >
                <img
                  src={currentLang.flag}
                  alt="flag"
                  className="h-4 w-6 rounded-sm object-cover"
                />
                {currentLang.code}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isLangOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 top-full mt-3 w-40 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang);
                        setIsLangOpen(false);
                      }}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-teal-50"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.label}
                        className="h-3 w-5 object-cover"
                      />
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => navigate("/login")}
              className="rounded-lg bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              Sign in
            </button>
          </div>
        </div>
      </header>
  );
};

// MUHIM: Mana shu qator bo'lishi shart!
export default Header;