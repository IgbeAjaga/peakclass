import React from "react";
import { GrUserExpert } from "react-icons/gr";
import { BiVideo } from "react-icons/bi";
import { FaFilePdf, FaScroll } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation"; // Ensure SlideLeft is correctly imported

const WhyChooseData = [
  {
    id: 1,
    title: "Video Solutions",
    desc: "Our platform provides video exam solutions to help learners succeed.",
    icon: <BiVideo />,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "Examination Styles",
    desc: "We provide detailed insights into various examination styles, ensuring you are well-prepared for any exam format.",
    icon: <FaScroll />,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Resources in PDF",
    desc: "Access comprehensive study materials, exam questions, and answers in PDF format, designed to support your learning with clear explanations and structured content.",
    icon: <FaFilePdf />,
    bgColor: "#fa6400",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Expert Guide",
    desc: "All our experts have years of working experience in education and are ready for 24/7 one-on-one tutoring.",
    icon: <GrUserExpert />,
    bgColor: "#fe6baa",
    delay: 1.2,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc]">
      <div className="container py-24">
        {/* Header Section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-purple-600">
            Why Choose Us
          </h1>
          <p className="font-semibold text-3xl">
            Benefits of online exam preparations with us
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => (
            <motion.div
              key={item.id} // ✅ Added unique key
              variants={SlideLeft(item.delay)} // ✅ Ensure SlideLeft is correctly structured
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] bg-white"
            >
              {/* Icon Section */}
              <div
                style={{ backgroundColor: item.bgColor }}
                className="w-12 h-12 rounded-lg flex justify-center items-center text-white"
              >
                <div className="text-2xl">{item.icon}</div>
              </div>

              {/* Text Section */}
              <p className="font-semibold text-lg">{item.title}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
