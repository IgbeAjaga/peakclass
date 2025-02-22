import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavbarBanner = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const navigate = useNavigate();

  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="fixed top-0 left-0 w-full bg-purple-600 text-white text-sm text-center font-semibold p-2 z-50"
      >
        Are you a school student looking for an online tutoring partnership?
        <button
          onClick={() => navigate("/signup")}
          className="text-white ml-2 underline"
        >
          Talk to us
        </button>
        <div
          className="absolute top-1/2 right-5 cursor-pointer -translate-y-1/2"
          onClick={() => setIsOpen(false)}
        >
          X
        </div>
      </motion.div>
    )
  );
};

export default NavbarBanner;
