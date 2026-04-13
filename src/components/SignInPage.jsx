import { useNavigate } from "react-router-dom";
import { BookOpen, Mail, Lock } from "lucide-react";

export default function SignInPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen overflow-hidden bg-[#f8f8f8] p-3 md:p-4">
      <div className="grid min-h-[calc(100vh-24px)] grid-cols-1 rounded-[6px] bg-[#f8f8f8] lg:grid-cols-[0.98fr_1.08fr]">
        {/* Left */}
        <div className="relative flex flex-col px-5 py-8 sm:px-8 md:px-12 lg:px-14 xl:px-16">
          {/* Top row */}
          <div className="flex items-start">
            <button
              onClick={() => navigate("/")}
              className="mt-5 flex items-center gap-3"
            >
              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border-2 border-teal-500">
                <BookOpen className="h-6 w-6 text-orange-500" />
              </div>

              <span className="text-[18px] font-extrabold tracking-wide text-teal-700">
                AL MUAMALAT
              </span>
            </button>

            <div className="absolute right-[-22px] top-[92px] z-20 hidden items-center gap-3 lg:flex">
              <div className="text-right">
                <p className="text-[14px] leading-none text-slate-400">
                  Questions?
                </p>
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

          {/* Form area */}
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-[430px]">
              <h1 className="text-[72px] font-black leading-[0.95] tracking-[-0.04em] text-slate-950">
                Get started
              </h1>



              {/* Email */}
              <div className="relative mt-14">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-[58px] w-full rounded-[12px] border border-slate-300 bg-transparent pl-4 pr-12 text-[15px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-teal-500"
                />
                <Mail className="absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
              </div>

              {/* Password */}
              <div className="relative mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="h-[58px] w-full rounded-[12px] border border-slate-300 bg-transparent pl-4 pr-12 text-[15px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-teal-500"
                />
                <Lock className="absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
              </div>

              <button className="mt-16 h-[58px] w-full rounded-[12px] bg-[#0ba79d] text-[20px] font-semibold text-white transition hover:bg-[#08988f]">
                Sign in
              </button>

              <button
                onClick={() => navigate("/register")}
                className="mt-5 block w-full text-center text-[18px] text-slate-400 transition hover:text-teal-600"
              >
                Create a new account !
              </button>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="hidden p-3 lg:block">
          <div className="flex h-full min-h-[700px] flex-col items-center justify-between rounded-[30px] bg-[#07a79d] px-8 pb-14 pt-10 xl:px-10">
            <div className="flex w-full items-start justify-center pt-2">
              <div className="relative w-full max-w-[560px]">
                <div className="mx-auto mt-10 flex justify-center">
                  <svg
                    viewBox="0 0 420 320"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full max-w-[430px]"
                  >
                    <rect
                      x="60"
                      y="30"
                      width="200"
                      height="240"
                      rx="12"
                      fill="#e8f8f5"
                      opacity="0.5"
                    />
                    <rect
                      x="80"
                      y="50"
                      width="160"
                      height="20"
                      rx="4"
                      fill="#0d9488"
                      opacity="0.3"
                    />
                    <rect
                      x="80"
                      y="80"
                      width="120"
                      height="10"
                      rx="3"
                      fill="#f97316"
                      opacity="0.7"
                    />
                    <rect
                      x="80"
                      y="98"
                      width="140"
                      height="10"
                      rx="3"
                      fill="#f97316"
                      opacity="0.5"
                    />
                    <rect
                      x="80"
                      y="116"
                      width="100"
                      height="10"
                      rx="3"
                      fill="#f97316"
                      opacity="0.3"
                    />
                    <rect
                      x="140"
                      y="55"
                      width="220"
                      height="260"
                      rx="16"
                      fill="rgba(255,255,255,0.12)"
                      stroke="rgba(255,255,255,0.25)"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="175"
                      y="85"
                      width="148"
                      height="220"
                      rx="20"
                      fill="#1e293b"
                    />
                    <rect
                      x="183"
                      y="100"
                      width="132"
                      height="192"
                      rx="10"
                      fill="#f8fafc"
                    />
                    <circle cx="249" cy="128" r="18" fill="#fde8d8" />
                    <circle cx="249" cy="122" r="9" fill="#f5c5a0" />
                    <path
                      d="M233 145 Q249 138 265 145"
                      stroke="#1e293b"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <rect
                      x="191"
                      y="160"
                      width="115"
                      height="9"
                      rx="3"
                      fill="#f97316"
                      opacity="0.6"
                    />
                    <rect
                      x="191"
                      y="176"
                      width="90"
                      height="9"
                      rx="3"
                      fill="#e2e8f0"
                    />
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <circle
                        key={i}
                        cx={195 + i * 14}
                        cy={196}
                        r="3.5"
                        fill="#94a3b8"
                        opacity="0.7"
                      />
                    ))}
                    <rect
                      x="205"
                      y="208"
                      width="80"
                      height="26"
                      rx="6"
                      fill="#f97316"
                    />
                    <text
                      x="222"
                      y="226"
                      fill="#fff"
                      fontSize="9"
                      fontWeight="700"
                      fontFamily="sans-serif"
                    >
                      SIGN UP
                    </text>
                    <rect
                      x="300"
                      y="42"
                      width="58"
                      height="66"
                      rx="10"
                      fill="#f97316"
                      opacity="0.9"
                    />
                    <rect
                      x="315"
                      y="58"
                      width="28"
                      height="4"
                      rx="2"
                      fill="#fff"
                      opacity="0.7"
                    />
                    <rect
                      x="315"
                      y="68"
                      width="18"
                      height="4"
                      rx="2"
                      fill="#fff"
                      opacity="0.5"
                    />
                    <circle cx="329" cy="90" r="8" fill="#fff" opacity="0.25" />
                    <path
                      d="M325 90 l3 3 7-7"
                      stroke="#fff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M360 200 Q390 175 380 210 Q395 195 385 225 Q400 210 388 235"
                      stroke="#2dd4bf"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.7"
                    />
                    <g transform="translate(88,138)">
                      <rect
                        x="2"
                        y="58"
                        width="18"
                        height="82"
                        rx="5"
                        fill="#1e293b"
                      />
                      <rect
                        x="20"
                        y="38"
                        width="22"
                        height="58"
                        rx="5"
                        fill="#374151"
                      />
                      <rect
                        x="0"
                        y="140"
                        width="10"
                        height="20"
                        rx="3"
                        fill="#f97316"
                      />
                      <rect
                        x="30"
                        y="140"
                        width="10"
                        height="20"
                        rx="3"
                        fill="#f97316"
                      />
                      <ellipse
                        cx="20"
                        cy="38"
                        rx="20"
                        ry="20"
                        fill="#fde8d8"
                      />
                      <ellipse
                        cx="20"
                        cy="32"
                        rx="11"
                        ry="12"
                        fill="#f5c5a0"
                      />
                      <path
                        d="M7 22 Q20 12 33 22"
                        stroke="#1e293b"
                        strokeWidth="3"
                        fill="none"
                      />
                      <rect
                        x="8"
                        y="58"
                        width="24"
                        height="50"
                        rx="5"
                        fill="#f97316"
                      />
                      <path
                        d="M32 80 Q52 68 62 85"
                        stroke="#f97316"
                        strokeWidth="5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <ellipse
                        cx="64"
                        cy="88"
                        rx="10"
                        ry="8"
                        fill="#fde8d8"
                      />
                      <path
                        d="M10 78 Q-8 90 -16 102"
                        stroke="#f97316"
                        strokeWidth="5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[520px]">
              <p className="text-center text-[28px] font-bold leading-[1.35] text-white xl:text-[30px]">
                Welcome to Al Muamalat –
                <br />
                Empowering Your Journey in
                <br />
                Islamic Finance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}