import { Navbar, Footer } from "./index";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="my-5">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
