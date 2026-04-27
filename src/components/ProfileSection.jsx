import { FaQuoteLeft } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProfileSection() {
  return  (
    <div className="bg-gray-300 grid md:grid-cols-2 gap-10 items-center p-6 md:p-12">
      
      {/* LEFT COLUMN */}
      <div  className="space-y-6">
        
        {/* Header */}
        <div>
            <h4 data-aos="fade-up" className="bg-blue-700 w-87 px-5 font-bold text-white text-l uppercase tracking-wider">
                LET'S BUILD TOMORROW TOGETHER
            </h4>
          <h1 data-aos="fade-up" className="text-3xl md:text-3xl font-bold mb-3">
            To teach the whole nation of Ghana to know basic lifesaving skills.
          </h1>

          {/* Quote */}
          <div data-aos="fade-up" className="flex items-center gap-3 bg-gray-400 p-3 rounded-lg w-fit">
            <FaQuoteLeft className="text-red-500 text-lg" />
            <p className="italic text-white">
              Your life really depends on bystanders because the most they can do is get you in a car
            </p>
          </div>
        </div>

        {/* Article */}
        <p data-aos="fade-up" className="text-gray-800 leading-relaxed">
          People die in Ghana because the people around them don't knowledge
          basic first aid. It's crazy when you hear about someone dying and
          it was something simple that could have ben prevented.
        </p>


        {/* Profile */}
        <div data-aos="fade-up" className="flex items-center gap-3 pt-4">
          <img
            src="/images/dr-sel-p.png"
            alt="Dr Sel"
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
          />
          <div className="flex-col">
              <p className="font-semibold text-gray-800 text-xl">Dr. Lt. Selina Okyere</p>
              <p className=" text-gray-800 text-m">United States Air Force</p>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN */}
     <div data-aos="zoom-in" className="relative group overflow-hidden rounded-xl">
  <a
    href="https://www.war.gov/News/News-Stories/Article/Article/1382623/face-of-defense-airman-seeks-to-build-generation-of-lifesavers/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/images/dr-sel-p.png"
      alt="Emergency"
      className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
    />

    {/* Dark hover overlay */}
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 rounded-xl"></div>

    {/* Text stays on top */}
    <div className="absolute bottom-4 right-4 text-right">
      <h2 className="text-white text-5xl font-bold drop-shadow-lg px-8">
        911
      </h2>
      <p className="text-white text-sm drop-shadow-md">
        Is minutes away — You <br /> Are seconds away
      </p>
    </div>
  </a>
</div>
    </div>
  );
}
export default ProfileSection;
