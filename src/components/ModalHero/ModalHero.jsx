import { useEffect } from "react";

const ModalHero = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* PANEL */}
      <div
        className="
          relative ml-auto
          w-full md:w-1/2
          h-full
          bg-[#F9FBF7]
          p-8 md:p-12
          animate-slide-in
        "
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-[#2C5F5D]">
            Solicitar Cita
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-400 hover:text-gray-600"
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>

        {/* FORM */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Nombre del tutor"
            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#88A270]"
          />

          <input
            type="text"
            placeholder="Nombre de la mascota"
            className="w-full p-4 border rounded-md"
          />

          <select className="w-full p-4 border rounded-md">
            <option>Tipo de consulta</option>
            <option>Consulta general</option>
            <option>Vacunación</option>
            <option>Urgencia</option>
          </select>

          <input type="date" className="w-full p-4 border rounded-md" />

          <textarea
            rows="4"
            placeholder="Comentarios adicionales"
            className="w-full p-4 border rounded-md"
          />

          <button
            type="submit"
            className="
              w-full
              bg-[#E98074]
              text-white
              p-4
              rounded-md
              font-semibold
              hover:bg-[#d47266]
              transition-colors
            "
          >
            Enviar solicitud
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalHero;