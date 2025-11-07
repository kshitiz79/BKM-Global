import { MapPin, Mail, Phone, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-50 to-white text-gray-800 border-t border-blue-100">
      {/* Top section: Social networks */}
      <div className="relative border-b border-blue-200 py-6 flex flex-col md:flex-row justify-between items-center lg:px-16 z-10 bg-white/50 backdrop-blur-sm">
        <div className="mb-3 md:mb-0 text-sm font-medium text-gray-600">
          Get connected with us on social networks:
        </div>
        <div className="flex space-x-6">
          <a 
            href="https://www.facebook.com/profile.php?id=61561378508716" 
            aria-label="Facebook"
            className="p-2 rounded-full bg-blue-100 text-blue-900 hover:bg-blue-200 transition-all duration-300 hover:scale-110"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="https://www.instagram.com/bkmglobal24/" 
            aria-label="Instagram"
            className="p-2 rounded-full bg-blue-100 text-blue-900 hover:bg-blue-200 transition-all duration-300 hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Main footer section */}
      <div className="relative mx-auto py-16 px-6 md:px-12 lg:px-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Logo */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="BKM Global Logo" 
                className="w-44 mx-auto lg:mx-0 drop-shadow-sm" 
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
              Your trusted partner in global trading solutions and financial services.
            </p>
          </div>

          {/* Pages */}
          <div className="text-center lg:text-left">
            <h6 className="h3-blue-900 mb-6">
              Pages
            </h6>
            <div className="space-y-3">
              <p className="text-gray-700 hover:text-blue-900 transition-colors duration-200">
                <a href="/" className="hover:underline underline-offset-2">Home</a>
              </p>
              <p className="text-gray-700 hover:text-blue-900 transition-colors duration-200">
                <a href="/services-page/fund-management" className="hover:underline underline-offset-2">Services</a>
              </p>
              <p className="text-gray-700 hover:text-blue-900 transition-colors duration-200">
                <a href="/blog-page" className="hover:underline underline-offset-2">Blog</a>
              </p>
              <p className="text-gray-700 hover:text-blue-900 transition-colors duration-200">
                <a href="/contact-us" className="hover:underline underline-offset-2">Contact</a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="text-center lg:text-left">
            <h6 className="h3-blue-900 mb-6">
              Services
            </h6>
            <div className="space-y-3">
              <p className="text-gray-700 hover:text-blue-900 transition-colors duration-200">
                <a href="/services-page/fund-management" className="hover:underline underline-offset-2">Investment Management</a>
              </p>
              <p className="text-gray-700 hover:text-blue-900 transition-colors duration-200">
                <a href="/services-page/trading-signals" className="hover:underline underline-offset-2">Market Alerts</a>
              </p>
              <p className="text-gray-700 hover:text-blue-900 transition-colors duration-200">
                <a href="/services-page/uplearn" className="hover:underline underline-offset-2">Uplearn</a>
              </p>
              <a 
              href="/privacy-policy" 
              className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <h6 className="h3-blue-900 mb-6">
              Contact
            </h6>
            <div className="space-y-4">
              <div className="flex items-start justify-center lg:justify-start">
                <MapPin className="mr-3 mt-1 blue-900-text flex-shrink-0" size={18} />
                <p className="text-gray-700 text-sm">
                  <a
                    href="https://www.google.com/maps/place/Electronic+City+Phase+1,+Bengaluru,+Karnataka+560100,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-900 transition-colors duration-200"
                  >
                   3rd Floor, SJR Primus, 20 Main Road, Koramangala Industrial Layout Bangalore - 560095, Karnataka, India
                  </a>
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Mail className="mr-3 blue-900-text flex-shrink-0" size={18} />
                <p className="text-gray-700 text-sm">
                  <a 
                    href="mailto:support@bkmglobal.in" 
                    className="hover:text-blue-900 transition-colors duration-200"
                  >
                    support@bkmglobal.in
                  </a>
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Phone className="mr-3 blue-900-text flex-shrink-0" size={18} />
                <p className="text-gray-700 text-sm">
                  <a 
                    href="tel:+919740633154" 
                    className="hover:text-blue-900 transition-colors duration-200"
                  >
                    +91 97406 33154
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Legal */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-center py-6 z-10">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 lg:px-20 space-y-3 md:space-y-0">
          <p className="text-blue-100 text-sm order-2 md:order-1">
            © 2025 Copyright:{" "}
            <a 
              href="/" 
              className="text-white font-semibold hover:text-blue-200 transition-colors duration-200"
            >
              BKM GLOBAL
            </a>
          </p>
          <p className="text-blue-100 text-sm order-1 md:order-2">
            Powered by{" "}
            <a 
              href="https://rbshstudio.com" 
              className="text-white font-semibold hover:text-blue-200 transition-colors duration-200"
            >
              RBSH Studio
            </a>
          </p>
          <div className="text-xs order-3">
           
          </div>
        </div>
      </div>
    </footer>
  );
}