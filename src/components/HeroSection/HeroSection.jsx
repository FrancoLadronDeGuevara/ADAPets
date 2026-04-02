import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import heroVideo from "@/assets/Video-Hero/Hero-Video.mp4";
import {
  heroSlowZoom,
  heroLineGrow,
  fromLeft,
  fromBottom,
} from "@/utils/animations";

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
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-transparentl">
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="hero-wave-clip" clipPathUnits="objectBoundingBox">
            <path d="M 1,0 L 0,0 L 0,0.90 C 0.35,0.80 0.65,1.0 1,0.90 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="absolute inset-0 z-0 w-full h-full pointer-events-none"
        style={{ clipPath: "url(#hero-wave-clip)" }}
      >
        <motion.div className="absolute inset-0 z-0" {...heroSlowZoom}>
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-vet-primary/40 mix-blend-multiply" />
        </motion.div>

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-vet-dark/95 via-vet-dark/60 to-transparent hidden md:block" />
        <div className="absolute inset-0 z-10 bg-vet-dark/80 md:hidden" />
      </div>

      <div className="relative z-20 container px-6 md:px-16">
        <div className="flex flex-col items-start max-w-xl">
          <motion.h1
            className="text-vet-primary text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6"
            style={{
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
            {...fromLeft(0)}
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
          </motion.h1>

          <div className="relative overflow-hidden pt-4 mb-4">
            <motion.div
              className="h-[3px] bg-vet-accent absolute top-0 left-0"
              {...heroLineGrow}
            />
            <motion.p
              className="text-vet-text text-xl md:text-3xl lg:text-4xl"
              {...fromLeft(0.2)}
            >
              Tu Cuidado{" "}
              <span className="font-serif italic text-vet-primary">
                Su Bienestar.
              </span>
            </motion.p>
          </div>

          <motion.p
            className="text-vet-text/80 text-base md:text-lg max-w-sm"
            {...fromLeft(0.4)}
          >
            Salud y amor en cada consulta. Descubre medicina experta diseñada
            para la alegría de tu hogar.
          </motion.p>

          <motion.div className="mt-10 md:mt-24" {...fromBottom(0.6)}>
            <motion.button
              onClick={onOpenModal}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="
                cursor-pointer group relative
                bg-vet-accent text-vet-text
                px-10 py-4 rounded-md
                font-semibold text-lg tracking-tight
                transition-colors duration-300 ease-out
                hover:bg-vet-accent-hover
                hover:shadow-[0_16px_40px_rgba(233,128,116,0.45)]
              "
            >
              <span className="flex items-center gap-4">
                Solicitar Cita
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
