import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fromBottom, heroSlowZoom } from "../../utils/animations";
import Layout from "../Layout/Layout"; // Not needed as App.jsx renders Layout

const NotFound = () => {
  return (
    <section className="relative w-full h-[80vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden z-10 transition-colors duration-300">
      {/* Elementos decorativos animados */}
      <motion.div
        className="absolute w-64 h-64 bg-vet-primary/20 rounded-full blur-3xl -top-10 -left-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-vet-accent/20 rounded-full blur-3xl bottom-10 -right-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center gap-6 relative z-10">
        {/* Número 404 animado tipo huellas */}
        <motion.div
          className="flex items-center justify-center gap-4 text-8xl md:text-9xl font-fredoka font-bold text-vet-primary"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          <motion.span variants={fromBottom(0.1)} className="drop-shadow-lg">
            4
          </motion.span>
          <motion.div
            variants={fromBottom(0.2)}
            className="relative w-24 h-24 md:w-32 md:h-32 mb-4"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-vet-accent w-full h-full drop-shadow-xl opacity-90 animate-pulse rotate-180"
            >
              <path d="M12 2c-5.33 0-8 3.48-8 7.2 0 1.95 1.05 3.86 2.5 5.09-1.32.96-3 3.32-3 5.4 0 1.28.61 2.31 1.63 2.31 1.48 0 2.87-2.32 4.37-4.46C10.36 17.84 11.23 18 12 18s1.64-.16 2.5-.46c1.5 2.14 2.89 4.46 4.37 4.46 1.02 0 1.63-1.03 1.63-2.31 0-2.08-1.68-4.44-3-5.4 1.45-1.23 2.5-3.14 2.5-5.09C20 5.48 17.33 2 12 2zm-3.5 10c-1.38 0-2.5-1.12-2.5-2.5S7.12 7 8.5 7 11 8.12 11 9.5 9.88 12 8.5 12zm7 0c-1.38 0-2.5-1.12-2.5-2.5S14.12 7 15.5 7 18 8.12 18 9.5 16.88 12 15.5 12z" />
            </svg>
          </motion.div>
          <motion.span variants={fromBottom(0.3)} className="drop-shadow-lg">
            4
          </motion.span>
        </motion.div>

        {/* Mensaje lúdico */}
        <motion.div
          className="flex flex-col gap-2 relative"
          variants={fromBottom(0.5)}
          initial="initial"
          animate="whileInView"
        >
          <h2 className="text-3xl md:text-5xl font-fredoka font-bold text-vet-accent bg-clip-text text-transparent bg-gradient-to-r from-vet-primary to-vet-accent">
            ¡Uy! Parece que alguien escondió esta página
          </h2>
          <p className="text-xl md:text-2xl text-vet-surface/80 font-quicksand font-medium mt-4">
            Tal vez tu mascota la enterró en el jardín trasero o se fue
            persiguiendo una mariposa.
          </p>
        </motion.div>

        {/* Botón de regreso */}
        <motion.div
          className="mt-8"
          variants={fromBottom(0.7)}
          initial="initial"
          animate="whileInView"
        >
          <Link
            to="/"
            className="group relative inline-flex items-center gap-3 bg-vet-dark hover:bg-vet-primary text-vet-bg px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 shadow-[0_10px_20px_rgba(43,43,43,0.3)] hover:shadow-[0_15px_30px_rgba(206,170,121,0.5)] hover:-translate-y-2 cursor-pointer overflow-hidden"
          >
            <span className="absolute w-0 h-full bg-vet-primary top-0 left-0 transition-all duration-500 ease-out group-hover:w-full -z-10"></span>
            <svg
              className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver a un lugar seguro
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
