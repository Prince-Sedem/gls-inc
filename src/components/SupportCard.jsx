function SupportCard() {

    const mailtoLink =
  "mailto:info@glsinc.org" +
  "?subject=Support for Your Cause" +
  "&body=Hello GLS Team,%0D%0A%0D%0A" +
  "I am interested in supporting your cause. Please let me know how I can get involved.%0D%0A%0D%0A" +
  "Thank you.";


  return (
    <div className="relative w-[400]px h-64 md:h-60 m-10 overflow-hidden shadow-lg group">
      
      {/* Background Image */}
      <img
        src="/images/pexels-rdne-6646880.jpg"
        alt="Support the Cause"
        className="absolute inset-0 w-full h-96 md:h-80 object-cover object-top 10%  md:object-bottom group-hover:scale-105 transition duration-500"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row gap-10 justify-center items-start p-6 md:p-10">
        
        <h2 className="text-white text-xl md:text-3xl font-bold max-w-md leading-snug mb-4">
          You could be the reason someone survives Today!
        </h2>

        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm md:px-6 md:py-3 md:text-base  rounded-full font-semibold transition">
            <a href={mailtoLink}  className="">
                Support the Cause
           </a>
        </button>

      </div>
    </div>
  );
}
export default SupportCard;