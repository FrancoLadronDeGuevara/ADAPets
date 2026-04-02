import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart, FaPaw } from "react-icons/fa";
import { fromBottom } from "../../utils/animations";
import commentsData from "../../data/comments.json";

const CommentCard = ({ comment }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(comment.likes);

  const handleLike = () => {
    if (liked) {
      setLikesCount((prev) => prev - 1);
      setLiked(false);
    } else {
      setLikesCount((prev) => prev + 1);
      setLiked(true);
    }
  };

  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(comment.fecha));

  return (
    <div className="bg-vet-bg dark:bg-vet-dark/20 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-vet-primary/10 flex flex-col gap-4 relative overflow-hidden group min-w-[300px] w-[85vw] md:w-[400px] max-w-sm shrink-0">
      
      <FaPaw className="absolute -bottom-4 -right-4 text-7xl text-vet-primary/5 group-hover:text-vet-primary/10 transition-colors duration-300 rotate-12" />

      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-vet-primary/20 flex items-center justify-center text-vet-primary font-bold text-xl shrink-0">
            {comment.usuario.charAt(0)}
          </div>
          <div>
            <h4 className="font-fredoka font-bold text-vet-dark text-lg md:text-xl truncate">
              {comment.usuario}
            </h4>
            <span className="text-vet-surface/60 text-xs md:text-sm font-quicksand">
              {formattedDate}
            </span>
          </div>
        </div>
      </div>

      <p className="text-vet-surface/80 font-quicksand font-medium leading-relaxed italic z-10 text-sm md:text-base flex-grow">
        "{comment.comentario}"
      </p>

      <div className="mt-auto pt-4 flex justify-between items-center z-10">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer ${
            liked
              ? "bg-vet-accent/10 text-vet-accent"
              : "bg-vet-surface/5 text-vet-surface/60 hover:bg-vet-accent/5 hover:text-vet-accent"
          }`}
        >
          <motion.div
            animate={liked ? { scale: [1, 1.3, 1] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {liked ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
          </motion.div>
          <span className="font-bold">{likesCount}</span>
        </button>
      </div>
    </div>
  );
};

const CommentsSection = () => {
  
  const carouselData = [...commentsData, ...commentsData];

  return (
    <section className="w-full py-24 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-[100vw] mx-auto flex flex-col gap-16 relative z-10">
        
        <motion.div 
          className="flex flex-col items-center text-center gap-4 px-6 md:px-12 mb-4"
          {...fromBottom(0.2)}
        >
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-1 bg-vet-primary rounded-full"></span>
            <span className="text-vet-primary font-bold uppercase tracking-widest text-sm font-quicksand">
              Testimonios
            </span>
            <span className="w-8 h-1 bg-vet-primary rounded-full hidden md:block"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-fredoka font-bold text-vet-dark leading-[1.1] transition-colors duration-300">
            Lo que dicen nuestros{" "}
            <span className="text-vet-primary">Clientes</span>
          </h2>
          <p className="text-lg md:text-xl text-vet-surface/80 max-w-2xl mx-auto font-quicksand font-medium transition-colors duration-300 mt-2">
            El bienestar de las mascotas y la satisfacción de sus dueños son
            nuestra mayor motivación. Descubre sus experiencias.
          </p>
        </motion.div>

        
        <div className="w-full overflow-hidden flex relative pb-8 pt-4">
          
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-vet-bg to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-vet-bg to-transparent z-20 pointer-events-none"></div>

          <motion.div
            className="flex flex-nowrap w-max gap-6 md:gap-8 pr-6 md:pr-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40, 
            }}
          >
            {carouselData.map((comment, i) => (
              <CommentCard key={`${comment.id}-${i}`} comment={comment} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;
