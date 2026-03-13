import { motion } from "framer-motion";
import Bookshelf from "./Bookshelf";

const services = [
  {
    title: "UI/UX DESIGN",
    description:
      "I craft intuitive and engaging user experiences through thoughtful interface design, user research, and interaction patterns that prioritize usability and delight.",
    image: "/service02.webp",
  },
  {
    title: "BRAND IDENTITY",
    description:
      "From logos and typography to colors and brand systems, I design distinctive visual identities that bring your brand's personality to life across every touchpoint.",
    image: "/service01.webp",
  },
  {
    title: "ART DIRECTION",
    description:
      "I provide creative leadership to ensure your brand's visuals, photography, and campaigns align beautifully with your identity, guiding every detail for a cohesive, polished result.",
    image: "/images/art-direction.jpg",
  },
  {
    title: "WHY WORK WITH ME",
    description: "",
    image: "",
    isTrustCard: true,
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding py-24 bg-background">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-heading font-[800] tracking-tight uppercase text-foreground mb-16"
      >
        SERVICES
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => {
          // Trust card with 3D blob - spans 2 columns on desktop
          if (service.isTrustCard) {
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative w-full aspect-[4/5] md:aspect-auto md:h-[500px] lg:h-[600px] md:col-span-2 lg:col-span-3 overflow-hidden bg-[#111] border border-border flex items-center justify-center rounded-sm"
              >
                <Bookshelf />
              </motion.div>
            );
          }

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative w-full aspect-[4/5] overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <motion.img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
               loading="lazy" />

              {/* Dark Overlay that appears on hover */}
              <div
                className="absolute inset-0 bg-black opacity-30 transition-opacity duration-500 group-hover:opacity-80"
              />

              {/* Top Header Row */}
              <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10 text-white">
                <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wide">
                  {service.title}
                </h3>
                <div className="relative text-2xl font-light w-6 h-6 flex items-center justify-center overflow-hidden">
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-400 transform group-hover:-translate-y-full opacity-100 group-hover:opacity-0">
                    +
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-400 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                    —
                  </span>
                </div>
              </div>

              {/* Reveal Text */}
              <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-10 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-white lg:text-lg leading-relaxed font-light">
                <p>
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
