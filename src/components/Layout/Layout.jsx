import { Navbar, Footer } from "./index";
import { Background } from "@/components";

const Layout = ({ children }) => {
  return (
    <>
      {/* Fondo fijo global — se muestra detrás de toda la página */}
      <Background />

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
