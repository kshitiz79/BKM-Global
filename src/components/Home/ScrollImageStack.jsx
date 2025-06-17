"use client";

const videoData = [
  {
    src: "/investment/1.mp4",
    heading: "Investment Management",
    paragraph:
      "We offer comprehensive asset management solutions tailored to meet the diverse needs of our clients.",
  },
  {
    src: "/investment/2.mp4",
    heading: "Market Alert",
    paragraph:
      "We specialize in delivering precise trading signals that empower investors to make informed decisions.",
  },
  {
    src: "/investment/3.mp4",
    heading: "Uplearn",
    paragraph:
      "We believe in the power of uplearning outdated practices and embracing new strategies for financial success.",
  },
];

export default function ScrollVideoStack() {
  return (
    <div className="bg-white relative w-full">
      <h1 className="text-5xl md:text-6xl text-black text-center pt-12 mb-4">
        Our Services
      </h1>

      <div className="h-[300vh] relative">
        {videoData.map((video, index) => (
          <div
            key={index}
            className="sticky top-0 h-screen flex items-center justify-center"
            style={{ zIndex: index + 1 }}
          >
            <div className="relative max-w-6xl w-full h-[60vh] rounded-xl shadow-xl overflow-hidden">
              <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                className="object-cover w-full h-full"
              />

              {/* Top-left heading */}
              <div className="absolute top-4 left-6 text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
                {video.heading}
              </div>

              {/* Bottom-left paragraph */}
              <div className="absolute bottom-6 left-6 text-white text-sm md:text-2xl max-w-md drop-shadow-md">
                {video.paragraph}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
