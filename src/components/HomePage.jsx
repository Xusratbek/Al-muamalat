import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  BookOpen,
  HandCoins,
  Globe,
  GraduationCap,
  Landmark,
  ShoppingCart,
  FileCheck2,
  Star,
  Calendar,
} from "lucide-react";
import student from "../assets/student.png";

export default function HomePage() {
  const navigate = useNavigate();

  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState({
    code: "ENG",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",
    label: "English",
  });

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

  const services = [
    {
      id: 1,
      title: "Islamic Fund Management",
      description:
        "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
      icon: HandCoins,
      bg: "bg-[#dfe8fb]",
    },
    {
      id: 2,
      title: "International Relations",
      description:
        "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
      icon: Globe,
      bg: "bg-[#dff4ea]",
    },
    {
      id: 3,
      title: "Education and Training",
      description:
        "We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.",
      icon: GraduationCap,
      bg: "bg-[#f8e2f1]",
    },
    {
      id: 4,
      title: "For Islamic Banks",
      description:
        "We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services.",
      icon: Landmark,
      bg: "bg-[#e8def8]",
    },
    {
      id: 5,
      title: "Islamic Capital Market",
      description:
        "We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.",
      icon: ShoppingCart,
      bg: "bg-[#e9edf1]",
    },
    {
      id: 6,
      title: "Shariah Compliance Audit",
      description:
        "We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.",
      icon: FileCheck2,
      bg: "bg-[#f8ebbc]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-slate-900">
      {/* Navbar */}
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
              onClick={() => navigate("/signin")}
              className="rounded-lg bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              Sign in
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
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

      {/* Slider dots */}
      <div className="flex items-center justify-center gap-2 py-7">
        <span className="h-2.5 w-8 rounded-full bg-teal-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
      </div>

      {/* Services */}
      <section className="pb-20">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 xl:px-16">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-4xl font-extrabold text-slate-900">
              Our services
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Expert guidance for managing funds in alignment with Islamic
              principles, helping you make informed, halal investment decisions.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ id, title, description, icon: Icon, bg }) => (
              <div
                key={id}
                className={`${bg} rounded-[28px] p-8 shadow-sm transition duration-300 hover:-translate-y-1`}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/60">
                  <Icon className="h-7 w-7 text-slate-600" />
                </div>

                <h3 className="mb-4 text-[30px] font-bold leading-tight text-slate-800">
                  {title}
                </h3>

                <p className="mb-7 text-sm leading-7 text-slate-600">
                  {description}
                </p>

                <button className="w-full rounded-xl bg-slate-900 py-3 text-sm font-bold text-white transition hover:bg-slate-800">
                  Learn more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}