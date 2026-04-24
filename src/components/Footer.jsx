import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt} from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";



function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
       <div>
  {/* Logos Row */}
  <div className="flex items-center gap-4">
    <img
      src="/images/gls-inc2.png"
      alt="GLS Logo"
      className="w-20 h-20 object-contain"
    />

    <img
      src="/images/UN-SDG.png"
      alt="UN SDG"
      className="w-25 h-25 object-contain"
    />
  </div>

  {/* Company Name */}
  <h2 className="text-2xl font-bold text-white mt-4">
    Global Life Savers Inc
  </h2>
</div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Gallery", "Contact"].map((home) => (
              <li key={home}>
                <a href={`#${home.toLowerCase()}`} className="hover:text-white transition">
                  {home}
                </a>
              </li>
            ))}
          </ul>
        </div>

{/* Socials */}
<div>
  <h3 className="text-xl font-semibold text-white mb-4">Our Socials</h3>

  <ul className="space-y-3">
    
    <li>
      <a
        href="https://www.instagram.com/globallifesavers.inc/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 hover:text-pink-500 transition"
      >
        <FaInstagram className="text-lg" />
        <span>Instagram</span>
      </a>
    </li>

    <li>
      <a
        href="https://www.linkedin.com/company/global-life-savers-inc"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 hover:text-blue-500 transition"
      >
        <FaLinkedin className="text-lg" />
        <span>LinkedIn</span>
      </a>
    </li>

    <li>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 hover:text-white transition"
      >
        <FaXTwitter className="text-lg" />
        <span>Twitter(X)</span>
      </a>
    </li>

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
              <a href="mailto:info@glsinc.org" className="hover:underline">
                info@glsinc.org
              </a>
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

      {/* Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 mt-6 border-t border-gray-700 pt-4 space-y-2 md:space-y-0 md:mx-3">
        <p>&copy; {new Date().getFullYear()} Global Life Savers Inc. All rights reserved.</p>
        <p>
          <span className="font-bold">Developed by</span> <a href="mailto:princesedem@yahoo.com" className="underline hover:text-white">Prince Sedem</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
