import React from "react";

function TransparentPricing() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="w-[85%] mx-auto flex flex-col items-center gap-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold  mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-sm">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Starter */}
          <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div>
              <p className="text-gray-900 font-bold text-lg">Starter</p>
              <p className="text-gray-500 text-sm">
                Perfect for getting started
              </p>
            </div>
            <div>
              <span className="text-4xl font-bold text-gray-900">$0</span>
              <span className="text-gray-500 text-sm"> /Month</span>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-[#4F39F6]">✓</span> Access to 10 free
                tools
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-[#4F39F6]">✓</span> Basic templates
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-[#4F39F6]">✓</span> Community support
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-[#4F39F6]">✓</span> 1 project per month
              </li>
            </ul>
            <button className="mt-auto w-full py-2 rounded-full text-white text-sm font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              Get Started Free
            </button>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl p-6 flex flex-col gap-4 bg-linear-to-b from-[#4F39F6] to-[#9514FA] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-yellow-400 text-yellow-900 text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>
            <div>
              <p className="text-white font-bold text-lg">Pro</p>
              <p className="text-purple-200 text-sm">Best for professionals</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-white">$29</span>
              <span className="text-purple-200 text-sm"> /Month</span>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-sm text-white">
                <span>✓</span> Access to all premium tools
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <span>✓</span> Unlimited templates
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <span>✓</span> Priority support
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <span>✓</span> Unlimited projects
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <span>✓</span> Cloud sync
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <span>✓</span> Advanced analytics
              </li>
            </ul>
            <button className="mt-auto w-full py-2 rounded-full text-[#4F39F6] bg-white text-sm font-medium">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 md:col-span-2 lg:col-span-1 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div>
              <p className="text-gray-900 font-bold text-lg">Enterprise</p>
              <p className="text-gray-500 text-sm">For teams and businesses</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-gray-900">$99</span>
              <span className="text-gray-500 text-sm"> /Month</span>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-[#4F39F6]">✓</span> Everything in Pro
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-[#4F39F6]">✓</span> Team collaboration
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-[#4F39F6]">✓</span> Custom integrations
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-[#4F39F6]">✓</span> Dedicated support
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-[#4F39F6]">✓</span> SLA guarantee
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-[#4F39F6]">✓</span> Custom branding
              </li>
            </ul>
            <button className="mt-auto w-full py-2 rounded-full text-white text-sm font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransparentPricing;
