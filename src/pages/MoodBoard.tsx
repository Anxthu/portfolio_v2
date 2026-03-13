import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const moodItems = [
  {
    type: "image",
    src: "/Guts - Berserk.jpg",
    title: "Visual Identity",
    span: "col-span-2 row-span-2",
  },
  {
    type: "text",
    title: "Design Philosophy",
    content: "Less is more. Every pixel serves a purpose. Simplicity is the ultimate sophistication.",
    span: "col-span-1 row-span-1",
    color: "bg-white text-red-600",
  },
  {
    type: "image",
    src: "/images/art-direction.jpg",
    title: "Art Direction",
    span: "col-span-1 row-span-1",
  },
  {
    type: "color",
    colors: ["#DC2626", "#1C1C1C", "#FFFFFF"],
    title: "Color Palette",
    span: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: "/images/digital.jpg",
    title: "Digital Experiences",
    span: "col-span-2 row-span-1",
  },
  {
    type: "text",
    title: "Typography",
    content: "Monument Extended for impact. Inter for clarity. Every typeface tells a story.",
    span: "col-span-1 row-span-1",
    color: "bg-gradient-to-br from-red-900 to-black text-white",
  },
  {
    type: "image",
    src: "/vagabond.jpg",
    title: "Packaging Design",
    span: "col-span-1 row-span-2",
  },
  {
    type: "quote",
    content: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    span: "col-span-2 row-span-1",
  },
  {
    type: "image",
    src: "/images/brand-strategy.webp",
    title: "Brand Strategy",
    span: "col-span-1 row-span-1",
  },
];

const MoodBoard = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">

        <div className="section-padding pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 uppercase font-heading tracking-tight">
              MOOD BOARD
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Visual inspiration, design principles, and creative explorations that shape my work.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {moodItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`${item.span} relative overflow-hidden rounded-sm group cursor-pointer`}
              >
                {/* Image Type */}
                {item.type === "image" && (
                  <>
                    <div className="absolute inset-0 overflow-hidden">
                      <motion.img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                       loading="lazy" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                        {item.title}
                      </h3>
                    </div>
                  </>
                )}

                {/* Text Type */}
                {item.type === "text" && (
                  <div className={`${item.color} w-full h-full flex flex-col justify-center p-6 border border-border`}>
                    <h3 className="text-sm font-semibold font-heading uppercase tracking-wider mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-80">
                      {item.content}
                    </p>
                  </div>
                )}

                {/* Color Palette Type */}
                {item.type === "color" && (
                  <div className="w-full h-full border border-border bg-accent/10 p-6 flex flex-col justify-between">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      {item.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {item.colors?.map((color, idx) => (
                        <motion.div
                          key={idx}
                          className="aspect-square rounded-sm"
                          style={{ backgroundColor: color }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Quote Type */}
                {item.type === "quote" && (
                  <div className="w-full h-full bg-foreground text-background p-8 flex flex-col justify-center">
                    <p className="text-lg md:text-xl font-light leading-relaxed mb-4 italic">
                      "{item.content}"
                    </p>
                    <p className="text-sm opacity-70">— {item.author}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default MoodBoard;
