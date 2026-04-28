function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-gray-500 mt-3">
            We’d love to hear from you. Send us a message and we’ll respond
            shortly.
          </p>
        </div>

        {/* Card */}
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
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-900 to-blue-900 text-white font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
