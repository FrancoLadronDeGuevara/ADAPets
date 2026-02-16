import { MdPets } from 'react-icons/md';
import './Background.css';

// El rastro 
const generatePath = (
	baseY,
	amplitude,
	frequency,
	points,
	delayOffset,
	isDog,
) => {
	return Array.from({ length: points }).flatMap((_, i) => {
		const x = (i / points) * 110 - 5; // De -5% a 105% para cubrir bordes
		// Fórmula de onda: y = centro + amplitud * sin(frecuencia * x)
		const y = baseY + Math.sin(i * frequency) * amplitude;

		// Rotación calculada para que la pata "mire" hacia donde camina (tangente)
		const rot = 90 + Math.cos(i * frequency) * 20;

		// PAR de patas (Izquierda y Derecha)
		return [
			{
				id: `p1-${i}`,
				x: x,
				y: y - (isDog ? 2 : 1), // Pata izquierda (un poco arriba)
				rot: rot,
				delay: i * 0.5 + delayOffset,
			},
			{
				id: `p2-${i}`,
				x: x + (isDog ? 2 : 1.5), // Pata derecha (un poco adelantada)
				y: y + (isDog ? 2 : 1), // Pata derecha (un poco abajo)
				rot: rot,
				delay: i * 0.5 + 0.2 + delayOffset, // Desfase de tiempo entre pasos
			},
		];
	});
};

const DOG_TRAIL = generatePath(20, 8, 0.4, 15, 0, true); // Rastro arriba (Perro)
const CAT_TRAIL = generatePath(75, 6, 0.5, 18, 2, false); // Rastro abajo (Gato)

const Background = () => {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{/* Renderizado de rastro de Perro */}
			{DOG_TRAIL.map((p) => (
				<MdPets
					key={p.id}
					className="absolute text-vet-primary animate-paw"
					style={{
						left: `${p.x}%`,
						top: `${p.y}%`,
						fontSize: '28px',
						'--rot': `${p.rot}deg`,
						animationDelay: `${p.delay}s`,
					}}
				/>
			))}

			{/* Renderizado de rastro de Gato */}
			{CAT_TRAIL.map((p) => (
				<MdPets
					key={p.id}
					className="absolute text-vet-primary animate-paw"
					style={{
						left: `${p.x}%`,
						top: `${p.y}%`,
						fontSize: '18px',
						'--rot': `${p.rot}deg`,
						animationDelay: `${p.delay}s`,
					}}
				/>
			))}
		</div>
	);
};

export default Background;
