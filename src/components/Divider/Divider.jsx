import { FaPaw } from "react-icons/fa"; // Importacion de la patita
import './Divider.css';

const Divider = ({footer = false}) => {
	return (
		<div className="professional-divider">
			<div className="divider-line" />
			<div className="divider-accent" />
			<div className={`divider-icon ${footer ? 'bg-vet-dark/95 shadow-glow-dark/95' : 'bg-vet-bg shadow-glow-bg'}`} >
				<FaPaw className="paw-left" />
				<FaPaw className="paw-right" />
			</div>
		</div>
	);
};

export default Divider;
