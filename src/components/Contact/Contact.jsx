import { useState } from "react";
import { emailRegex } from "@/constants";
import { BsSend } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  // Estado para manejar los errores de validación
  const [errors, setErrors] = useState({});
  // Estado para manejar el estado de envío del formulario
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Estado para manejar el estado de envío para mostrar un spinner o deshabilitar el botón mientras se envía)
  const [isSending, setIsSending] = useState(false);

  // Función de validación
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
    // Limpiar error del campo mientras el usuario escribe
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setIsSending(true);
      setTimeout(() => {
        console.log("Enviado:", formData);
        setIsSubmitted(true);
        setErrors({});
        setFormData({ nombre: "", email: "", mensaje: "" });
        setIsSending(false); // Desbloqueo del boton
      }, 2000);
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false);
    }
  };

  return (
    <section className="section" id="Contacto">
      <div className="wrapperSection">
        {/* Encabezado Estilo Banner */}
        <h2 className="titleSection">Contacto</h2>

        <form onSubmit={handleSubmit} className="formContact" noValidate>
          {/* Campo Nombre */}
          <div className="formGroup">
            <label htmlFor="nombre" className="formLabel">
              Nombre:
            </label>
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
          </div>

          {/* Campo Email */}
          <div className="formGroup">
            <label htmlFor="email" className="formLabel">
              Email:
            </label>
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
          </div>

          {/* Campo Mensaje */}
          <div className="formGroup">
            <label htmlFor="mensaje" className="formLabel">
              Mensaje:
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              className={`formInput ${errors.mensaje ? "border-red-400 ring-1 ring-red-400" : "border-transparent focus:ring-2 focus:ring-vet-primary"}`}
              placeholder="Escribe tu consulta aquí..."
            ></textarea>
            {errors.mensaje && <span className="error">{errors.mensaje}</span>}
          </div>

          {/* Botón de Envío */}
          <button
            type="submit"
            disabled={isSending}
            className={`btnContactSubmit group ${
              isSending
                ? "bg-gray-400 cursor-not-allowed opacity-70" // Estilo deshabilitado
                : "hover:bg-vet-accent-hover hover:scale-[1.04] hover:shadow-[0_16px_40px_rgba(233,128,116,0.45)] active:scale-95 cursor-pointer" // Estilo activo
            }`}
          >
            Enviar
            <span className="spanBtnContactSubmit">
              <BsSend />
            </span>
          </button>

          {/* Mensaje de Éxito */}
          {isSubmitted && (
            <div className="successMessage">
              ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
