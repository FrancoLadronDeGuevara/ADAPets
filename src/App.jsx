import { useState } from "react";
import "./App.css";

import { ThemeProvider } from "./context/ThemeContext";

import {
  Layout,
  HeroSection,
  ModalHero,
  WhatsappBtn,
  ModalHelp,
} from "@/components";
import Contacto from "./components/Contacto/Contacto";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <ThemeProvider>
      <Layout>
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />

        <ModalHero isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {!isModalOpen && <WhatsappBtn onOpenHelp={() => setIsHelpOpen(true)} />}

        <ModalHelp isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
        
        <Contacto/>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
