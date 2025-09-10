"use client";
import { TrendingUp, Bell, BookOpen } from 'lucide-react';

const videoData = [
  {
    src: "/investment/1.mp4",
    heading: "Investment Management",
    paragraph:
      "We offer comprehensive asset management solutions tailored to meet the diverse needs of our clients.",
    icon: TrendingUp
  },
  {
    src: "/investment/2.mp4",
    heading: "Market Alert",
    paragraph:
      "We specialize in delivering precise trading signals that empower investors to make informed decisions.",
    icon: Bell
  },
  {
    src: "/investment/3.mp4",
    heading: "Uplearn",
    paragraph:
      "We believe in the power of uplearning outdated practices and embracing new strategies for financial success.",
    icon: BookOpen
  },
];

export default function ScrollVideoStack() {
  return (
    <div className="bg-white relative w-full">
      {/* Hidden on mobile devices */}
      <div className="hidden sm:block">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center pt-8 sm:pt-10 md:pt-12 mb-4">
          Our Services
        </h1>

        <div className="h-[300vh] relative">
          {videoData.map((video, index) => (
            <div
              key={index}
              className="sticky top-0 h-screen flex items-center justify-center"
              style={{ zIndex: index + 1 }}
            >
              <div className="relative w-[90%] sm:w-[85%] md:w-[80%] max-w-6xl h-[50vh] sm:h-[55vh] md:h-[60vh] rounded-xl shadow-xl overflow-hidden">
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full"
                />

                {/* Top-left heading */}
                <div className="absolute top-3 sm:top-4 left-4 sm:left-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg">
                  {video.heading}
                </div>

                {/* Bottom-left paragraph */}
                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-6 text-white text-xs sm:text-sm md:text-base lg:text-xl max-w-[80%] sm:max-w-md drop-shadow-md">
                  {video.paragraph}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile version - simple cards */}
      <div className="sm:hidden block bg-white py-8 px-4">
        <h1 className="text-2xl font-bold text-black text-center mb-6">
          Our Services
        </h1>
        
        <div className="space-y-6">
          {videoData.map((video, index) => {
            const IconComponent = video.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-5 border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center mr-4">
                    <IconComponent className="text-blue-600 w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{video.heading}</h2>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {video.paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}