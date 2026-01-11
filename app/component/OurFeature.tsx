import React from "react";
import {
  Rocket,
  ShieldCheck,
  Zap,
  Globe,
  BarChart3,
  Users,
  ArrowRight,
} from "lucide-react";

export default function OurFeature() {
  const features = [
    {
      title: "High Performance",
      description:
        "Optimized for speed and efficiency, ensuring your application runs smoothly under high load.",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50",
    },
    {
      title: "Secure by Default",
      description:
        "Enterprise-grade security features built-in to protect your data and user privacy.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50",
    },
    {
      title: "Global Scale",
      description:
        "Deploy your application to a global network of edge locations for low-latency access.",
      icon: <Globe className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50",
    },
    {
      title: "Real-time Analytics",
      description:
        "Gain valuable insights into user behavior and application performance with our dashboard.",
      icon: <BarChart3 className="w-6 h-6 text-orange-600" />,
      bg: "bg-orange-50",
    },
    {
      title: "Team Collaboration",
      description:
        "Built for teams to collaborate effectively with roles, permissions, and audit logs.",
      icon: <Users className="w-6 h-6 text-pink-600" />,
      bg: "bg-pink-50",
    },
    {
      title: "Automated Deployments",
      description:
        "Push code and let our CI/CD pipelines handle the testing and deployment process.",
      icon: <Rocket className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build faster
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our platform provides the tools and infrastructure you need to scale
            your business without the headache of managing servers.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div
                className={`inline-flex items-center justify-center p-3 rounded-xl ${feature.bg} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                {feature.description}
              </p>

              <div className="flex items-center text-blue-600 font-medium group/link">
                <span className="group-hover/link:underline">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA (Optional) */}
        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-blue-500/30">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
