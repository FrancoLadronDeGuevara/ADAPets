import { useState } from "react";
import "./App.css";

import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  Layout,
  HeroSection,
  ModalHero,
  WhatsappBtn,
  ModalHelp,
  Contact,
  Services,
  About,
  PetShopSection,
  CommentsSection,
  NotFound,
} from "@/components";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <ThemeProvider>
      <Layout onOpenModal={() => setIsModalOpen(true)}>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection onOpenModal={() => setIsModalOpen(true)} />
              <ModalHero isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
              <About />
              <Services />
              <PetShopSection />
              <CommentsSection />
              {!isModalOpen && <WhatsappBtn onOpenHelp={() => setIsHelpOpen(true)} />}
              <ModalHelp isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
              <Contact />
            </>
          } />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
