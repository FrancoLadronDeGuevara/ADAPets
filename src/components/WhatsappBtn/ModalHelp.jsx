import { useEffect } from "react";

const ModalHelp = ({ isOpen, onClose }) => {
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      <div className="relative bg-white w-full md:w-[400px] h-[70%] md:h-auto rounded-t-2xl md:rounded-2xl p-6 animate-fade-in-up">
        <h2 className="text-xl font-semibold mb-4">
          Asistente virtual 🐾
        </h2>

        <div className="space-y-3 text-sm text-gray-700">
          <p className="bg-gray-100 p-3 rounded-xl w-fit">
            👋 Hola, ¿en qué puedo ayudarte?
          </p>
          <p className="bg-[#E98074]/20 p-3 rounded-xl w-fit ml-auto">
            Quiero solicitar una cita
          </p>
          <p className="bg-gray-100 p-3 rounded-xl w-fit">
            🐶 Perfecto, un asesor se comunicará con vos.
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-[#E98074] text-white py-3 rounded-md"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalHelp;