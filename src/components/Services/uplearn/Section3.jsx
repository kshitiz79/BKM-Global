import { FaCheck } from "react-icons/fa";

export default function Section3() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        FAQs
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-4xl">
        We understand that trust and transparency are key when it comes to managing your investments. That’s why we’ve answered the most common questions about how your funds are protected, how our service works, and what you can expect.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Box 1 */}
          <div className="flex items-start gap-4">
            <span className="text-lime-400 text-xl pt-1">
              <FaCheck />
            </span>
            <div>
              <h3 className="font-bold text-lg mb-2">
              What is the Uplearn program?
              </h3>
              <p className="text-gray-300">
              The Uplearn program is designed to help traders and investors let go of outdated practices and adopt new strategies that align with current market dynamics. It combines personalized assessments, educational resources, hands-on training, and continuous support to ensure yoursuccess.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="flex items-start gap-4">
            <span className="text-lime-400 text-xl pt-1">
              <FaCheck />
            </span>
            <div>
              <h3 className="font-bold text-lg mb-2">Who can benefit from the Uplearn program?</h3>
              <p className="text-gray-300">
              Traders and investors at all levels can benefit from the program, whether you are a beginner looking to start on the right foot or an experienced trader needing to update your strategies. The program is tailored to meet the specific needs of each participant.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="flex items-start gap-4">
            <span className="text-lime-400 text-xl pt-1">
              <FaCheck />
            </span>
            <div>
              <h3 className="font-bold text-lg mb-2">
              How long does the Uplearn program take?
              </h3>
              <p className="text-gray-300">
              The duration of the program varies depending on individual needs and goals. We offer flexible timelines to accommodate your schedule and ensure you get the most out of the program. Some participants may see significant improvements in a few months, while others may benefit from ongoing support.
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="flex items-start gap-4">
            <span className="text-lime-400 text-xl pt-1">
              <FaCheck />
            </span>
            <div>
              <h3 className="font-bold text-lg mb-2">
              How do I get started with the Uplearn program?
              </h3>
              <p className="text-gray-300">
              To get started, contact us to schedule a personalized assessment. Our team will guide you through the process and help you begin your journey to uplearning and success. We look forward to helping you achieve your financial goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
