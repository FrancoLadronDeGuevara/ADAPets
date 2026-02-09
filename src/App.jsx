import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import ModalHero from "./components/ModalHero/ModalHero";
import Footer from "./components/FooterSection/Footer";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import WhatsappBtn from "./components/WhatsappBtn/WhatsappBtn";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <ThemeProvider>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <HeroSection onOpenModal={() => setIsModalOpen(true)} />

      <ModalHero isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {!isModalOpen && <WhatsappBtn onOpenHelp={() => setIsHelpOpen(true)} />}

       <ModalHelp isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
      <Footer/>

    </ThemeProvider>
  );
}

export default App;
