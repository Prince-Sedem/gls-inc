import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

function Impact() {
  const { ref, inView } = useInView({
    triggerOnce: false, // 🔥 THIS makes it run every time
    threshold: 0.3, // trigger when 30% visible
  });

  return (
    <div
      ref={ref}
      className="bg-gray-300 grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-12 items-center"
    >
      {/* Left Column */}
      <div>
        <h1 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4">
          Building Life Saving Skills Across Communities
        </h1>

        <p data-aos="fade-up" className="text-gray-800 leading-relaxed">
          Global Life Savers Inc equips communities with essential emergency
          response skills through hands-on training, outreach programs, and
          youth-focused initiatives.
        </p>
      </div>

      {/* Right Column */}
      <div className="bg-gray-100 rounded-2xl shadow-2xl p-8 border border-white">
        <h3 data-aos="fade-up" className="text-xl font-semibold mb-6">
          Our Impact
        </h3>

        <div className="space-y-6">
          {/* Stat 1 */}
          <div data-aos="fade-up" className="flex items-center justify-between">
            <p className="text-gray-600">Individuals Trained</p>
            <span className="text-2xl font-bold text-red-500">
              {inView && <CountUp end={10000} duration={2} separator="," />}+
            </span>
          </div>

          {/* Stat 2 */}
          <div data-aos="fade-up" className="flex items-center justify-between">
            <p className="text-gray-600">Young People Trained</p>
            <span className="text-2xl font-bold text-yellow-500">
              {inView && <CountUp end={2000} duration={2} separator="," />}+
            </span>
          </div>

          {/* Stat 3 */}
          <div data-aos="fade-up" className="flex items-center justify-between">
            <p className="text-gray-600">BLS & First Aid Sessions</p>
            <span className="text-2xl font-bold text-green-500">
              {inView && <CountUp end={50000} duration={2.5} separator="," />}+
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impact;
