import React from "react";
import CountUp from "react-countup";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Impact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-12 items-center">
      
      {/* Left Column */}
      <div>
        <h1 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4">
          Building Life Saving Skills Across Communities
        </h1>


        <p data-aos="fade-up" className="text-gray-500 leading-relaxed">
          Global Life Savers Inc equips communiteis with essential emergency response skills 
          through hands-on training, outreach programs, and youth-focused initiatives.
          Our efforts strengthen local preparedness and empower people to act confidently when emergencies arise.
        </p>
      </div>

      {/* Right Column (Stats Card) */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        
        <h3 data-aos="fade-up" className="text-xl font-semibold mb-6">
          Our Impact
        </h3>

        <div className="space-y-6">
          
          {/* Stat 1 */}
          <div data-aos="fade-up" className="flex items-center justify-between">
            <p className="text-gray-600">Individuals Trained</p>
            <span className="text-2xl font-bold text-red-500">
              <CountUp end={10000} duration={2} separator="," />+
            </span>
          </div>

          {/* Stat 2 */}
          <div data-aos="fade-up" className="flex items-center justify-between">
            <p className="text-gray-600">Young People Trained</p>
            <span className="text-2xl font-bold text-yellow-500">
              <CountUp end={2000} duration={2} separator="," />+
            </span>
          </div>

          {/* Stat 3 */}
          <div data-aos="fade-up" className="flex items-center justify-between">
            <p className="text-gray-600">BLS & First Aid Sessions</p>
            <span className="text-2xl font-bold text-green-500">
              <CountUp end={50000} duration={2.5} separator="," />+
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Impact;