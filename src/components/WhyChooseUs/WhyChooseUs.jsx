import React from "react";
import { GrUserExpert, GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";
import { BiVideo } from "react-icons/bi";
import { FaFilePdf, FaScroll } from "react-icons/fa";

const WhyChooseData = [
  {
    id: 1,
    title: "Video Soutions",
    desc: "Our platform provides video exam solutions to help learners succeed.",
    icon: <BiVideo />,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "Examination Styles",
    desc: "We provide detailed insights into various examination styles, ensuring you are well-prepared for any exam format.",
    link: "/",
    icon: <FaScroll />,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Resources in PDF",
    desc: "Access comprehensive study materials, exam questions and answers in PDF format, designed to support your learning with clear explanations and structured content.",
    link: "/",
    icon: <FaFilePdf />,
    bgColor: "#fa6400",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Expert Guide",
    desc: "All our experts have years of working experiences in education and ready for 24/7 one-on-one tutoring.",
    link: "/",
    icon: <GrUserExpert />,
    bgColor: "#fe6baa",
    delay: 0.9,
  },
];
const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc]">
      <div className="container py-24">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-blue-600">
            Why Choose Us
          </h1>
          <p className="font-semibold text-3xl">
            Benefits of online exam preparations with us
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView={"visible"}
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
              >
                {/* icon section */}
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
