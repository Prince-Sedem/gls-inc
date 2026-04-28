import AOS from 'aos';
import 'aos/dist/aos.css';

function Partners() {
  const partners = [
    { name: "Ghana Police Service", logo: "/images/GH-police-logo.png" },
    { name: "National Ambulance Service", logo: "/images/nas-logo (1).png" },
    { name: "European Resuscitation Council", logo: "/images/ERC_Logo.png" },
    { name: "Stop The Bleed", logo: "/images/stop-the-bleed-logo.png" },
    { name: "ACCP", logo: "/images/ACCP.png" },
    { name: "International Diaspora Union", logo: "/images/IDU-logo.png" },
    { name: "UN ECOSOC", logo: "/images/ecosoc2.png" },
    { name: "Financing For Development", logo: "/images/finan-dev2 (1).png" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        
        {/* Header */}
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Partners
        </h2>
        <p data-aos="fade-up" className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We collaborate with leading organizations and institutions to expand
          access to life-saving education and resources.
        </p>

        {/* Logos Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="flex justify-center items-center group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 object-contain
                           transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;