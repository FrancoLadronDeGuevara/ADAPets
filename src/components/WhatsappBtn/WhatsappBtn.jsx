import React from "react";
import BtnFlotante from "../../assets/Boton-Flotante/btn-consultas.png";

const WhatsappBtn = ({onOpenHelp}) => {
  return (
    <a
    onClick={onOpenHelp}
      href="#consultas"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 transition-transform duration-500 hover:scale-125 active:scale-95 animate-float"
      title="Consultas"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-[#88A270] rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity" />
        <img
          src={BtnFlotante}
          alt="Consultas"
          className="relative w-20 h-20 md:w-40 md:h-40 object-contain"
        />
      </div>
    </a>
  );
};

export default WhatsappBtn;
