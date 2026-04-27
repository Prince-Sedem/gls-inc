import React,{useEffect} from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        once: false,
      });
    }, []);


  return (

    

    <section id="about">
      <div className="py-16 px-6 bg-gray-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div data-aos="fade-up" className="mb-30">
                <h4 className="bg-blue-700 w-40 px-5 font-bold text-white text-xl ">ABOUT US</h4>
                <h2 className="text-5xl font-bold text-gray-800 mb-4">Turning Bystanders Into First Responders Across West Africa</h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                  <span className="font-semibold text-blue-700 text-2xl">Global Life Savers Inc</span> is a non-governmental organization (NGO) dedicated to reducing preventable
                   deaths through emergency health training education, and capacity-building in underserved communities.</p>
            </div>
          </motion.div>
            {/* Left: Overlapping Images */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[420px]"
      >
        {/* Main image */}
      <img data-aos="zoom-in"
        src="/images/pexels-bobbydimas-33001996.jpg"
        alt="About Us"
        className="absolute bottom-0 left-0 w-[60%] h-[80%] object-cover rounded-2xl shadow-xl"
      />
      {/* Overlapping image */}
      <img data-aos="zoom-out"
        src="/images/pexels-lagosfoodbank-11298935.jpg"
        alt="Team"
        className="absolute top-0 right-0 w-[60%] h-[80%] object-cover rounded-2xl shadow-2xl border-4 border-white"
      />
      </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
