import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Img1 from "./assets/banner1.png";
import Img2 from "./assets/banner2.png";
import Banner from "./components/Banner/Banner";
import SubjectCard from "./components/SubjectCard/SubjectCard";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const BannerData = {
  image: Img1,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Learn at Your Own Pace with Flexible Scheduling",
  subtitle:
    "Our platform empowers you to take control of your learning schedule. Choose study sessions that fit your availability and never miss an important lesson. With a user-friendly interface, you can easily manage your tutoring sessions, track progress, and stay organized. Whether you're preparing for WAEC, NECO, JAMB, GCSE and others, our flexible scheduling ensures you get the most out of your study time. Enjoy seamless access to high-quality exam preparation anytime, anywhere.",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "24/7 Expert Tutors, Always Ready to Guide You",
  subtitle:
    "Your success is our priority! Our platform offers round-the-clock access to expert tutors who are available anytime you need guidance. Whether it's day or night, you can schedule consultation at your convenience, get instant support, and stay on track with your studies. Never miss your target, keep up with your study sessions, and excel in all your examinations with ease!",
  link: "#",
};

const App = () => {
  return (
    <main className="overflow-x-hidden">      
      <Navbar />
      <NavbarBanner />      
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <SubjectCard />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default App;
