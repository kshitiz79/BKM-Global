"use client";
import Link from "next/link";
import Image from "next/image";
import { FaGraduationCap, FaChartLine, FaTrophy, FaExclamationTriangle } from "react-icons/fa";

const services = [
  {
    title: "How BKM Global's UpLearn Program Works",
    icon: "/up1.png",
    iconComponent: <FaGraduationCap className="w-8 h-8" />,
    link: "/services-page/uplearn",
    description: "Discover our structured approach to transforming your trading skills through personalized learning paths."
  },
  {
    title: "Why UpLearning is Crucial in Trading",
    icon: "/up2.png",
    iconComponent: <FaChartLine className="w-8 h-8" />,
    link: "/services-page/uplearn/crucial",
    description: "Understand the importance of continuous learning and adaptation in today's dynamic markets."
  },
  {
    title: "Success Stories: Real Results from UpLearning",
    icon: "/up3.png",
    iconComponent: <FaTrophy className="w-8 h-8" />,
    link: "/services-page/uplearn",
    description: "Read inspiring stories from traders who transformed their careers through our program."
  },
  {
    title: "5 Common Mistakes New Forex Traders Make",
    icon: "/up4.png",
    iconComponent: <FaExclamationTriangle className="w-8 h-8" />,
    link: "/services-page/uplearn/comman-mistakes",
    description: "Learn about the most frequent pitfalls and how to avoid them in your trading journey."
  },
];

export function Section2() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 text-gray-900 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Learning Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our extensive collection of educational materials designed to accelerate your trading success and help you avoid common pitfalls.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  {service.iconComponent}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="pt-4">
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-950 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Trading Skills?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful traders who have upgraded their skills through our UpLearn program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Enroll Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}