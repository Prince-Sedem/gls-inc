import { useState } from "react";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedImage) return;

      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, currentIndex, currentImages]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % currentImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(currentImages[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + currentImages.length) % currentImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(currentImages[prevIndex]);
  };

  {
    /* ================= Police Emergency Response Training, Accra SECTION ================= */
  }

  const policetesanoImages = [
    "/images/police-emergency-res1.jpg",
    "/images/police-emergency-res2.jpg",
    "/images/police-emergency-res3.jpg",
    "/images/police-emergency-res4.jpg",
  ];

  {
    /* ================= EUROPEAN RESUSCITATION COUNCIL SYMPOSIUM, PARIS SECTION ================= */
  }

  const eurosymposiumImages = [
    "/images/euro-resus-sym1.jpg",
    "/images/euro-resus-sym2.jpg",
    "/images/euro-resus-sym3.jpg",
    "/images/euro-resus-sym4.jpg",
  ];
  {
    /* ================= EUROPEAN RESUSCITATION COUNCIL CONGRESS, ROTTERDAM SECTION ================= */
  }

  const eurocongressImages = [
    "/images/euro-resus-congress1.jpg",
    "/images/euro-resus-congress2.jpg",
    "/images/euro-resus-congress3.jpg",
    "/images/euro-resus-congress4.jpg",
  ];
  {
    /* ================= FINANCING FOR DEVELOPMENT, SEVILLA SECTION ================= */
  }

  const financingdevImages = [
    "/images/financing-dev1.jpg",
    "/images/financing-dev2.jpg",
    "/images/financing-dev3.jpg",
    "/images/financing-dev4.jpg",
  ];
  {
    /* ================= 67th  SESSION OF THE COMMISSION ON STATUS OF WOMEN, NEW YORK SECTION================= */
  }

  const unwomencommImages = [
    "/images/UN-67th-women-comm1.jpg",
    "/images/UN-67th-women-comm2.jpg",
    "/images/UN-67th-women-comm3.jpg",
    "/images/UN-67th-women-comm4.jpg",
  ];
  {
    /* ================= 61st  SESSION OF THE COMMISSION FOR SOCIAL DEVELOPMENT, NEW YORK SECTION================= */
  }

  const unsocialdevImages = [
    "/images/UN-61st-comm1.jpg",
    "/images/UN-61st-comm2.jpg",
    "/images/UN-61st-comm3.jpg",
    "/images/UN-61st-comm4.jpg",
  ];
  {
    /* ================= DONATION AT THE SCHOOL FOR SPECIAL NEEDS AND DISABILITY SECTION================= */
  }

  const donationdisabilityImages = [
    "/images/donation-disability1.jpg",
    "/images/donation-disability2.jpg",
    "/images/donation-disability3.jpg",
    "/images/donation-disability4.jpg",
  ];
  {
    /* ================= DONATION, ADENTA ORPHANAGE SECTION================= */
  }

  const donationadentaImages = [
    "/images/donation-adenta1.jpg",
    "/images/donation-adenta2.jpg",
    "/images/donation-adenta3.jpg",
    "/images/donation-adenta4.jpg",
  ];
  {
    /* ================= HEALTH SCREENING KUMASI SECTION================= */
  }

  const healthImages = [
    "/images/health-screening2.png",
    "/images/health-screening4.png",
    "/images/health-screening6.png",
    "/images/health-screening8.png",
  ];

  {
    /* ================= POLICE TRAINING KUMASI SECTION================= */
  }

  const kumasiImages = [
    "/images/police2.png",
    "/images/police4.png",
    "/images/police6.png",
    "/images/police8.png",
  ];

  {
    /* =================  Emergency Response At A Sporting Event KUMASI SECTION================= */
  }

  const sportingImages = [
    "/images/sporting-emergency-res1.jpg",
    "/images/sporting-emergency-res2.jpg",
    "/images/sporting-emergency-res3.jpg",
    "/images/sporting-emergency-res4.jpg",
  ];

  return (
    <section id="gallery">
      <div className="bg-gray-700 p-6 md:p-12 space-y-16">
        <h1
          data-aos="fade-up"
          className="bg-blue-900 text-white w-23 text-xl md:xl font-bold justify-center"
        >
          EVENTS
        </h1>
        {/* ================= Police Emergency Response Training Accra SECTION ================= */}
        <div>
          <h2
            data-aos="fade-up"
            className="text-white text-2xl md:text-3xl font-bold mb-6"
          >
            Police Emergency Response Training, Accra (April, 2026)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {policetesanoImages.map((img, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => {
                  setSelectedImage(img);
                  setCurrentIndex(index);
                  setCurrentImages(policetesanoImages);
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        {/* ================= EUROPEAN RESUSCITATION COUNCIL SYMPOSIUM, PARIS SECTION ================= */}
        <div>
          <h2
            data-aos="fade-up"
            className="text-white text-2xl md:text-3xl font-bold mb-6"
          >
            European Resuscitation Council Symposium, Paris (March, 2026)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eurosymposiumImages.map((img, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => {
                  setSelectedImage(img);
                  setCurrentIndex(index);
                  setCurrentImages(eurosymposiumImages);
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        {/* ================= EUROPEAN RESUSCITATION COUNCIL CONGRESS, ROTTERDAM SECTION ================= */}
        <div>
          <h2
            data-aos="fade-up"
            className="text-white text-2xl md:text-3xl font-bold mb-6"
          >
            European Resuscitation Council Congress, Rotterdam (October, 2025)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eurocongressImages.map((img, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => {
                  setSelectedImage(img);
                  setCurrentIndex(index);
                  setCurrentImages(eurocongressImages);
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        {/* ================= FINANCING FOR DEVELOPMENT, SEVILLA SECTION ================= */}
        <div>
          <h2
            data-aos="fade-up"
            className="text-white text-2xl md:text-3xl font-bold mb-6"
          >
            Financing For Development, Sevilla (July, 2025)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {financingdevImages.map((img, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => {
                  setSelectedImage(img);
                  setCurrentIndex(index);
                  setCurrentImages(financingdevImages);
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        {/* ================= 67th  SESSION OF THE COMMISSION ON THE STATUS OF WOMEN, NEW YORK SECTION ================= */}
        <div>
          <h2
            data-aos="fade-up"
            className="text-white text-2xl md:text-3xl font-bold mb-6"
          >
            The 67th Session Of The Commission On The Status Of Women, New York
            (March, 2023)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {unwomencommImages.map((img, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => {
                  setSelectedImage(img);
                  setCurrentIndex(index);
                  setCurrentImages(unwomencommImages);
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        {/* ================= 61st  SESSION OF THE COMMISSION FOR SOCIAL DEVELOPMENT, NEW YORK SECTION ================= */}
        <div>
          <h2
            data-aos="fade-up"
            className="text-white text-2xl md:text-3xl font-bold mb-6"
          >
            The 61st Session Of The Commission For Social Development, New York
            (February, 2023)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {unsocialdevImages.map((img, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => {
                  setSelectedImage(img);
                  setCurrentIndex(index);
                  setCurrentImages(unsocialdevImages);
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        {/* ================= DONATION AT THE SCHOOL FOR SPECIAL NEEDS AND DISABILITY, ACCRA SECTION================= */}
        <div>
          <h2
            data-aos="fade-up"
            className="text-white text-2xl md:text-3xl font-bold mb-6"
          >
            Donation At The School For Special Needs And Disabilty, Accra
            (September, 2022)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {donationdisabilityImages.map((img, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => {
                  setSelectedImage(img);
                  setCurrentIndex(index);
                  setCurrentImages(donationdisabilityImages);
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        {/* ================= DONATION, ADENTA ORPHANAGE SECTION ================= */}
        <div>
          <h2
            data-aos="fade-up"
            className="text-white text-2xl md:text-3xl font-bold mb-6"
          >
            Donation At An Orphanage And A Foster Home, Adenta (December, 2021)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {donationadentaImages.map((img, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => {
                  setSelectedImage(img);
                  setCurrentIndex(index);
                  setCurrentImages(donationadentaImages);
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* =================  Emergency Response At A Sporting Event KUMASI SECTION================= */}

        <div>
          <h2
            data-aos="fade-up"
            className="text-white text-2xl md:text-3xl font-bold mb-6"
          >
            Emergency Response At A Sporting Event, Kumasi (September, 2017)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sportingImages.map((img, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => {
                  setSelectedImage(img);
                  setCurrentIndex(index);
                  setCurrentImages(sportingImages);
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        {/* ================= HEALTH SCREENING KUMASI SECTION================= */}
        <div>
          <h2
            data-aos="fade-up"
            className="text-white text-2xl md:text-3xl font-bold mb-6"
          >
            Health Screening In Kumasi, Asaman (June, 2017)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {healthImages.map((img, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => {
                  setSelectedImage(img);
                  setCurrentIndex(index);
                  setCurrentImages(healthImages);
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        {/* ================= POLICE TRAINING KUMASI SECTION================= */}

        <div>
          <h2
            data-aos="fade-up"
            className="text-white text-2xl md:text-3xl font-bold mb-6"
          >
            Police Emergency Response Training, Kumasi (March, 2017)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kumasiImages.map((img, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => {
                  setSelectedImage(img);
                  setCurrentIndex(index);
                  setCurrentImages(kumasiImages);
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= MODAL ================= */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-3xl z-50"
            >
              ×
            </button>

            {/* PREVIOUS */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 text-white text-4xl px-3 py-1 bg-black/50 rounded-full hover:scale-110 transition"
            >
              ‹
            </button>

            {/* IMAGE */}
            <img
              src={selectedImage}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="max-w-[90%] max-h-[85%] rounded-xl shadow-lg"
            />

            {/* NEXT */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 text-white text-4xl px-3 py-1 bg-black/50 rounded-full hover:scale-110 transition"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
