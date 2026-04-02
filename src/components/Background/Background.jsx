import { MdPets } from "react-icons/md";
import "./Background.css";


const generatePath = (
  baseY,
  amplitude,
  frequency,
  points,
  delayOffset,
  isDog,
) => {
  return Array.from({ length: points }).flatMap((_, i) => {
    const x = (i / points) * 110 - 5; 
    
    const y = baseY + Math.sin(i * frequency) * amplitude;

    
    const rot = 90 + Math.cos(i * frequency) * 20;

    
    return [
      {
        id: `p1-${i}`,
        x: x,
        y: y - (isDog ? 2 : 1), 
        rot: rot,
        delay: i * 0.5 + delayOffset,
      },
      {
        id: `p2-${i}`,
        x: x + (isDog ? 2 : 1.5), 
        y: y + (isDog ? 2 : 1), 
        rot: rot,
        delay: i * 0.5 + 0.2 + delayOffset, 
      },
    ];
  });
};

const DOG_TRAIL = generatePath(20, 8, 0.4, 15, 0, true); 
const CAT_TRAIL = generatePath(75, 6, 0.5, 18, 2, false); 

const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      
      {DOG_TRAIL.map((p) => (
        <MdPets
          key={p.id}
          className="absolute text-vet-primary animate-paw"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: "28px",
            "--rot": `${p.rot}deg`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      
      {CAT_TRAIL.map((p) => (
        <MdPets
          key={p.id}
          className="absolute text-vet-primary animate-paw"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: "18px",
            "--rot": `${p.rot}deg`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
