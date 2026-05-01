import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBullseye, FaEye, FaStar } from "react-icons/fa";

const values = [
  {
    id: 1,
    title: "Mission",
    icon: FaBullseye,
    quote:
      "To reduce preventable deaths worldwide by equipping individuals and communities with essential knowledge, skills, resources across mental health, infectious disease prevention, emergency response, and public health education.",
  },
  {
    id: 2,
    title: "Vision",
    icon: FaEye,
    quote:
      "A world in which no life is lost to preventable cause — where every person, regardless of geography or circumstance has access to knowledge, support, and systems that can save them.",
  },
  {
    id: 3,
    title: "Core Values",
    icon: FaStar,
    quote:
      "Education First, Whole-Personal Health, Community Partnership, Evidence-Based Action, Accountability and Transparency.",
  },
];

function Values() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="bg-gray-300 py-14 px-6 md:px-12">
      <h2
        data-aos="zoom-in"
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
      >
        What We Stand For
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value) => {
          const Icon = value.icon;

          return (
            <div
              key={value.id}
              data-aos="fade-up"
              className="group relative p-[1px]
              bg-gradient-to-br from-blue-800/40 via-transparent to-white
              hover:from-blue-900/70 hover:to-blue-900/40
              transition-all duration-500
              [clip-path:polygon(0_0,calc(100%-32px)_0,100%_32px,100%_100%,32px_100%,0_calc(100%-32px))]"
            >
              {/* Glass card */}
              <div
                className="bg-white/80 backdrop-blur-md p-6 h-full
                shadow-lg group-hover:shadow-2xl
                transform group-hover:-translate-y-2
                transition-all duration-500
                [clip-path:polygon(0_0,calc(100%-32px)_0,100%_32px,100%_100%,32px_100%,0_calc(100%-32px))]"
              >
                {/* Header with icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2 rounded-lg bg-blue-100 text-blue-900 
                    group-hover:bg-blue-900 group-hover:text-white 
                    transform group-hover:-translate-y-1 transition"
                  >
                    <Icon className="text-lg" />
                  </div>

                  <h4 className="text-lg font-semibold text-blue-900">
                    {value.title}
                  </h4>
                </div>

                <p className="text-gray-600 italic leading-relaxed">
                  {value.quote}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Values;
