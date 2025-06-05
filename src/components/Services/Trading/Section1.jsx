import Image from "next/image";

export default function Section1() {
  const fundData = [
    {
      id: 1,
      title: "What Are Trading Signals?",
      image: "/fund2.png",
      description:
        "Trading signals are actionable triggers derived from comprehensive market analysis. They serve as indicators of when to buy or sell securities based on various methodologies. These methodologies include technical indicators, mathematical algorithms, and fundamental analysis, each contributing unique insights into market conditions.",
    },
  ];

  return (
    <section className="bg-black py-12 space-y-10">
        {/* <h1 className="text-white text-4xl text-center uppercase text-bold">The Importance of Fund Management</h1> */}
      {fundData.map((item, index) => (
        <section
          key={item.id}
          className="bg-gradient-to-b from-[#0d0e3c] to-[#0f6320] text-white rounded-2xl p-6 md:p-12 max-w-7xl mx-auto shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image - conditionally ordered */}
            <div
              className={`rounded-xl overflow-hidden border border-gray-300 ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text - conditionally ordered */}
            <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{item.title}</h2>
              <p className="text-lg leading-relaxed text-gray-200">{item.description}</p>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}
