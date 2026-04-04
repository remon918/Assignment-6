import React from "react";

function Count() {
  return (
    <div className="w-full py-8  bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="flex items-center justify-center max-w-3xl mx-auto">

        <div className="flex flex-col items-center flex-1 gap-1">
          <p className="text-white text-4xl font-bold">50K+</p>
          <p className="text-purple-200 text-sm">Active Users</p>
        </div>

        <div className="w-px h-10 bg-purple-300 opacity-40" />

        <div className="flex flex-col items-center flex-1 gap-1">
          <p className="text-white text-4xl font-bold">200+</p>
          <p className="text-purple-200 text-sm">Premium Tools</p>
        </div>

        <div className="w-px h-10 bg-purple-300 opacity-40" />

        <div className="flex flex-col items-center flex-1 gap-1">
          <p className="text-white text-4xl font-bold">4.9</p>
          <p className="text-purple-200 text-sm">Rating</p>
        </div>

      </div>
    </div>
  );
}

export default Count;