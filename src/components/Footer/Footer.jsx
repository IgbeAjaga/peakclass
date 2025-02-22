import React from "react";
import { Link } from "react-router-dom"; 
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterImg from "../../assets/footer.jpg";
import logo from "../../assets/Gradient color.png"; 

const FooterBg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom center",
};

const Footer = () => {
  return (
    <div style={FooterBg} className="rounded-t-3xl">
      <div className="bg-primary/5">
        <div className="container">
          <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-black">
            {/* Brand Info Section */}
            <div className="py-8 px-4 space-y-4">
              
              <Link to="/" className="text-2xl flex items-center gap-2 font-bold uppercase">
                <img src={logo} alt="Peak-Class Logo" className="h-12 w-auto cursor-pointer" />
              </Link>
              
              <p>
                With expertly curated study materials, past questions, and video explanations, Peak-Class ensures a seamless and effective exam preparation experience.
              </p>
              <div className="flex items-center justify-start gap-5 !mt-6">
                <a href="https://x.com/PeakClass_VS?t=6SawoqvxLeaM6F-MCXTFrQ&s=09" className="hover:text-purple-600 duration-200">
                  <FaTwitter className="text-3xl" />
                </a>
                <a href="https://www.instagram.com/peakclass_virtual_school?igsh=ZGRwY3V2dHI2NmFw" className="hover:text-purple-600 duration-200">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://www.facebook.com/share/1FGuDUyE2f/" className="hover:text-purple-600 duration-200">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com/company/peakclass-virtual-school/" className="hover:text-purple-600 duration-200">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li><Link to="/contact" className="hover:text-purple-600 duration-200">Contact Us</Link></li>
                  <li><Link to="/about" className="hover:text-purple-600 duration-200">About Us</Link></li>
                  <li><Link to="/resources" className="hover:text-purple-600 duration-200">Resources</Link></li>
                  <li><Link to="/login" className="hover:text-purple-600 duration-200">Login</Link></li>
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                  Join Us
                </h1>
                <ul className="flex flex-col gap-3">
                  <li><Link to="/signup" className="hover:text-purple-600 duration-200">Become a Tutor</Link></li>
                  <li><Link to="/signup" className="hover:text-purple-600 duration-200">Become a Partner</Link></li>
                  <li><Link to="/signup" className="hover:text-purple-600 duration-200">For Students</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8">
            <div className="text-center py-6 border-t-2 border-gray-800/10">
              <span className="text-sm text-black/60">
                © 2025 Peak-Class Virtual School
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
