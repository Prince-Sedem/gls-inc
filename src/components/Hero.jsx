function Hero() {
  return (
    <section id="home"
      className="relative min-h-screen flex items-center text-white"
      style={{
        backgroundImage: "url('/images/pexels-safari-consoler-3290243-11580455.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      

      
            {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold leading-tight">
              {/* 3 dash lines */}        
   <div className="flex gap-2">
    <div className="h-1 w-20 bg-red-500 rounded-full"></div>
    <div className="h-1 w-6 bg-yellow-400 rounded-full"></div>
    <div className="h-1 w-6 bg-green-500 rounded-full"></div>
  </div>
            Reducing  <br /> Preventable Deaths  <br /> Through Education & Action
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Combatting preventable mortality by arming communities with <br />  essential health knowledge
          </p>
          <div className="flex gap-3 mt-3">
  <button className="px-4 py-2 text-white bg-red-500  text-xs font-medium hover:bg-red-600 transition">
    Join The Mission
  </button>

  <button className="px-4 py-2 text-white bg-yellow-400  text-xs font-medium hover:bg-yellow-500 transition">
    Volunteer
  </button>

  <button className="px-4 py-2 text-white bg-green-500 text-xs font-medium hover:bg-green-600 transition">
    Donate Now
  </button>
</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
