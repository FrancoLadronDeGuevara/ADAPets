import Logo from "../../assets/Logo/logo.png";

const Navbar = () => {
  return (
    <header className="bg-vet-dark text-vet-text p-4 fixed w-full">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img src={Logo} alt="Logo ADAPets" width="64px" />
        </a>

        <ul className="flex items-center gap-3">
          <li>
            <a className="text-sm font-medium" href="#">
              SERVICIOS
            </a>
          </li>
          <hr className="w-0.5 h-4 bg-vet-bg" />
          <li>
            <a className="text-sm font-medium shadow" href="#">
              NOSOTRAS
            </a>
          </li>
          <hr className="w-0.5 h-4 bg-vet-bg" />
          <li className="hover:text-vet-accent">
            <a className="text-sm font-medium" href="#">
              CONTACTO
            </a>
          </li>
        </ul>

        <button className="bg-vet-accent px-4 py-2 rounded hover:bg-vet-primary-dark ">
          Pedir turno
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
