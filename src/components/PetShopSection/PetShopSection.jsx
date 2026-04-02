import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fromLeft, cardVariant } from "../../utils/animations";

const petImages = [
  "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1527362950785-f487a7c1fe48?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop", 
];

const PetShopSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 overflow-hidden flex items-center justify-center relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 w-full">
        
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-8"
          variants={fromLeft(0.2)}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col gap-4 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-1 bg-vet-primary rounded-full"></span>
              <span className="text-vet-primary font-bold uppercase tracking-widest text-sm font-quicksand">
                PET SHOP
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-fredoka font-bold text-vet-dark leading-[1.1] transition-colors duration-300">
              Nutrición y bienestar para tu{" "}
              <span className="text-vet-accent">mejor amigo</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-vet-surface/80 leading-relaxed font-quicksand font-medium transition-colors duration-300">
            Entendemos que cada mascota es única. Por eso, en nuestra{" "}
            <strong className="text-vet-dark font-bold transition-colors duration-300">
              Pet Shop
            </strong>{" "}
            ofrecemos alimentos premium, suplementos esenciales y accesorios
            diseñados específicamente para su desarrollo óptimo y felicidad
            diaria.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link to="/404" className="bg-vet-accent hover:bg-vet-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_10px_20px_rgba(233,128,116,0.3)] hover:shadow-[0_15px_25px_rgba(233,128,116,0.5)] hover:-translate-y-1 block text-center cursor-pointer">
              Visitar Pet Shop
            </Link>
            <Link to="/404" className="bg-transparent text-vet-dark hover:text-vet-primary px-6 py-4 rounded-full font-bold text-lg transition-colors duration-300 cursor-pointer block text-center">
              Ver Catálogo →
            </Link>
          </div>
        </motion.div>

        
        <motion.div
          className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] flex justify-center items-center gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          <div className="flex flex-col gap-4 md:gap-6 mt-20">
            <motion.img
              src={petImages[0]}
              alt="Nutrición"
              variants={cardVariant}
              custom={1}
              className="w-28 md:w-44 h-40 md:h-64 object-cover rounded-3xl shadow-xl border-4 border-vet-bg transition-colors duration-300"
            />
            <motion.img
              src={petImages[1]}
              alt="Bienestar"
              variants={cardVariant}
              custom={2}
              className="w-28 md:w-44 h-32 md:h-48 object-cover rounded-3xl shadow-xl border-4 border-vet-bg transition-colors duration-300"
            />
          </div>

          
          <div className="flex flex-col gap-4 md:gap-6 pb-20">
            <motion.img
              src={petImages[2]}
              alt="Felicidad"
              variants={cardVariant}
              custom={3}
              className="w-32 md:w-56 h-48 md:h-72 object-cover rounded-3xl shadow-2xl border-4 border-vet-bg z-10 transition-colors duration-300"
            />
            <motion.img
              src={petImages[3]}
              alt="Cuidados"
              variants={cardVariant}
              custom={4}
              className="w-32 md:w-56 h-40 md:h-64 object-cover rounded-3xl shadow-xl border-4 border-vet-bg transition-colors duration-300"
            />
          </div>

          
          <div className="flex flex-col gap-4 md:gap-6 mt-10">
            <motion.img
              src={petImages[4]}
              alt="Accesorios"
              variants={cardVariant}
              custom={5}
              className="w-28 md:w-44 h-56 md:h-80 object-cover rounded-3xl shadow-xl border-4 border-vet-bg transition-colors duration-300"
            />
          </div>

          
          <div className="absolute -z-10 bg-vet-primary/10 w-96 h-96 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute -z-10 bg-vet-accent/10 w-72 h-72 rounded-full blur-3xl bottom-0 right-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default PetShopSection;
