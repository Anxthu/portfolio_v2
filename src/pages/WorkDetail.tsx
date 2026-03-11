import { useParams, Navigate, Link } from "react-router-dom";
import { projects } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ReadingProgress from "@/components/ReadingProgress";

const WorkDetail = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === id);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

    // Update meta tags for SEO
    useEffect(() => {
        if (project) {
            document.title = `${project.title} - Ananthu | UI/UX Designer`;
            
            // Update meta description
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', project.description);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = project.description;
                document.head.appendChild(meta);
            }

            // Update Open Graph tags
            const updateOrCreateMeta = (property: string, content: string) => {
                let meta = document.querySelector(`meta[property="${property}"]`);
                if (meta) {
                    meta.setAttribute('content', content);
                } else {
                    meta = document.createElement('meta');
                    meta.setAttribute('property', property);
                    meta.setAttribute('content', content);
                    document.head.appendChild(meta);
                }
            };

            updateOrCreateMeta('og:title', `${project.title} - Ananthu`);
            updateOrCreateMeta('og:description', project.description);
            updateOrCreateMeta('og:image', project.image);
            updateOrCreateMeta('og:type', 'website');
        }

        // Cleanup - reset to default on unmount
        return () => {
            document.title = 'Ananthu | UI/UX Designer Portfolio';
        };
    }, [project]);

    if (!project) {
        return <Navigate to="/404" />;
    }

    // Find previous and next projects
    const currentIndex = projects.findIndex((p) => p.id === id);
    const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    return (
        <PageTransition>
            <ReadingProgress />
            <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background" ref={containerRef}>

                {/* Hero Area */}
                <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
                    <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    </motion.div>

                    <div className="absolute inset-0 flex flex-col justify-end section-padding pb-16">
                        <div className="overflow-hidden mb-4">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                className="text-5xl md:text-7xl lg:text-8xl font-heading font-[800] tracking-tight uppercase"
                            >
                                {project.title}
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                                className="text-lg md:text-xl text-muted-foreground uppercase tracking-widest"
                            >
                                {project.category}
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Content Area */}
                <section className="section-padding py-24 md:py-32">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                        {/* Meta Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:col-span-4 flex flex-col gap-8"
                        >
                            <div>
                                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Role</h3>
                                <p className="font-medium text-lg">{project.role}</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Client</h3>
                                <p className="font-medium text-lg">{project.client}</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Year</h3>
                                <p className="font-medium text-lg">{project.year}</p>
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="md:col-span-8 md:pl-12 lg:pl-24 flex flex-col gap-12"
                        >
                            {project.content && (
                                <h2 className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light text-foreground/90">
                                    {project.content}
                                </h2>
                            )}

                            {project.contentSections?.map((section, idx) => (
                                <div key={idx} className="flex flex-col gap-4">
                                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground mb-2">
                                        {section.title}
                                    </h3>
                                    {section.body.map((paragraph, pIdx) => (
                                        <p key={pIdx} className="text-xl md:text-2xl leading-relaxed font-light text-muted-foreground">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Process Section */}
                {project.processImages && (
                    <section className="section-padding pb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-heading uppercase mb-16"
                        >
                            Design Process
                        </motion.h2>

                        {/* Research & Insights */}
                        {project.processImages.research && project.processImages.research.length > 0 && (
                            <div className="mb-24 max-w-6xl mx-auto">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
                                    Research & Insights
                               </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {project.processImages.research.map((img, idx) => (
                                        <motion.img
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            src={img}
                                            alt={`Research ${idx + 1}`}
                                            className="w-full max-h-[60vh] object-contain shadow-xl bg-muted/20 p-2"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Wireframes */}
                        {project.processImages.wireframes && project.processImages.wireframes.length > 0 && (
                            <div className="mb-24 max-w-6xl mx-auto">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
                                    Wireframes & Concepts
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {project.processImages.wireframes.map((img, idx) => (
                                        <motion.img
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            src={img}
                                            alt={`Wireframe ${idx + 1}`}
                                            className="w-full max-h-[60vh] object-contain shadow-xl bg-muted/20 p-2"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Design System */}
                        {project.processImages.designSystem && project.processImages.designSystem.length > 0 && (
                            <div className="mb-24 max-w-6xl mx-auto">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
                                    Design System
                                </h3>
                                <div className="flex flex-col gap-12">
                                    {project.processImages.designSystem.map((img, idx) => (
                                        <motion.img
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            src={img}
                                            alt={`Design System ${idx + 1}`}
                                            className="w-full max-h-[80vh] object-contain shadow-2xl bg-muted/10 p-4"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Iterations */}
                        {project.processImages.iterations && project.processImages.iterations.length > 0 && (
                            <div className="mb-24 max-w-6xl mx-auto">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
                                    Iterations & Refinements
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {project.processImages.iterations.map((img, idx) => (
                                        <motion.img
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            src={img}
                                            alt={`Iteration ${idx + 1}`}
                                            className="w-full max-h-[60vh] object-contain shadow-xl bg-muted/20 p-2"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>
                )}

                {/* Final Designs Gallery */}
                <section className="section-padding pb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-heading uppercase mb-16 text-center"
                    >
                        Final Designs
                    </motion.h2>
                    <div className="flex flex-col gap-12 md:gap-24 max-w-7xl mx-auto">
                        {project.images?.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full relative aspect-auto flex justify-center"
                            >
                                <img
                                    src={img}
                                    alt={`${project.title} detail ${idx + 1}`}
                                    className="w-full max-h-[85vh] object-contain shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] bg-card/30"
                                />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Previous/Next Navigation */}
                <section className="section-padding pb-24 border-t border-border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
                        {/* Previous Project */}
                        {previousProject ? (
                            <Link
                                to={`/works/${previousProject.id}`}
                                className="group relative aspect-[4/3] overflow-hidden rounded-sm"
                            >
                                <img
                                    src={previousProject.image}
                                    alt={previousProject.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
                                    <div className="flex items-center gap-2 text-muted-foreground mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ArrowLeft className="w-4 h-4" />
                                        <span className="text-xs uppercase tracking-wider">Previous</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-foreground">{previousProject.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{previousProject.category}</p>
                                </div>
                            </Link>
                        ) : (
                            <div className="aspect-[4/3] bg-accent/10 rounded-sm flex items-center justify-center">
                                <p className="text-muted-foreground text-sm">No previous project</p>
                            </div>
                        )}

                        {/* Next Project */}
                        {nextProject ? (
                            <Link
                                to={`/works/${nextProject.id}`}
                                className="group relative aspect-[4/3] overflow-hidden rounded-sm"
                            >
                                <img
                                    src={nextProject.image}
                                    alt={nextProject.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex flex-col justify-center items-end p-8 text-right">
                                    <div className="flex items-center gap-2 text-muted-foreground mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-xs uppercase tracking-wider">Next</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-foreground">{nextProject.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{nextProject.category}</p>
                                </div>
                            </Link>
                        ) : (
                            <div className="aspect-[4/3] bg-accent/10 rounded-sm flex items-center justify-center">
                                <p className="text-muted-foreground text-sm">No next project</p>
                            </div>
                        )}
                    </div>
                </section>

                <Footer />
            </div>
        </PageTransition>
    );
};

export default WorkDetail;
