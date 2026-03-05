import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { categorias } from "@/constants";

const Navbar = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`
        sticky top-0 w-full z-50 transition-all duration-500 ease-out
        ${
          isScrolled
            ? "bg-vet-dark/95 backdrop-blur-xl shadow-lg py-3"
            : "bg-vet-dark/80 backdrop-blur-md py-4"
        }
      `}
    >
      <nav className="container mx-auto px-6 md:px-16">
        <div className="flex justify-between items-center relative">
          {/* MOBILE THEME BUTTON */}
          <div className="lg:hidden">
            <button
              onClick={toggleTheme}
              className="
                relative w-10 h-10
                bg-vet-text/10
                hover:bg-vet-text/20
                rounded-full
                transition-all duration-300
                flex items-center justify-center
                group
              "
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                {/* Sun Icon */}
                <svg
                  className={`
                    absolute inset-0 w-5 h-5 text-vet-text
                    transition-all duration-500
                    ${
                      isDark
                        ? "rotate-90 opacity-0 scale-0"
                        : "rotate-0 opacity-100 scale-100"
                    }
                  `}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>

                {/* Moon Icon */}
                <svg
                  className={`
                    absolute inset-0 w-5 h-5 text-vet-text
                    transition-all duration-500
                    ${
                      isDark
                        ? "rotate-0 opacity-100 scale-100"
                        : "-rotate-90 opacity-0 scale-0"
                    }
                  `}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>
            </button>
          </div>

          {/* LOGO */}
          <a
            href="/"
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            <div className="flex flex-col">
              <span
                className="text-vet-primary text-2xl font-bold tracking-tight"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                ADA
                <span
                  className="text-vet-text/90"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Pets
                </span>
              </span>
              <span className="text-vet-text/60 text-xs tracking-wider">
                VETERINARIA
              </span>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8">
            {categorias.map((categoria, index) => (
              <li key={index} className="group relative">
                <a
                  className="text-vet-text text-sm font-medium tracking-wide hover:text-vet-primary transition-colors duration-300 uppercase"
                  href={`#${categoria}`}
                >
                  {categoria}
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-vet-primary to-vet-accent transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* THEME TOGGLE + CTA BUTTON */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="
                relative w-10 h-10
                bg-vet-text/10
                hover:bg-vet-text/20
                rounded-full
                transition-all duration-300
                flex items-center justify-center
                group
              "
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                {/* Sun Icon */}
                <svg
                  className={`
                    absolute inset-0 w-5 h-5 text-vet-text
                    transition-all duration-500
                    ${
                      isDark
                        ? "rotate-90 opacity-0 scale-0"
                        : "rotate-0 opacity-100 scale-100"
                    }
                  `}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>

                {/* Moon Icon */}
                <svg
                  className={`
                    absolute inset-0 w-5 h-5 text-vet-text
                    transition-all duration-500
                    ${
                      isDark
                        ? "rotate-0 opacity-100 scale-100"
                        : "-rotate-90 opacity-0 scale-0"
                    }
                  `}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>
            </button>

            {/* CTA Button */}
            <button
              onClick={onOpenModal}
              className="
                bg-vet-accent
                text-vet-text
                px-6 py-3
                rounded-md
                font-semibold text-sm
                tracking-tight
                transition-all duration-300 ease-out
             hover:bg-vet-accent/80
                hover:scale-105
                hover:shadow-[0_8px_24px_rgba(233,128,116,0.4)]
                dark:hover:shadow-[0_8px_24px_rgba(243,156,146,0.4)]
                active:scale-95
                group
              "
            >
              <span className="flex items-center gap-2">
                Solicitar cita
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </button>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center group"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-vet-text transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-vet-text transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-vet-text transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-500 ease-out
            ${
              isMobileMenuOpen
                ? "max-h-96 opacity-100 mt-6"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <ul className="flex flex-col gap-4 pb-6">
            {categorias.map((categoria, index) => (
              <li key={index}>
                <a
                  className="block text-vet-text text-base font-medium tracking-wide hover:text-vet-primary transition-colors duration-300 py-2 border-b border-vet-text/10 uppercase"
                  href={`#${categoria}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {categoria}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => {
                  onOpenModal();
                  setIsMobileMenuOpen(false);
                }}
                className="
                  w-full
                  bg-vet-accent
                  text-vet-text
                  px-6 py-3
                  rounded-md
                  font-semibold text-sm
                  tracking-tight
                  transition-all duration-300 ease-out
                  hover:bg-vet-accent/80
                  hover:shadow-[0_8px_24px_rgba(233,128,116,0.4)]
                  active:scale-95
                "
              >
                Solicitar cita →
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
