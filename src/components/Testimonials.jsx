import { testimonials } from "../constants";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
const Testimonials = () => {
  const [width, setwidth] = useState(0);
  const slider = useRef();
  useEffect(() => {
    setwidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  return (
    <section className="testimonials | section-margin">
      <h2 className="title">What they've said</h2>
      <div>
        <motion.div ref={slider} className="slider-container">
          <motion.div
            drag="x"
            dragConstraints={{ right: +width, left: -width }}
            className="slider"
          >
            {testimonials.map((card) => (
              <div key={card.id} className="card-container | relative">
                <img
                  src={card.img}
                  alt={card.name}
                  className="card-img | absolute"
                />
                <h3 className="card-title">{card.name}</h3>
                <p className="card-content">{card.content}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div>
        <a href="#get_started" className="cta">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
