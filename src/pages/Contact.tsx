import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import RippleButton from "@/components/RippleButton";
import { useSoundEffects } from "@/hooks/useSoundEffects";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { playClickSound, playSuccessSound } = useSoundEffects();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      playSuccessSound();
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 section-padding pt-32 pb-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 uppercase font-heading tracking-tight">
                LET'S WORK TOGETHER
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Have a project in mind? I'd love to hear about it. Drop me a message and let's create something beautiful together.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <RippleButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-foreground text-background font-semibold rounded-sm hover:bg-foreground/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : submitStatus === "success" ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </RippleButton>

                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-green-500 text-center"
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.p>
                )}
              </motion.form>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Email
                  </h3>
                  <a
                    href="mailto:ananthupublications@gmail.com"
                    className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                  >
                    ananthupublications@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Location
                  </h3>
                  <p className="text-xl font-medium text-foreground">
                    Bangalore, India
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Social
                  </h3>
                  <div className="flex flex-col gap-3">
                    {[
                      { name: "Instagram", url: "https://www.instagram.com/ux.ananthu/" },
                      { name: "X (Twitter)", url: "https://x.com/ux_ananthu" },
                      { name: "LinkedIn", url: "https://www.linkedin.com/in/ananthapadmanabhan-nair/" },
                      { name: "Dribbble", url: "https://dribbble.com/uxananthu" },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors inline-block"
                      >
                        {social.name} →
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
