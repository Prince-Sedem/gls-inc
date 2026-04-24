import { useState } from "react";
import { FaTimes } from "react-icons/fa";


export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample images (replace with yours)
    const policeImages = [
    "/images/health-screening1.png",
    "/images/health-screening2.png",
    "/images/health-screening3.png",
    "/images/health-screening4.png",
    "/images/health-screening5.png",
    "/images/health-screening6.png",
    "/images/health-screening7.png",
    "/images/health-screening8.png",

  ];


  const kumasiImages = [
    "/images/police1.png",
    "/images/police2.png",
    "/images/police3.png",
    "/images/police4.png",
    "/images/police5.png",
    "/images/police6.png",
    "/images/police7.png",
    "/images/police8.png",


  ];



  return (
    <section id="gallery">
        <div  className="bg-gray-600 p-6 md:p-12 space-y-16">
          {/* ================= KUMASI SECTION ================= */}
          <h1 className="bg-gray-500 w-50 text-xl md:xl font-bold justify-center" >TRAINING EVENTS</h1>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Health Screening In Kumasi, Asaman
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {policeImages.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl cursor-pointer group"
                  onClick={() => setSelectedImage(img)}
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
          {/* ================= POLICE SECTION ================= */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Police Emergency Response Training
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {kumasiImages.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl cursor-pointer group"
                  onClick={() => setSelectedImage(img)}
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
        {/* Close Button */}
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-6 right-6 text-white text-3xl z-50 hover:scale-110 transition"
        >
          ×
        </button>
        {/* Image */}
        <img
          src={selectedImage}
          alt=""
          onClick={(e) => e.stopPropagation()}
          className="max-w-[90%] max-h-[85%] rounded-xl shadow-lg"
        />
          </div>
          )}
        </div>
    </section>
          );
}