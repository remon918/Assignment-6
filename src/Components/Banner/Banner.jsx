import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className=" bg-white">
      <div className="w-[80%] mx-auto md:px-6 md:py-16 grid lg:grid-cols-2 gap-10 items-center my-15">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-1 bg-indigo-100 rounded-full px-3 py-1 text-sm font-semibold text-indigo-500">
            <div className="relative flex items-center justify-center w-7 h-7">
              <div className="absolute w-7 h-7 rounded-full bg-purple-300 opacity-30"></div>
              <div className="absolute w-5 h-5 rounded-full bg-purple-400 opacity-40"></div>
              <div className="absolute w-3 h-3 rounded-full bg-violet-700"></div>
            </div>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-5">
            Supercharge Your <br />
            <span className="text-blue-600">Digital Workflow</span>
          </h1>

          <p className="text-gray-500 mb-6 max-w-md">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex gap-4 items-center">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-5 py-6 text-[#ffffff]">
              Explore Products
            </button>
            
            {/* Could't make this gradient colored text and border style(took cloud AI's help) */}
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer text-sm font-medium border-2 border-transparent"
              style={{
                background: `linear-gradient(white, white) padding-box,
                 linear-gradient(135deg, #4F39F6, #9514FA) border-box`,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <polygon points="4,2 12,7 4,12" fill="url(#playGrad)" />
                <defs>
                  <linearGradient
                    id="playGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#4F39F6" />
                    <stop offset="100%" stopColor="#9514FA" />
                  </linearGradient>
                </defs>
              </svg>

              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #4F39F6, #9514FA)",
                }}
              >
                Watch Demo
              </span>
            </button>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="flex justify-center">
          <div className=" rounded-2xl flex items-center justify-center shadow-md">
            <img src="/src/assets/banner.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
