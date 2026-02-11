import { useState } from 'react';
import { emailRegex } from '@/constants';
import { BsSend } from 'react-icons/bs';

const Contact = () => {
	// Estado para manejar los datos del formulario
	const [formData, setFormData] = useState({
		nombre: '',
		email: '',
		mensaje: '',
	});

	// Estado para manejar los errores de validación
	const [errors, setErrors] = useState({});
	// Estado para manejar el estado de envío del formulario
	const [isSubmitted, setIsSubmitted] = useState(false);
	// Estado para manejar el estado de envío para mostrar un spinner o deshabilitar el botón mientras se envía)
	const [isSending, setIsSending] = useState(false);

	// Función de validación
	const validate = () => {
		const newErrors = {};
		if (!formData.nombre.trim()) {
			newErrors.nombre = 'El nombre es obligatorio';
		} else if (formData.nombre.length < 3) {
			newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
		}

		if (!formData.email) {
			newErrors.email = 'El correo electrónico es obligatorio';
		} else if (!emailRegex.test(formData.email)) {
			newErrors.email = 'Ingresa un correo electrónico válido';
		}

		if (!formData.mensaje.trim()) {
			newErrors.mensaje = 'El mensaje no puede estar vacío';
		} else if (formData.mensaje.length < 10) {
			newErrors.mensaje = 'El mensaje debe ser un poco más largo';
		}

		return newErrors;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Limpiar error del campo mientras el usuario escribe
		if (errors[name]) {
			setErrors({ ...errors, [name]: null });
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();

		if (Object.keys(validationErrors).length === 0) {
			setIsSending(true);
			setTimeout(() => {
				console.log('Enviado:', formData);
				setIsSubmitted(true);
				setErrors({});
				setFormData({ nombre: '', email: '', mensaje: '' });
				setIsSending(false); // Desbloqueo del boton
			}, 2000);
		} else {
			setErrors(validationErrors);
			setIsSubmitted(false);
		}
	};

	// Estilos css
	// Use esta manera porque sino tenemos que cambiar la configuracion de Tailwind para agregar clases dinamicas, y esto es mas sencillo y limpio para este caso puntual, ademas de que no se repiten las clases en el codigo JSX

	const contactSectionClass =
		'w-full flex flex-col items-center justify-center p-6 bg-vet-bg transition-colors duration-300';

	const titleContactSectionClass =
		'bg-vet-primary uppercase w-full max-w-4xl text-center text-3xl text-vet-text py-3 font-extrabold tracking-wide rounded-sm shadow-sm';

	const formContactClass =
		'w-full max-w-2xl flex flex-col gap-5 mt-8 items-center';

	const formGroupClass = 'w-full flex flex-col gap-1.5';

	const formLabelClass =
		'text-vet-surface dark:text-vet-gray font-medium ml-1';

	const formInputClass =
		'w-full p-3 rounded-md outline-none border transition-all bg-vet-dark text-vet-text placeholder-vet-gray/50';

	const errorClass = 'text-red-400 text-xs mt-1 ml-1 font-medium';

	const successMessageClass =
		'mt-4 p-3 bg-green-100 border border-green-400 text-green-700 text-center rounded-md animate-pulse';

	const buttonClass = `w-1/3 p-3 rounded-md font-bold text-lg mt-4 transition-all duration-300 transition-all duration-300 ease-out
                bg-vet-accent flex items-center gap-4 justify-center group relative
    ${
		isSending
			? 'bg-gray-400 cursor-not-allowed opacity-70' // Estilo deshabilitado
			: 'hover:bg-vet-accent-hover hover:scale-[1.04] hover:shadow-[0_16px_40px_rgba(233,128,116,0.45)] active:scale-95 cursor-pointer' // Estilo activo
	}`;

	const spanButton = 'transition-transform duration-300 group-hover:translate-x-2';

	return (
		<section className={contactSectionClass}>
			{/* Encabezado Estilo Banner */}
			<h2 className={titleContactSectionClass}>Contacto</h2>

			<form
				onSubmit={handleSubmit}
				className={formContactClass}
				noValidate
			>
				{/* Campo Nombre */}
				<div className={formGroupClass}>
					<label htmlFor="nombre" className={formLabelClass}>
						Nombre:
					</label>
					<input
						type="text"
						id="nombre"
						name="nombre"
						value={formData.nombre}
						onChange={handleChange}
						className={`${formInputClass} ${errors.nombre ? 'border-red-400 ring-1 ring-red-400' : 'border-transparent focus:ring-2 focus:ring-vet-primary'}`}
						placeholder="Tu nombre completo"
					/>
					{errors.nombre && (
						<span className={errorClass}>{errors.nombre}</span>
					)}
				</div>

				{/* Campo Email */}
				<div className={formGroupClass}>
					<label htmlFor="email" className={formLabelClass}>
						Email:
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className={`${formInputClass} ${errors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-transparent focus:ring-2 focus:ring-vet-primary'}`}
						placeholder="ejemplo@correo.com"
					/>
					{errors.email && (
						<span className={errorClass}>{errors.email}</span>
					)}
				</div>

				{/* Campo Mensaje */}
				<div className={formGroupClass}>
					<label htmlFor="mensaje" className={formLabelClass}>
						Mensaje:
					</label>
					<textarea
						id="mensaje"
						name="mensaje"
						rows="5"
						value={formData.mensaje}
						onChange={handleChange}
						className={`${formInputClass} ${errors.mensaje ? 'border-red-400 ring-1 ring-red-400' : 'border-transparent focus:ring-2 focus:ring-vet-primary'}`}
						placeholder="Escribe tu consulta aquí..."
					></textarea>
					{errors.mensaje && (
						<span className={errorClass}>{errors.mensaje}</span>
					)}
				</div>

				{/* Botón de Envío */}
				<button
					type="submit"
					disabled={isSending}
					className={buttonClass}
				>
					Enviar
					<span className={spanButton}>
						<BsSend />
					</span>
				</button>

				{/* Mensaje de Éxito */}
				{isSubmitted && (
					<div className={successMessageClass}>
						¡Mensaje enviado con éxito! Nos pondremos en contacto
						pronto.
					</div>
				)}
			</form>
		</section>
	);
};

export default Contact;
