import { FaQuoteLeft } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProfileSection() {
  return  (
    <div className="grid md:grid-cols-2 gap-10 items-center p-6 md:p-12">
      
      {/* LEFT COLUMN */}
      <div  className="space-y-6">
        
        {/* Header */}
        <div>
            <h4 data-aos="fade-up" className="bg-blue-300 w-87 px-5 font-bold text-white text-l uppercase tracking-wider">
                LET'S BUILD TOMORROW TOGETHER
            </h4>
          <h1 data-aos="fade-up" className="text-3xl md:text-3xl font-bold mb-3">
            To teach the whole nation of Ghana to know basic lifesaving skills.
          </h1>

          {/* Quote */}
          <div data-aos="fade-up" className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg w-fit">
            <FaQuoteLeft className="text-red-500 text-lg" />
            <p className="italic text-gray-700">
              Your life really depends on bystanders because the most they can do is get you in a car
            </p>
          </div>
        </div>

        {/* Article */}
        <p data-aos="fade-up" className="text-gray-600 leading-relaxed">
          People die in Ghana because the people around them don't knowledge
          basic first aid. It's crazy when you hear about someone dying and
          it was something simple that could have ben prevented.
        </p>


        {/* Profile */}
        <div data-aos="fade-up" className="flex items-center gap-3 pt-4">
          <img
            src="/images/pexels-duy-tan-d-i-h-c-842966226-30902100.jpg"
            alt="Dr Sel"
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
          />
          <div className="flex-col">
              <p className="font-semibold text-gray-800 text-xl">Dr. Lt. Selina Okyere</p>
              <p className=" text-gray-500 text-m">United States Air Force</p>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN */}
      <div data-aos="zoom-in" className="relative">
        <img
          src="/images/pexels-duy-tan-d-i-h-c-842966226-30902100.jpg"
          alt="Emergency"
          className="w-full h-full object-cover rounded-xl"
        />

        {/* Overlay bottom-right */}
        <div className="absolute bottom-4 right-4 text-right">
          <h2 className="text-white text-5xl font-bold drop-shadow-lg px-8">
            911
          </h2>
          <p className="text-white text-sm drop-shadow-md">
            Is minutes away — You <br/> Are seconds away
          </p>
        </div>
      </div>

    </div>
  );
}
export default ProfileSection;
