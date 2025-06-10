import Image from "next/image";

export default function Section2() {
  const fundData = [
    {
      id: 1,
      title: "Maximizing Returns",
      image: "/fund2.png",
      description:
        "The core objective of fund management is to achieve the highest possible returns on investments while mitigating risks. This involves a careful analysis of market trends, economic conditions, and individual asset performance. By leveraging their expertise, fund managers at BKM Global make informed decisions that enhance the value of your investments.",
    },
    {
      id: 2,
      title: "Risk Mitigation",
      image: "/fund3.png",
      description:
        "In the volatile world of finance, risk management is crucial. Fund managers employ various strategies to protect investments from market fluctuations, economic downturns, and other potential threats. At BKM Global, we prioritize risk mitigation to ensure that your assets are safeguarded against unforeseen challenges.",
    },
    {
      id: 3,
      title: "Liquidity Management",
      image: "/fund4.png",
      description:
        "Ensuring liquidity is another vital aspect of fund management. This involves maintaining the right balance between liquid and illiquid assets to meet short-term and long-term financial obligations. Our fund managers are adept at managing liquidity, ensuring that your funds are readily available when needed without compromising on growth opportunities.",
    },
  ];

  return (
    <section className="bg-black py-12 space-y-10">
        <h1 className="text-white text-4xl text-center uppercase text-bold">The Importance of Investment Management</h1>
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
              <p className="text-lg leading-relaxed text-gray-200 text-justify">{item.description}</p>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}
