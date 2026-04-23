import { FiCheck } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProgramsSection() {
  const items = [
    "First Aid and CPR",
    "Basic Life Support (BLS)",
    "Mental Health Education",
    "Disaster Preparedness",
    "Youth Responder Programs",
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-12 px-6">

      {/* TEXT SIDE */}
      <div>
        <h4 data-aos="fade-up" className="bg-blue-300 w-45 px-5 font-bold text-white text-l uppercase tracking-wider">
          Our Programs
        </h4>

        <h1 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
          Life Saving Training Programs
        </h1>

        <p data-aos="fade-up" className="text-gray-600 mt-4 leading-relaxed">
          Global Life Savers Inc provides comprehensive emergency health training
          education programs, including practical and theoretical sessions designed
          to equip individuals with essential life-saving skills.
        </p>

        {/* LIST */}
        <ul data-aos="fade-up" className="mt-6 space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-green-500 text-lg">
                <FiCheck />
              </span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGE SIDE */}
      <div data-aos="zoom-in" className="w-full h-full">
        <img
          src="/images/pexels-duy-tan-d-i-h-c-842966226-30902100.jpg"
          alt="Life saving training"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

    </section>
  );
}
export default ProgramsSection;