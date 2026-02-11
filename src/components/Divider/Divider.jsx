import { FaPaw } from "react-icons/fa"; // Importacion de la patita
import './Divider.css';

const Divider = () => {
	return (
		<div className="professional-divider">
			<div className="divider-line" />
			<div className="divider-accent" />
			<div className="divider-icon">
				<FaPaw className="paw-left" />
				<FaPaw className="paw-right" />
			</div>
		</div>
	);
};

export default Divider;
