import { useState } from "react";
import "./App.css";

import HeroSection from "./components/HeroSection/HeroSection";
import ModalHero from "./components/ModalHero/ModalHero";
import WhatsappBtn from "./components/WhatsappBtn/WhatsappBtn";
import ModalHelp from "./components/WhatsappBtn/ModalHelp";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />

      <ModalHero
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* 👇 SE OCULTA SOLO CUANDO SE ABRE EL MODAL HERO */}
      {!isModalOpen && (
        <WhatsappBtn onOpenHelp={() => setIsHelpOpen(true)} />
      )}

      <ModalHelp
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
    </>
  );
}

export default App;