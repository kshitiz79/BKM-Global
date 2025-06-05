"use client"
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      {/* Header Section */}
      <div className="w-full max-w-7xl mb-8">
        <div className="bg-gradient-to-r from-green-600 to-green-600 p-8 rounded-lg shadow-lg text-center text-white animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
          <p className="text-sm text-gray-200">
            At BKM Global, we value your trust and are committed to protecting your privacy.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl space-y-6">
        {/* Privacy Policy Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Introduction */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white transform transition-transform duration-300 hover:scale-105 animate-fade-in">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">📜</span>
              <h3 className="text-lg font-semibold">Introduction</h3>
            </div>
            <p className="text-sm text-gray-300">
              This Privacy Policy outlines how we collect, use, disclose, and safeguard your information. By using our website or services, you agree to the practices detailed in this policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white transform transition-transform duration-300 hover:scale-105 animate-fade-in">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">📋</span>
              <h3 className="text-lg font-semibold">Information We Collect</h3>
            </div>
            <p className="text-sm text-gray-300">
              We collect personal details such as your name, email address, phone number, and payment information. Additionally, we gather non-personal details like your IP address, browser type, device type, and the pages you visit on our website.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white transform transition-transform duration-300 hover:scale-105 animate-fade-in">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🛠️</span>
              <h3 className="text-lg font-semibold">How We Use Your Information</h3>
            </div>
            <p className="text-sm text-gray-300">
              Your information helps us provide the services you request, enhance your user experience, and ensure effective communication. This includes sending updates, promotional materials, or important notifications. We also use your data to maintain security, prevent unauthorized access, and comply with legal obligations.
            </p>
          </div>

          {/* Sharing Your Information */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white transform transition-transform duration-300 hover:scale-105 animate-fade-in">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🤝</span>
              <h3 className="text-lg font-semibold">Sharing Your Information</h3>
            </div>
            <p className="text-sm text-gray-300">
              We only share your information with trusted third-party service providers who assist us in operating our services, such as payment processors. We may also disclose information to comply with legal requirements or protect our rights. We do not sell or rent your personal information to third parties for marketing purposes.
            </p>
          </div>

          {/* Cookies and Tracking Technologies */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white transform transition-transform duration-300 hover:scale-105 animate-fade-in">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🍪</span>
              <h3 className="text-lg font-semibold">Cookies and Tracking Technologies</h3>
            </div>
            <p className="text-sm text-gray-300">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies store small pieces of data on your device to remember preferences and improve functionality. You can manage your cookie preferences through your browser settings.
            </p>
          </div>

          {/* Data Security */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white transform transition-transform duration-300 hover:scale-105 animate-fade-in">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🔒</span>
              <h3 className="text-lg font-semibold">Data Security</h3>
            </div>
            <p className="text-sm text-gray-300">
              We implement advanced security measures, including encryption of sensitive data and regular system audits, to protect your information. While we strive to maintain the highest security standards, no method of online data transmission or storage is completely secure.
            </p>
          </div>

          {/* Your Rights */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white transform transition-transform duration-300 hover:scale-105 animate-fade-in">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">⚖️</span>
              <h3 className="text-lg font-semibold">Your Rights</h3>
            </div>
            <p className="text-sm text-gray-300">
              You have the right to access your data, update inaccurate details, request data deletion, and decline specific uses of your information, such as marketing. To exercise these rights, please contact us.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white transform transition-transform duration-300 hover:scale-105 animate-fade-in">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🚸</span>
              <h3 className="text-lg font-semibold">Children's Privacy</h3>
            </div>
            <p className="text-sm text-gray-300">
              Our services are not directed toward individuals under the age of 18, and we do not knowingly collect information from minors. If you believe a child has provided us with personal data, please contact us immediately.
            </p>
          </div>

          {/* Updates to This Policy */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white transform transition-transform duration-300 hover:scale-105 animate-fade-in md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">📅</span>
              <h3 className="text-lg font-semibold">Updates to This Policy</h3>
            </div>
            <p className="text-sm text-gray-300">
              Our Privacy Policy may be updated periodically. Any updates will be posted on this page, along with the effective date. We encourage you to review this policy regularly to stay informed.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full max-w-5xl mt-8 text-center text-gray-400 text-sm">
        <p>
          Effective Date: June 5, 2025 | For inquiries, contact us at{' '}
          <a href="mailto:info@bkmglobal.in" className="text-green-500 hover:underline">
            info@bkmglobal.in
          </a>
        </p>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;