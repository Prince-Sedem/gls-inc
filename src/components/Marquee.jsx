const rowOneImages = [
  { image: "/images/no-poverty.png" },
  { image: "/images/zero-hunger.png" },
  { image: "/images/good-health.png" },
  { image: "/images/quality-edu.png" },
  { image: "/images/gender-eq.png" },
  { image: "/images/clean-water.png" },
  { image: "/images/energy.png" },
  { image: "/images/eco-growth.png" },
  { image: "/images/industry-inno.png" },
];

const rowTwoImages = [
  { image: "/images/reduce-ineq.png" },
  { image: "/images/sus-cities.png" },
  { image: "/images/responsible-cons.png" },
  { image: "/images/climate-action.png" },
  { image: "/images/below-water.png" },
  { image: "/images/on-land.png" },
  { image: "/images/peace-inst.png" },
  { image: "/images/partnership-goals.png" },
];

const MarqueeRow = ({ images, reverse = false }) => {
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex w-max gap-10 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee1"
        }`}
      >
        {[...images, ...images].map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-shrink-0">
            <img src={item.image} className="w-20 h-20 object-contain" />

            <span className="mt-2 text-sm font-medium text-gray-700"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function MarqueeSection() {
  return (
    <section className="w-full py-14 bg-gray-300">
      {/* Header */}
      <div data-aos="zoom-in" className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          SDG'S GOALS
        </h2>
      </div>

      {/* Marquee */}
      <div className="space-y-8">
        <MarqueeRow images={rowOneImages} />
        <MarqueeRow images={rowTwoImages} reverse />
      </div>
    </section>
  );
}
