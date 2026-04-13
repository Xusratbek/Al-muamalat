import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, User, Mail, ChevronDown } from "lucide-react";
import flag from "../assets/uz.png";

const countries = [
  { name: "Uzbekistan", flag },
  { name: "Russia", flag: "/flags/ru.png" },
  { name: "Kazakhstan", flag: "/flags/kz.png" },
  { name: "Turkey", flag: "/flags/tr.png" },
  { name: "UAE", flag: "/flags/ae.png" },
];

export default function RegisterPage() {
  const [selected, setSelected] = useState(countries[0]);
  const navigate = useNavigate();

  return (
    <div className="grid min-h-screen grid-cols-1 bg-[#f6f6f6] lg:grid-cols-2">
      {/* ─── Left: Form ─── */}
      <div className="relative flex flex-col px-6 py-8 md:px-10 xl:px-16">
        {/* Top row */}
        <div className="flex items-start justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="mt-6 flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-teal-500">
              <BookOpen className="h-6 w-6 text-orange-500" />
            </div>

            <span className="text-[18px] font-extrabold tracking-wide text-teal-700">
              AL MUAMALAT
            </span>
          </button>

          {/* Ask Diyor */}
          <div className="absolute right-[-18px] top-[92px] z-20 hidden items-center gap-3 lg:flex">
            <div className="text-right">
              <p className="text-[14px] leading-none text-slate-400">Questions?</p>
              <p className="mt-2 text-[18px] font-bold leading-none text-teal-600">
                Ask Diyor
              </p>
            </div>

            <div className="rounded-full border-[7px] border-white bg-white shadow-sm">
              <img
                src="https://i.pravatar.cc/80?img=33"
                alt="Diyor"
                className="h-[64px] w-[64px] rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-[430px]">
            <h1 className="text-[72px] font-black leading-[0.95] tracking-[-0.04em] text-slate-950">
              Get started
            </h1>

            <p className="mt-3 text-[18px] text-slate-500">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/signin")}
                className="font-semibold text-teal-600"
              >
                Sign in
              </button>
            </p>

            {/* Name */}
            <div className="relative mt-14">
              <input
                type="text"
                placeholder="Enter your name"
                className="h-[58px] w-full rounded-[12px] border border-slate-300 bg-transparent pl-4 pr-12 text-[15px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-teal-500"
              />
              <User className="absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
            </div>

            {/* Email */}
            <div className="relative mt-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-[58px] w-full rounded-[12px] border border-slate-300 bg-transparent pl-4 pr-12 text-[15px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-teal-500"
              />
              <Mail className="absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
            </div>

            {/* Country */}
            <div className="relative mt-5">
              <img
                src={selected.flag}
                alt={selected.name}
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-7 -translate-y-1/2 rounded-sm object-cover"
              />

              <select
                value={selected.name}
                onChange={(e) => {
                  const country = countries.find(
                    (item) => item.name === e.target.value
                  );
                  if (country) setSelected(country);
                }}
                className="h-[58px] w-full appearance-none rounded-[12px] border border-slate-300 bg-transparent pl-14 pr-12 text-[15px] text-slate-500 outline-none focus:border-teal-500"
              >
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>

              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
            </div>

            <button className="mt-16 h-[58px] w-full rounded-[12px] bg-teal-600 text-[18px] font-bold text-white transition hover:bg-teal-700">
              Log in
            </button>
          </div>
        </div>
      </div>

      {/* ─── Right: Teal panel ─── */}
      <div className="m-5 ml-0 hidden flex-col items-center justify-end rounded-2xl bg-[#06a39a] px-10 pb-12 pt-10 lg:flex">
        <div className="mb-8 flex w-full max-w-md items-end justify-center">
          <svg
            viewBox="0 0 420 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-sm"
          >
            <rect x="60" y="30" width="200" height="240" rx="12" fill="#e8f8f5" opacity="0.5" />
            <rect x="80" y="50" width="160" height="20" rx="4" fill="#0d9488" opacity="0.3" />
            <rect x="80" y="80" width="120" height="10" rx="3" fill="#f97316" opacity="0.7" />
            <rect x="80" y="98" width="140" height="10" rx="3" fill="#f97316" opacity="0.5" />
            <rect x="80" y="116" width="100" height="10" rx="3" fill="#f97316" opacity="0.3" />
            <rect x="140" y="55" width="220" height="260" rx="16" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
            <rect x="175" y="85" width="148" height="220" rx="20" fill="#1e293b" />
            <rect x="183" y="100" width="132" height="192" rx="10" fill="#f8fafc" />
            <circle cx="249" cy="128" r="18" fill="#fde8d8" />
            <circle cx="249" cy="122" r="9" fill="#f5c5a0" />
            <path d="M233 145 Q249 138 265 145" stroke="#1e293b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <rect x="191" y="160" width="115" height="9" rx="3" fill="#f97316" opacity="0.6" />
            <rect x="191" y="176" width="90" height="9" rx="3" fill="#e2e8f0" />
            <rect x="205" y="196" width="80" height="26" rx="6" fill="#f97316" />
            <text x="222" y="214" fill="#fff" fontSize="9" fontWeight="700" fontFamily="sans-serif">
              SIGN UP
            </text>
            <rect x="300" y="42" width="58" height="66" rx="10" fill="#f97316" opacity="0.9" />
            <rect x="315" y="58" width="28" height="4" rx="2" fill="#fff" opacity="0.7" />
            <rect x="315" y="68" width="18" height="4" rx="2" fill="#fff" opacity="0.5" />
            <circle cx="329" cy="90" r="8" fill="#fff" opacity="0.25" />
            <path d="M325 90 l3 3 7-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M360 200 Q390 175 380 210 Q395 195 385 225 Q400 210 388 235" stroke="#2dd4bf" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
            <g transform="translate(88,138)">
              <rect x="2" y="58" width="18" height="82" rx="5" fill="#1e293b" />
              <rect x="20" y="38" width="22" height="58" rx="5" fill="#374151" />
              <rect x="0" y="140" width="10" height="20" rx="3" fill="#f97316" />
              <rect x="30" y="140" width="10" height="20" rx="3" fill="#f97316" />
              <ellipse cx="20" cy="38" rx="20" ry="20" fill="#fde8d8" />
              <ellipse cx="20" cy="32" rx="11" ry="12" fill="#f5c5a0" />
              <path d="M7 22 Q20 12 33 22" stroke="#1e293b" strokeWidth="3" fill="none" />
              <rect x="8" y="58" width="24" height="50" rx="5" fill="#f97316" />
              <path d="M32 80 Q52 68 62 85" stroke="#f97316" strokeWidth="5" strokeLinecap="round" fill="none" />
              <ellipse cx="64" cy="88" rx="10" ry="8" fill="#fde8d8" />
              <path d="M10 78 Q-8 90 -16 102" stroke="#f97316" strokeWidth="5" strokeLinecap="round" fill="none" />
            </g>
          </svg>
        </div>

        <p className="text-center text-xl font-bold leading-relaxed text-white">
          Welcome to Al Muamalat –
          <br />
          Empowering Your Journey in
          <br />
          Islamic Finance
        </p>
      </div>
    </div>
  );
}