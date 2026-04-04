import React from "react";


const steps = [
  {
    id: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: '👤'
  },
  {
    id: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    icon: '📦'
  },
  {
    id: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: '🚀'
  }
];

const StepCard = ({ step }) => {
  return (
    <div className="card bg-white shadow-sm relative p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Badge */}
      <div className="absolute -top-3.5 -right-3.5 w-9 h-9 bg-violet-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
        {step.id}
      </div>

      {/* Icon */}
      <div className="w-18 h-18 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-5">
        {step.icon}
      </div>

      {/* Text */}
      <h3 className="text-lg font-semibold text-base-content mb-2">
        {step.title}
      </h3>
      <p className="text-sm text-base-content/55 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
};

const GetStartedSteps = () => {
  return (
    <section className="bg-base-200 min-h-screen flex items-center justify-center py-16 px-4">
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-4xl font-bold text-base-content mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-base-content/60 text-sm mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSteps;
