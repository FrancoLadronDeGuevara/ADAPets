import { useState, useEffect } from 'react';
import {
	FaInstagram,
	FaFacebook,
	FaTiktok,
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaWhatsapp,
} from 'react-icons/fa';
import Button from './Button';
import Divider from '../../Divider/Divider';
import { emailRegex, categorias, mediosPago } from '@/constants';

const redes = [
	{ id: 1, url: 'https://instagram.com', icon: <FaInstagram size={28} /> },
	{ id: 2, url: 'https://facebook.com', icon: <FaFacebook size={28} /> },
	{ id: 3, url: 'https://tiktok.com', icon: <FaTiktok size={28} /> },
];

function Footer() {
	const [email, setEmail] = useState('');
	const [mensaje, setMensaje] = useState('');
	useEffect(() => {
		if (mensaje) {
			const timer = setTimeout(() => {
				setMensaje('');
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [mensaje]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!email) {
			setMensaje('Por favor ingresá un email');
			return;
		}

		if (!emailRegex.test(email)) {
			setMensaje('Ingresá un email válido (ej: nombre@email.com)');
			return;
		}

		setMensaje('💚¡Gracias por suscribirte! 💚');
		setEmail('');
	};

	return (
		<footer
			className="
        w-full p-6
        bg-vet-dark/95
        backdrop-blur-xl
        transition-all duration-500
        text-vet-text"
		>
			{/* Parte superior */}
			<div className="flex flex-col md:flex-row justify-between gap-6 max-w-6xl mx-auto w-full">
				{/* Columna 1 */}
				<div className="flex flex-col gap-2 flex-1">
					<h4 className="text-base font-semibold">Seguinos</h4>
					<div className="flex gap-4">
						{redes.map((red) => (
							<Button
								key={red.id}
								href={red.url}
								icon={red.icon}
								className="transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 hover:text-vet-accent"
							/>
						))}
					</div>
				</div>

				{/* Columna 2 */}
				<div className="flex flex-col gap-2 flex-1">
					<h4 className="text-base font-semibold">Categorías</h4>
					<ul className="flex flex-col gap-1 text-sm">
						{categorias.map((cat, index) => (
							<li
								key={index}
								className="cursor-pointer hover:text-vet-accent transition-colors"
							>
								{cat}
							</li>
						))}
					</ul>
				</div>

				{/* Columna 3 */}
				<div className="flex flex-col gap-3 flex-1 text-sm">
					<h4 className="text-base font-semibold">Contactanos</h4>
					<a
						href="tel:542617170005"
						className="flex items-center gap-2 transition-colors hover:text-vet-accent group"
					>
						<FaPhoneAlt size={16} />
						<span>+541177170005</span>
					</a>
					<a
						href="https://wa.me/542617170005"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 transition-colors hover:text-vet-accent group"
					>
						<FaWhatsapp size={16} />
						<span>+1177170005</span>
					</a>
					<a
						href="mailto:contactos@adapets.com"
						className="flex items-center gap-2 transition-colors hover:text-vet-accent group"
					>
						<FaEnvelope size={16} />
						<span className="truncate">contactos@adapets.com</span>
					</a>
					<a
						href="https://www.google.com/maps/search/?api=1&query=Tucuman+1851+Capital+Federal+Buenos+Aires"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-start gap-2 transition-colors hover:text-vet-accent group"
					>
						{/* Agregamos mt-1 para que el icono se alinee con el primer renglón */}
						<FaMapMarkerAlt size={16} className="mt-1 shrink-0" />

						<div className="flex flex-col leading-tight text-left">
							{/* Quitamos la clase de color fija para que herede el hover del padre */}
							<span className="font-semibold transition-colors group-hover:text-vet-accent">
								Tucumán 1851
							</span>
							<span className="text-xs text-muted transition-colors group-hover:text-vet-accent">
								Capital Federal, Buenos Aires
							</span>
						</div>
					</a>{' '}
				</div>

				{/* Columna 4 */}
				<div className="flex flex-col gap-4 flex-1">
					<h4 className="text-base font-semibold">
						Suscribite al newsletter
					</h4>

					<form
						onSubmit={handleSubmit}
						noValidate
						className="flex flex-col gap-3"
					>
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="
                  border border-vet-gray
                  bg-transparent
                  rounded
                  px-3 py-2
                  text-vet-text
                  placeholder:text-muted
                  focus:outline-none
                  focus:ring-1
                  focus:ring-vet-accent
                "
						/>

						<button
							type="submit"
							className="
                  bg-vet-accent
                  hover:bg-vet-accent-hover
                  text-white
                  font-bold
                  py-2
                  rounded
                  transition-all
                  shadow-md
                  hover:shadow-lg
                "
						>
							Unirme ahora
						</button>

						{mensaje && (
							<p className="text-sm font-medium text-vet-accent">
								{mensaje}
							</p>
						)}
					</form>
				</div>

				{/* Columna 5 */}
				<div className="flex flex-col gap-3 flex-1">
					<h4 className="text-base font-semibold">Medios de pago</h4>

					<div className="flex flex-wrap gap-3 items-center">
						{mediosPago.map((medio) => (
							<img
								key={medio.id}
								src={medio.img}
								alt={medio.alt}
								className="h-8 object-contain"
							/>
						))}
					</div>
				</div>
			</div>

			{/* Parte inferior */}
			<div className="mt-4 flex flex-col items-center gap-6 text-sm border-t border-white/5 pt-8">
				{/* Separador Animado Minimalista */}
				<Divider footer/>

				<div className="flex flex-col items-center gap-1">
					<p className="text-muted font-medium tracking-wide">
						© 2026 - ADAPets | Todos los derechos reservados
					</p>
					{/* Referencia al código del cliente para facilitar soporte/admin */}
					<span className="text-[10px] opacity-40 uppercase tracking-widest">
						Client Code: ADP-2026-AR
					</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
