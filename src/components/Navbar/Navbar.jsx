import React from "react";
import { NavbarMenu } from "../../mockData/data.js";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Gradient color.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      >
        <div className="container flex justify-between items-center py-3">
          
          <button onClick={() => navigate("/")} className="text-2xl flex items-center gap-2 font-bold">
            <img src={logo} alt="Peak-Class Logo" className="h-10 w-auto cursor-pointer" />
          </button>

          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-purple-600 transition-all duration-300 font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button section */}
          <div className="hidden lg:block space-x-6">
            <button 
              onClick={() => navigate("/login")}
              className="font-semibold"
            >
              Sign in
            </button>
            <button 
              onClick={() => navigate("/signup")}
              className="primary-btn !mt-5 font-semibold rounded-full px-6 py-2"
            >
              Join for Free
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>

      {/* Mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
