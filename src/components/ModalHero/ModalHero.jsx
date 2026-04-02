import { useEffect, useState } from "react";

const ModalHero = ({ isOpen, onClose }) => {
  const initialState = {
    tutor: "",
    mascota: "",
    tipo: "Tipo de consulta",
    fecha: "",
    comentarios: "",
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid =
    form.tutor.trim() !== "" &&
    form.mascota.trim() !== "" &&
    form.tipo !== "Tipo de consulta" &&
    form.fecha !== "" &&
    Object.keys(errors).every((key) => !errors[key]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      setForm(initialState);
      setErrors({});
    }
  }, [isOpen]);

  const validate = () => {
    const newErrors = {};
    const hoy = new Date().toISOString().split("T")[0];
    const regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (!form.tutor.trim()) {
      newErrors.tutor = "Obligatorio";
    } else if (!regexLetras.test(form.tutor)) {
      newErrors.tutor = "Solo letras";
    }

    if (!form.mascota.trim()) {
      newErrors.mascota = "Obligatorio";
    } else if (!regexLetras.test(form.mascota)) {
      newErrors.mascota = "Solo letras";
    }

    if (form.tipo === "Tipo de consulta") {
      newErrors.tipo = "Selecciona opción";
    }

    if (!form.fecha) {
      newErrors.fecha = "Obligatorio";
    } else if (form.fecha < hoy) {
      newErrors.fecha = "Fecha pasada";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setForm(initialState);
        onClose();
        alert("¡Solicitud enviada! Nos vemos pronto en ADA Pets 🐾");
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative ml-auto w-full md:w-1/2 h-full bg-vet-bg p-8 md:p-12 animate-slide-in overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-vet-dark font-['Fredoka']">
            Solicitar Cita
          </h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <div>
            <input
              name="tutor"
              type="text"
              placeholder="Nombre del tutor"
              value={form.tutor}
              onChange={handleChange}
              className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-vet-primary bg-vet-bg text-vet-surface ${
                errors.tutor
                  ? "border-red-500 ring-1 ring-red-500"
                  : "border-vet-primary/30"
              }`}
            />
            {errors.tutor && (
              <span className="text-red-500 text-xs mt-1 block">
                {errors.tutor}
              </span>
            )}
          </div>

          <div>
            <input
              name="mascota"
              type="text"
              placeholder="Nombre de la mascota"
              value={form.mascota}
              onChange={handleChange}
              className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-vet-primary bg-vet-bg text-vet-surface ${
                errors.mascota
                  ? "border-red-500 ring-1 ring-red-500"
                  : "border-vet-primary/30"
              }`}
            />
            {errors.mascota && (
              <span className="text-red-500 text-xs mt-1 block">
                {errors.mascota}
              </span>
            )}
          </div>

          <div>
            <select
              name="tipo"
              value={form.tipo}
              onChange={handleChange}
              className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-vet-primary bg-vet-bg text-vet-surface ${
                errors.tipo
                  ? "border-red-500 ring-1 ring-red-500"
                  : "border-vet-primary/30"
              }`}
            >
              <option disabled>Tipo de consulta</option>
              <option>Consulta general</option>
              <option>Vacunación</option>
              <option>Urgencia</option>
            </select>
            {errors.tipo && (
              <span className="text-red-500 text-xs mt-1 block">
                {errors.tipo}
              </span>
            )}
          </div>

          <div>
            <input
              name="fecha"
              type="date"
              value={form.fecha}
              onChange={handleChange}
              className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-vet-primary bg-vet-bg text-vet-surface ${
                errors.fecha
                  ? "border-red-500 ring-1 ring-red-500"
                  : "border-vet-primary/30"
              }`}
            />
            {errors.fecha && (
              <span className="text-red-500 text-xs mt-1 block">
                {errors.fecha}
              </span>
            )}
          </div>

          <textarea
            name="comentarios"
            rows="4"
            placeholder="Comentarios adicionales"
            value={form.comentarios}
            onChange={handleChange}
            className="w-full p-4 border border-vet-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vet-primary bg-vet-bg text-vet-surface"
          />

          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            className={`w-full p-4 rounded-md font-semibold transition-all flex justify-center items-center gap-2 
              ${
                !isValid || isSubmitting
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-70"
                  : "bg-vet-accent text-vet-text hover:bg-vet-accent-hover active:scale-95 shadow-md"
              }`}
          >
            {isSubmitting && (
              <svg
                className="animate-spin h-5 w-5 text-vet-text"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            {isSubmitting ? "Enviando..." : "Enviar solicitud"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalHero;
