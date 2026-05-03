function NewsLetter() {
  const post = {
    title:
      "ERC Support CPR Training Initiative in Ghana through Equipment Donation",
    excerpt:
      "In April 2026, the European Resuscitation Council (ERC) supported a national CPR training initiative in Ghana through donating essential resuscitation training equipment...",
    image: "/images/ERC_Logo.png",
    date: "April 2026",
    link: "https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.erc.edu%2Fdonation-ghana-2026%2F&data=05%7C02%7CQueenie.Kessie%40erc.edu%7C7a22bc9646f14a9d7e1708dea5f77283%7C0207800c72804bf8b33a0fef8674d43a%7C0%7C0%7C639130679612129673%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=wWoXPhIIxVmmgaLaPnxYDuLU%2FWNtQYGeujBTZuc%2FW3o%3D&reserved=0",
  };

  return (
    <section className=" bg-gray-300 min-h-screen flex flex-col justify-center items-center px-6 md:px-12 bg-gray-50">
      
      {/* Header */}
      <div className="text-center mb-10 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Latest Insight
        </h2>
        <p className="text-gray-600">
          Stay informed with our latest updates and life-saving initiatives.
        </p>
      </div>

      {/* Centered Card */}
      <div className="w-full max-w-sm">
        
        <div className="bg-blue-900 text-white rounded-2xl p-4 shadow hover:shadow-lg transition">
          
          {/* Image */}
          <div className="relative bg-white rounded-xl p-3">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-32 object-contain"
            />

            {/* Date */}
            <div className="absolute -bottom-3 left-3 bg-white text-blue-900 text-xs font-semibold px-3 py-1 rounded-md shadow">
              {post.date}
            </div>
          </div>

          {/* Content */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">
              {post.title}
            </h3>

            <p className="text-blue-100 text-sm leading-relaxed">
              {post.excerpt}
            </p>

            {/* Button */}
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-white hover:text-white text-blue-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-900 transition"
            >
              Read More →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default NewsLetter;