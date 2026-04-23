import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(function () {
  function onScroll() {
    const scrollY = window.scrollY;
    const offset = 140; // navbar height
    const scrollPosition = scrollY + offset;

    setScrolled(scrollY > 20);

    // 🔑 FIX: force Home when near top
    if (scrollY < 100) {
      setActive("home");
      return;
    }

    const sections = ["home", "services", "about", "contact"];

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (!section) continue;

      if (scrollPosition >= section.offsetTop) {
        setActive(sections[i]);
        break;
      }
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // run on mount

  return function () {
    window.removeEventListener("scroll", onScroll);
  };
}, []);

  const links = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Services", href: "#services", id: "services" },
    { label: "About", href: "#about", id: "about" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
        {/* 🔥 MARQUEE */}
    <div className="bg-blue-600 text-white overflow-hidden">
      <div className="marquee-wrapper">
      <div className="animate-marquee flex items-center space-x-2 py-1">
        <img
          src="/images/gls-inc2.png"
          alt="Global Life Saver Inc"
          className="w-8 h-6 mb-2"
        />
        <span className="text-sm ">
          Global Life Savers Inc
        </span>

        {/* duplicate for smooth looping */}
        <img
          src="/images/gls-inc2.png"
          alt="Global Life Saver Inc"
          className="w-8 h-6 mb-2"
        />
        <span className="text-sm">
          Global Life Savers Inc
        </span>
        {/* duplicate for smooth looping */}
        <img
          src="/images/gls-inc2.png"
          alt="Global Life Saver Inc"
          className="w-8 h-6 mb-2"
        />
        <span className=" text-sm">
          Global Life Savers Inc
        </span>
        {/* duplicate for smooth looping */}
        <img
          src="/images/gls-inc2.png"
          alt="Global Life Saver Inc"
          className="w-8 h-6 mb-2"
        />
        <span className="text-sm">
          Global Life Savers Inc
        </span>
      </div>
    </div>
    </div>

    <nav
      className={` w-full transition-all duration-300
        ${
          scrolled
            ? "bg-white shadow-md backdrop-blur"
            : "bg-white/60 backdrop-blur-lg"
        }
      `}
    >  
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-15">
        
        {/* Logo */}
        <a href="#home">
          <img
            src="/images/gls-inc.png"
            alt="Fedostar Logo"
            className="w-20 object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {links.map(function (item) {
            const isActive = active === item.id;

            return (
              <li key={item.id} className="relative">
                <a
                  href={item.href}
                  className={`transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                    ${
                      isActive
                        ? "text-blue-500"
                        : "text-gray-700 hover:text-blue-400"
                    }
                  `}
                >
                  {item.label}

                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all duration-300
                      ${isActive ? "w-full" : "w-0"}
                    `}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          onClick={function () {
            setIsOpen(!isOpen);
          }}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-96" : "max-h-0"}
        `}
      >
        <ul className="bg-white px-6 py-8 space-y-6 font-medium">
          {links.map(function (item) {
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`block text-lg transition
                    ${
                      active === item.id
                        ? "text-blue-500"
                        : "text-gray-700 hover:text-blue-400"
                    }
                  `}
                  onClick={function () {
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
