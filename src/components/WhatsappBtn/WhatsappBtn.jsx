import BtnFlotante from "@/assets/Boton-Flotante/btn-consultas.png";

const WhatsappBtn = ({ onOpenHelp }) => {
  return (
    <a
      onClick={onOpenHelp}
      href="#consultas"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 transition-transform duration-500 hover:scale-110 active:scale-95 animate-float group"
      title="Consultas"
    >
      <div className="absolute bottom-full right-0 mb-3 w-max animate-pulse">
        <div className="bg-white text-vet-primary font-bold text-sm py-2 px-4 rounded-xl shadow-xl relative border-2 border-vet-primary/20">
          ¡Hola! ¿Necesitas ayuda? 🐾
          <div className="absolute top-full right-6 w-3 h-3 bg-white border-b-2 border-r-2 border-vet-primary/20 transform rotate-45 -mt-1.5"></div>
        </div>
      </div>

      <div className="relative">
        <img
          src={BtnFlotante}
          alt="Consultas"
          className="relative w-16 h-16 object-contain"
        />
      </div>
    </a>
  );
};

export default WhatsappBtn;
