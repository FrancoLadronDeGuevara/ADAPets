import { motion } from "motion/react";
import { FaStethoscope, FaSyringe, FaHeartbeat, FaCut } from "react-icons/fa";

// ─── Datos de servicios ───────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: FaStethoscope,
    title: "Consulta General",
    description:
      "Atención integral y diagnósticos precisos para el bienestar de tu mascota en cada etapa de su vida.",
    // Vet examining a dog
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=900&auto=format&fit=crop",
    className:
      "col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[380px] lg:min-h-[480px]",
    badge: "+500 pacientes",
  },
  {
    icon: FaSyringe,
    title: "Vacunación",
    description:
      "Esquemas completos para proteger a tu compañero de enfermedades.",
    // Veterinarian with syringe
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&auto=format&fit=crop",
    className: "col-span-1 min-h-[260px]",
    badge: null,
  },
  {
    icon: FaHeartbeat,
    title: "Cirugía Veterinaria",
    description: "Intervenciones seguras con tecnología de primer nivel.",
    // Veterinary surgery
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&auto=format&fit=crop",
    className: "col-span-1 min-h-[260px]",
    badge: null,
  },
  {
    icon: FaCut,
    title: "Estética y Peluquería",
    description:
      "Baño, corte y cuidado estético para que tu mascota luzca increíble y se sienta de maravilla.",
    // Dog grooming
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=900&auto=format&fit=crop",
    className: "col-span-1 sm:col-span-2 lg:col-span-2 min-h-[260px]",
    badge: null,
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const headingVariant = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" },
  }),
};

// ─── ServiceCard ─────────────────────────────────────────────────────────────

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  image,
  className,
  badge,
  index,
}) => (
  <motion.article
    variants={cardVariant}
    initial="hidden"
    whileInView="visible"
    custom={index}
    viewport={{ once: false, amount: 0.1 }}
    whileHover={{ scale: 1.025 }}
    transition={{ type: "spring", stiffness: 180, damping: 22 }}
    className={`relative overflow-hidden rounded-3xl cursor-default
      shadow-[0_8px_32px_0_rgba(0,0,0,0.18)]
      hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.28)]
      transition-shadow duration-300
      ${className}`}
  >
    {/* ── Imagen de fondo ────────────────────────────────── */}
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />

    {/* ── Gradiente bottom-to-top para contraste de texto ── */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

    {/* ── Ícono — esquina superior derecha ─────────────────── */}
    <motion.div
      whileHover={{ scale: 1.15, rotate: 8 }}
      transition={{ type: "spring", stiffness: 320, damping: 14 }}
      className="absolute top-4 right-4 z-20
        w-10 h-10 flex items-center justify-center rounded-xl
        bg-white/20 backdrop-blur-md border border-white/30 text-white
        shadow-sm"
    >
      <Icon size={18} />
    </motion.div>

    {/* ── Badge opcional ───────────────────────────────────── */}
    {badge && (
      <div
        className="absolute top-4 left-4 z-20
        px-3 py-1.5 rounded-xl text-xs font-semibold font-quicksand
        bg-vet-primary/80 backdrop-blur-md border border-vet-primary/50 text-white
        shadow-sm"
      >
        {badge}
      </div>
    )}

    {/* ── Contenido de texto — pegado al fondo ─────────────── */}
    <div className="relative z-10 flex flex-col justify-end h-full p-6">
      <h3 className="text-xl md:text-2xl font-bold font-fredoka text-white mb-2 drop-shadow">
        {title}
      </h3>
      <p className="font-quicksand text-sm leading-relaxed text-white/85">
        {description}
      </p>
    </div>
  </motion.article>
);

// ─── Componente principal ─────────────────────────────────────────────────────

const Services = () => (
  <section id="services" className="relative py-24 px-4 md:px-8">
    <div className="relative z-10 max-w-6xl mx-auto">
      {/* Encabezado */}
      <motion.div
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="mb-12 text-center"
      >
        <h2
          className="text-4xl md:text-5xl font-bold font-fredoka
          text-vet-primary  mb-4"
        >
          Nuestros <span className="text-vet-dark/80">Servicios</span>
        </h2>

        <p
          className="font-quicksand text-lg max-w-2xl mx-auto
          text-vet-surface/80"
        >
          Atención de calidad con amor y dedicación para la salud y felicidad de
          tu mejor compañero.
        </p>
      </motion.div>

      {/* ─── Bento Grid ──────────────────────────────────────────────────── */}
      {/*
        Mobile  (default):  1 columna, todas apiladas
        Tablet  (sm 640px): 2 columnas
        Desktop (lg 1024px): 4 columnas, bento asimétrico:
          · Consulta → col-span-2 row-span-2 (hero)
          · Vacunación → col-span-1 row-span-1
          · Cirugía → col-span-1 row-span-1
          · Estética → col-span-2 row-span-1
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
