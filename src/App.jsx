import { useState } from "react";
import "./App.css";

import { ThemeProvider } from "./context/ThemeContext";

import {
  Layout,
  HeroSection,
  ModalHero,
  WhatsappBtn,
  ModalHelp,
  Contact,
  Services,
} from "@/components";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <ThemeProvider>
      <Layout>
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />

        <ModalHero isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <Services />

        {!isModalOpen && <WhatsappBtn onOpenHelp={() => setIsHelpOpen(true)} />}

        <ModalHelp isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />

        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
