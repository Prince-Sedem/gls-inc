import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Sdgs() {
  return (
    <div className=" bg-gray-300 grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
      
      {/* First Column (Text) */}
      <div className="flex flex-col justify-center">
        <h1 data-aos="fade-up" className="text-xl font-bold mb-4">
            Global Strategies for Life Preservation and Well-being
        </h1>

        <h2 data-aos="fade-up" className="text-l text-gray-800 mb-4">
          A Multidimensional Approach to Eliminating Health Risks, Violence, and Resource Scarcity by 2030
        </h2>

        {/* Paired Paragraphs */}
        <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Item 1 */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-3 bg-green-500 mt-1.5"></div>
            <p>Good Health and Well-being</p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3">
            <div className="w-5 h-3 bg-yellow-400 mt-1.5"></div>
            <p className="text-m">Zero Hunger</p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-3 bg-blue-400 mt-1.5"></div>
            <p>Clean Water and Sanitation</p>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-3 bg-blue-900 mt-1.5"></div>
            <p className="text-m">Peace, Justice, and Strong Institutions</p>
          </div>

        </div>
      </div>

      {/* Second Column (Image) */}
      <div data-aos="zoom-in">
        <img
          src="/images/arrow (1).png"
          alt="Sample 1"
          className="w-40 h-40  mx-30 rotate-90 md:rotate-0 transition duration-300"
        />
      </div>

      {/* Third Column (Image) */}
      <div data-aos="zoom-in">
        <img
          src="/images/sdg-logo (1).png"
          alt="Sample 2"
          className="w-60 h-60 object-cover "
        />
      </div>

    </div>
  );
}

export default Sdgs;