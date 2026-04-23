import { useState } from "react";
import { FaTimes } from "react-icons/fa";


export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample images (replace with yours)
  const kumasiImages = [
    "/images/pexels-safari-consoler-3290243-11580455.jpg",
    "/images/k2.jpg",
    "/images/k3.jpg",
    "/images/k4.jpg",
    "/images/k5.jpg",
    "/images/k6.jpg",
    "/images/k7.jpg",
  ];

  const policeImages = [
    "/images/p1.jpg",
    "/images/p2.jpg",
    "/images/p3.jpg",
    "/images/p4.jpg",
    "/images/p5.jpg",
    "/images/p6.jpg",
    "/images/p7.jpg",
  ];

  return (
    <div className="bg-gray-600 p-6 md:p-12 space-y-16">

      {/* ================= KUMASI SECTION ================= */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Kumasi Training Program
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

      {/* ================= POLICE SECTION ================= */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Police Emergency Training
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
  );
}