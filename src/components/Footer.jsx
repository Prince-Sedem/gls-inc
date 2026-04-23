import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";



function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div className="">
            <div className="inline-block">
            <img
             src="/images/gls-inc2.png" 
             alt="" 
             className="w-20 h-20 object-contain"
            />

            </div>

            <div className="inline-block ml-6">
            <img
             src="/images/UN-SDG.png" 
             alt="" 
             className="w-40 h-40 object-contain"
            />
            </div>
          <h2 className="text-2xl font-bold text-white">Global Life Savers Inc</h2>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Contact"].map((home) => (
              <li key={home}>
                <a href={`#${home.toLowerCase()}`} className="hover:text-white transition">
                  {home}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Our Socials</h3>
          <ul className="space-y-2">
            {["Transport", "Wholesale", "Retail", "Procurement", "Tire Branding", "General Merchant"].map((service) => (
              <li key={service}>
                <a href="#" className="hover:text-white transition">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>

          <div className="space-y-3 text-gray-300">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              <span>
                140 Asch Loop 26E, <br />
                Bronx, NY 10475
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FaEnvelope t className="text-yellow-400 mt-1" />
              <span>
                info@glsinc.org
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FaPhoneAlt t className="text-green-400 mt-1" />
              <span>
                +1 929 445 7462
              </span>
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center text-gray-500 py-6 mt-10">
        &copy; {new Date().getFullYear()} Global Life Savers Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
