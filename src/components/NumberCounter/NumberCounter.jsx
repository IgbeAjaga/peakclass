import React from "react";
import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <div className="bg-secondary text-white py-16">
      <div className="container  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {[
          { end: 50, label: "Expert Tutors", suffix: "+" },
          { end: 20000, label: "Hours Content", suffix: "+" },
          { end: 15, label: "Subjects & Courses", suffix: "+" },
          { end: 72878, label: "Active Students", suffix: "+" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            <p className="text-4xl font-bold">
              <CountUp
                start={0}
                end={item.end}
                duration={3}
                separator=","
                suffix={item.suffix || ""}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </p>
            <p className="text-lg font-medium mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberCounter;
