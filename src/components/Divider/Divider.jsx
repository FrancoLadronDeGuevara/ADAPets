import { FaPaw } from "react-icons/fa"; 
import './Divider.css';

const Divider = ({footer = false}) => {
	return (
		<div className="professional-divider">
			<div className="divider-line" />
			<div className="divider-accent" />
			<div className={`divider-icon ${footer ? 'bg-vet-dark shadow-glow-dark' : 'bg-vet-bg shadow-glow-bg'}`} >
				<FaPaw className="paw-left" />
				<FaPaw className="paw-right" />
			</div>
		</div>
	);
};

export default Divider;
