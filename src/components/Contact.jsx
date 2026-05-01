import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-gray-500 mt-3">
            We’d love to hear from you. Send us a message and we’ll respond
            shortly.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-white/70 backdrop-blur-lg border border-gray-100 rounded-2xl p-6 mb-10 shadow-sm">
          <div className="grid gap-4 text-sm md:text-base">
            {/* Phone (Green) */}
            <p className="flex items-center gap-2 text-gray-700">
              <FaPhoneAlt className="text-green-700" />
              Phone:{" "}
              <a
                href="tel:+19294457462"
                className="text-gray-800 font-medium hover:underline"
              >
                +1 929 445 7462
              </a>
            </p>

            {/* Email (Blue) */}
            <p className="flex items-center gap-2 text-gray-700">
              <FaEnvelope className="text-blue-900" />
              Email:{" "}
              <a
                href="mailto:info@glsinc.org"
                className="text-gray-800 font-medium hover:underline"
              >
                info@glsinc.org
              </a>
            </p>

            {/* Address (Blue) */}
            <p className="flex items-center gap-2 text-gray-700">
              <FaMapMarkerAlt className="text-blue-900" />
              140 Asch Loop 26E,
              Bronx, NY 10475{" "}
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          action="https://formsubmit.co/info@glsinc.org"
          method="POST"
          className="bg-white/80 backdrop-blur-lg border border-gray-100 p-10 rounded-3xl shadow-xl space-y-6"
        >
          <input type="hidden" name="_subject" value="New Contact Message" />
          <input type="hidden" name="_captcha" value="false" />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition resize-none"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-800 to-blue-900 text-white font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
