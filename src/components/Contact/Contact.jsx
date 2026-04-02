import { useState } from "react";
import { emailRegex } from "@/constants";
import { BsSend } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "motion/react";
import { fromLeft, fromRight, fromBottom } from "@/utils/animations";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    } else if (formData.nombre.length < 3) {
      newErrors.nombre = "El nombre debe tener al menos 3 caracteres";
    }
    if (!formData.email) {
      newErrors.email = "El correo electrónico es obligatorio";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido";
    }
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje no puede estar vacío";
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = "El mensaje debe ser un poco más largo";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSending(true);
      setTimeout(() => {
        setIsSubmitted(true);
        setErrors({});
        setFormData({ nombre: "", email: "", mensaje: "" });
        setIsSending(false);
      }, 2000);
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false);
    }
  };

  return (
    <section className="section" id="Contacto">
      <div className="wrapperSection">
        <motion.div
           initial={{ opacity: 0, y: -24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
           className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-1 bg-vet-primary rounded-full"></span>
            <span className="text-vet-primary font-bold uppercase tracking-widest text-sm font-quicksand">
              Escríbenos
            </span>
            <span className="w-8 h-1 bg-vet-primary rounded-full hidden md:block"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-fredoka font-bold text-vet-dark leading-[1.1] transition-colors duration-300">
            Formulario de <span className="text-vet-primary">Contacto</span>
          </h2>
        </motion.div>

        <div className="contact-grid">
          <motion.div className="formContact" {...fromLeft(0)}>
            <motion.div className="formGroup" {...fromBottom(0.1)}>
              <label htmlFor="nombre" className="formLabel">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`formInput ${errors.nombre ? "border-red-400 ring-1 ring-red-400" : "border-transparent focus:ring-2 focus:ring-vet-primary"}`}
                placeholder="Tu nombre completo"
              />
              {errors.nombre && <span className="error">{errors.nombre}</span>}
            </motion.div>

            <motion.div className="formGroup" {...fromBottom(0.2)}>
              <label htmlFor="email" className="formLabel">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`formInput ${errors.email ? "border-red-400 ring-1 ring-red-400" : "border-transparent focus:ring-2 focus:ring-vet-primary"}`}
                placeholder="ejemplo@correo.com"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </motion.div>

            <motion.div className="formGroup" {...fromBottom(0.3)}>
              <label htmlFor="mensaje" className="formLabel">Mensaje:</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                className={`formInput ${errors.mensaje ? "border-red-400 ring-1 ring-red-400" : "border-transparent focus:ring-2 focus:ring-vet-primary"}`}
                placeholder="Escribe tu consulta aquí..."
              />
              {errors.mensaje && <span className="error">{errors.mensaje}</span>}
            </motion.div>

            <motion.button
              type="submit"
              onClick={handleSubmit}
              disabled={isSending}
              {...fromBottom(0.4)}
              whileHover={!isSending ? { scale: 1.04 } : {}}
              whileTap={!isSending ? { scale: 0.96 } : {}}
              className={`btnContactSubmit group ${isSending ? "bg-gray-400 cursor-not-allowed opacity-70" : "hover:bg-vet-accent-hover hover:shadow-[0_16px_40px_rgba(233,128,116,0.45)] cursor-pointer"}`}
            >
              Enviar
              <span className="spanBtnContactSubmit"><BsSend /></span>
            </motion.button>

            {isSubmitted && (
              <motion.div
                className="successMessage"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
              </motion.div>
            )}
          </motion.div>

          <motion.div className="contact-map-wrapper" {...fromRight(0.1)}>
            <div className="contact-map-header">
              <FaMapMarkerAlt size={18} className="text-vet-accent" />
              <div className="contact-map-address">
                <span className="contact-map-street">Tucumán 1851</span>
                <span className="contact-map-city">Capital Federal, Buenos Aires</span>
              </div>
            </div>

            <div className="contact-map-frame">
              <iframe
                title="Ubicación ADAPets – Tucumán 1851, Buenos Aires"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878846747!2d-58.38445062376157!3d-34.60367885742097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac96c8aa5e7%3A0x5c1b3f01b2f48d3d!2sTucum%C3%A1n%201851%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1710523200000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Tucuman+1851+Capital+Federal+Buenos+Aires"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map-link"
            >
              Ver en Google Maps →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
