import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-[#1a1b23] py-12 px-4">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-8 mb-12">
          {/* DigiTools Info */}
          <div className="col-span-1 md:col-span-1">
            <p className="text-white text-2xl font-bold mb-3">DigiTools</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product, Company, Resources*/}
          <div className="grid grid-cols-3 md:contents gap-8 col-span-1">
            {/* Product */}
            <div>
              <p className="text-white font-semibold mb-4">Product</p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="" className="text-gray-400 text-sm hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-400 text-sm hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-400 text-sm hover:text-white">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-400 text-sm hover:text-white">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-white font-semibold mb-4">Company</p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="" className="text-gray-400 text-sm hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-400 text-sm hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-400 text-sm hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-400 text-sm hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <p className="text-white font-semibold mb-4">Resources</p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="" className="text-gray-400 text-sm hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-400 text-sm hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-400 text-sm hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-400 text-sm hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links - full row on mobile */}
          <div>
            <p className="text-white font-semibold mb-4">Social Links</p>
            <div className="flex gap-3">
              <a
                href=""
                className="w-9 h-9 rounded-full bg-[#2a2b35] flex items-center justify-center text-white"
              >
                <FaInstagram />
              </a>
              <a
                href=""
                className="w-9 h-9 rounded-full bg-[#2a2b35] flex items-center justify-center text-white"
              >
                <FaFacebook />
              </a>
              <a
                href=""
                className="w-9 h-9 rounded-full bg-[#2a2b35] flex items-center justify-center text-white"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
