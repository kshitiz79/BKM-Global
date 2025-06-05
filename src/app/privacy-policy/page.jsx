import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      {/* Main Content */}
      <div className="w-full max-w-5xl">
        {/* Privacy Policy Content */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full text-white max-w-7xl">
          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
          <p className="text-sm text-gray-400 mb-6">
            At BKM Global, we value your trust and are committed to protecting your privacy.
          </p>

          <div className="space-y-6 text-sm text-gray-300 ">
            <div>
              <h3 className="text-lg font-semibold text-white">Introduction</h3>
              <p>
                This Privacy Policy outlines how we collect, use, disclose, and safeguard your information. By using our website or services, you agree to the practices detailed in this policy.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Information We Collect</h3>
              <p>
                We collect personal details such as your name, email address, phone number, and payment information. Additionally, we gather non-personal details like your IP address, browser type, device type, and the pages you visit on our website.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">How We Use Your Information</h3>
              <p>
                Your information helps us provide the services you request, enhance your user experience, and ensure effective communication. This includes sending updates, promotional materials, or important notifications. We also use your data to maintain security, prevent unauthorized access, and comply with legal obligations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Sharing Your Information</h3>
              <p>
                We only share your information with trusted third-party service providers who assist us in operating our services, such as payment processors. We may also disclose information to comply with legal requirements or protect our rights. We do not sell or rent your personal information to third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Cookies and Tracking Technologies</h3>
              <p>
                Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies store small pieces of data on your device to remember preferences and improve functionality. You can manage your cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Data Security</h3>
              <p>
                We implement advanced security measures, including encryption of sensitive data and regular system audits, to protect your information. While we strive to maintain the highest security standards, no method of online data transmission or storage is completely secure.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Your Rights</h3>
              <p>
                You have the right to access your data, update inaccurate details, request data deletion, and decline specific uses of your information, such as marketing. To exercise these rights, please contact us.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Children's Privacy</h3>
              <p>
                Our services are not directed toward individuals under the age of 18, and we do not knowingly collect information from minors. If you believe a child has provided us with personal data, please contact us immediately.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Updates to This Policy</h3>
              <p>
                Our Privacy Policy may be updated periodically. Any updates will be posted on this page, along with the effective date. We encourage you to review this policy regularly to stay informed.
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default PrivacyPolicy; 