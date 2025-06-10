import Image from "next/image";

const services = [
  {
    title: "Personalized Investment Strategies",
    image: "/fund5.png",
    description:
      "At BKM Global, we recognize that each client has unique financial goals and risk tolerance levels. Our Investment management services are tailored to meet your specific needs. We develop personalized investment strategies that align with your objectives, ensuring that your assets are managed effectively.",
  },
  {
    title: "Diverse Asset Management",
    image: "/fund6.png",
    description:
      "Our expertise spans a wide range of asset classes, including equities, bonds, real estate, and alternative investments. This approach aids in distributing risk and maximizing potential returns. Whether you are looking to grow your wealth, secure your retirement, or achieve other financial goals, our fund managers will create a balanced portfolio that meets your requirements.",
  },
  {
    title: "Ongoing Performance Monitoring",
    image: "/fund7.png",
    description:
      "Effective Investment management requires continuous monitoring and adjustments. At BKM Global, we use advanced analytical tools and technologies to track the performance of your assets. Our fund managers regularly review and rebalance portfolios to adapt to changing market conditions and capitalize on new opportunities.",
  },
  {
    title: "Transparent Reporting",
    image: "/fund8.png",
    description:
      "We believe in maintaining transparency with our clients. You will receive regular, detailed reports on the performance of your investments, providing you with a clear understanding of how your assets are being managed. Our team is always available to discuss your portfolio and answer any questions you may have.",
  },
];

export default function Section3() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Investment Management Services</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-6">
            <div className="w-full h-60 relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-300 text-justify">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
