import { motion } from "framer-motion";

const tools = [
  { name: "Figma", category: "Design", icon: "🎨", proficiency: 95 },
  { name: "Adobe XD", category: "Design", icon: "✨", proficiency: 85 },
  { name: "Photoshop", category: "Design", icon: "🖼️", proficiency: 90 },
  { name: "Illustrator", category: "Design", icon: "🎭", proficiency: 88 },
  { name: "After Effects", category: "Motion", icon: "🎬", proficiency: 75 },
  { name: "Framer", category: "Prototyping", icon: "⚡", proficiency: 80 },
  { name: "Principle", category: "Prototyping", icon: "🔄", proficiency: 70 },
  { name: "React", category: "Development", icon: "⚛️", proficiency: 85 },
  { name: "TypeScript", category: "Development", icon: "📘", proficiency: 80 },
  { name: "Tailwind CSS", category: "Development", icon: "🎨", proficiency: 90 },
];

const ToolsStack = () => {
  return (
    <section className="section-padding py-24 md:py-32 bg-background border-t border-border">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-heading font-[800] tracking-tight uppercase text-foreground mb-16"
      >
        TOOLS & STACK
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative bg-accent/20 border border-border p-6 rounded-sm hover:border-foreground/30 transition-all duration-300"
          >
            {/* Icon */}
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {tool.icon}
            </div>

            {/* Tool Name */}
            <h3 className="text-sm font-semibold text-foreground mb-1">
              {tool.name}
            </h3>

            {/* Category */}
            <p className="text-xs text-muted-foreground mb-3">
              {tool.category}
            </p>

            {/* Proficiency Bar */}
            <div className="relative h-1 bg-border rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${tool.proficiency}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.05 + 0.3, ease: "easeOut" }}
                className="h-full bg-foreground rounded-full"
              />
            </div>

            {/* Proficiency Percentage (on hover) */}
            <div className="absolute top-2 right-2 text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tool.proficiency}%
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToolsStack;
