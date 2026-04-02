import { Navbar, Footer } from "./index";
import { Background } from "@/components";

const Layout = ({ children, onOpenModal }) => {
  return (
    <>
      <Background />

      <Navbar onOpenModal={onOpenModal} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
