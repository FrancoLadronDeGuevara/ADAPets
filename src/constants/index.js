import visa from "@/assets/Footer-Tarjetas/visa.png";
import mastercard from "@/assets/Footer-Tarjetas/mastercard.png";
import cencosud from "@/assets/Footer-Tarjetas/cencosud.png";
import link from "@/assets/Footer-Tarjetas/link.png";
import nativa from "@/assets/Footer-Tarjetas/nativa.png";
import rapipago from "@/assets/Footer-Tarjetas/rapipago.png";

const categorias = ["Servicios", "Nosotras", "Contacto"];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const mediosPago = [
  { id: 1, img: visa, alt: "Visa" },
  { id: 2, img: mastercard, alt: "Mastercard" },
  { id: 3, img: cencosud, alt: "Cencosud" },
  { id: 4, img: link, alt: "Link" },
  { id: 5, img: nativa, alt: "Nativa" },
  { id: 6, img: rapipago, alt: "Rapipago" },
];

export { categorias, mediosPago, emailRegex };
