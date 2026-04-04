import React from "react";

function WorkFlow() {
  return (
    <div className="w-full py-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="w-[90%] mx-auto flex flex-col items-center text-center gap-4">

        <h2 className="text-4xl font-bold text-white">Ready To Transform Your Workflow?</h2>

        <p className="text-purple-200 text-sm max-w-md">
          Join thousands of professionals who are already using Digitools to work smarter.
          Start your free trial today.
        </p>

        <div className="flex items-center gap-4 mt-2">
          <button className="bg-white px-6 py-2 rounded-full text-blue-600 text-sm font-medium border border-white">
            <a href="">Explore Products</a>
          </button>
          <button className="px-6 py-2 rounded-full text-sm font-medium border text-white border-white">
            <a href="">View Pricing</a>
          </button>
        </div>

        <p className="text-purple-200 text-xs mt-2">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  );
}

export default WorkFlow;