import { FaCheck, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "What is the UpLearn program?",
    answer: "The UpLearn program is designed to help traders and investors let go of outdated practices and adopt new strategies that align with current market dynamics. It combines personalized assessments, educational resources, hands-on training, and continuous support to ensure your success."
  },
  {
    question: "Who can benefit from the UpLearn program?",
    answer: "Traders and investors at all levels can benefit from the program, whether you are a beginner looking to start on the right foot or an experienced trader needing to update your strategies. The program is tailored to meet the specific needs of each participant."
  },
  {
    question: "How long does the UpLearn program take?",
    answer: "The duration of the program varies depending on individual needs and goals. We offer flexible timelines to accommodate your schedule and ensure you get the most out of the program. Some participants may see significant improvements in a few months, while others may benefit from ongoing support."
  },
  {
    question: "How do I get started with the UpLearn program?",
    answer: "To get started, contact us to schedule a personalized assessment. Our team will guide you through the process and help you begin your journey to uplearning and success. We look forward to helping you achieve your financial goals."
  },
  {
    question: "What makes BKM Global's UpLearn program different?",
    answer: "Our program combines cutting-edge technology with personalized mentorship. We focus on practical application rather than just theory, ensuring you can immediately implement what you learn in real market conditions."
  },
  {
    question: "Do you provide ongoing support after completing the program?",
    answer: "Yes, we provide lifetime access to our community platform, regular market updates, and ongoing support from our expert team. Your success is our priority, and we're committed to supporting you throughout your trading journey."
  }
];

export function Section3() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white text-gray-900 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <FaQuestionCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We understand that trust and transparency are key when it comes to your trading education. Here are answers to the most common questions about our UpLearn program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-[#1A3A8D] transition-colors duration-300">
                    <FaCheck className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our expert team is here to help you understand how the UpLearn program can transform your trading career. Get in touch for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Support Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}