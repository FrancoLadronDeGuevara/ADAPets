import React, { useRef, useEffect } from "react";
import "./HeroSection.css";

import BtnFlotante from "../../assets/Boton-Flotante/btn-consultas.png";
import heroVideo from "../../assets/Video-Hero/Hero-Video.mp4";

const HeroSection = ({ onOpenModal }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoop = () => {
      if (video.currentTime >= 19) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleLoop);
    return () => video.removeEventListener("timeupdate", handleLoop);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#F9FBF7]">
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0 animate-slow-zoom">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#88A270]/40 mix-blend-multiply" />
      </div>

      {/* OVERLAY */}
      <div
        className="absolute inset-0 z-10 bg-[#2C5F5D]/70 hidden md:block"
        style={{ clipPath: "polygon(0 0, 45% 0, 30% 100%, 0% 100%)" }}
      />
      <div className="absolute inset-0 z-10 bg-[#2C5F5D]/85 md:hidden" />

      {/* CONTENT */}
      <div className="relative z-20 container px-6 md:px-16">
        <div className="flex flex-col items-start max-w-xl">
          <h1
            className="text-[#88A270] text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 animate-reveal"
            style={{
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            ADA
            <span
              className="text-gray-400"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 600,
                letterSpacing: "-0.04em",
              }}
            >
              Pets
            </span>
          </h1>

          <div className="relative overflow-hidden pt-4 mb-4">
            <div className="h-[3px] w-16 bg-[#E98074] absolute top-0 left-0 animate-line-grow" />
            <p className="text-[#F9FBF7] text-xl md:text-3xl lg:text-4xl animate-fade-in-up">
              Tu Cuidado{" "}
              <span className="font-serif italic text-[#88A270]">
                Su Bienestar.
              </span>
            </p>
          </div>

          <p className="text-[#F9FBF7]/80 text-base md:text-lg max-w-sm animate-fade-in-up delay-200">
            Salud y amor en cada consulta. Descubre medicina experta diseñada
            para la alegría de tu hogar.
          </p>

          {/* CTA */}
          <div className="mt-12 md:mt-24 animate-fade-in-up delay-300">
            <button
              onClick={onOpenModal} // 👈 ACÁ ESTÁ LA MAGIA
              className="
                cursor-pointer
                group relative
                bg-[#E98074] text-white
                px-10 py-4
                rounded-md
                font-semibold text-lg
                tracking-tight
                transition-all duration-300 ease-out
                hover:bg-[#d47266]
                hover:scale-[1.04]
                hover:shadow-[0_16px_40px_rgba(233,128,116,0.45)]
                active:scale-95
              "
            >
              <span className="flex items-center gap-4">
                Solicitar Cita
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
