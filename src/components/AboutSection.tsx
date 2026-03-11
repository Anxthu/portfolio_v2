import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const onlineLinks = [
  { label: "Email", value: "ananthupublications@gmail.com", link: "mailto:ananthupublications@gmail.com", text: "Email ↗" },
  { label: "LinkedIn", value: "LinkedIn", link: "https://www.linkedin.com/in/ananthapadmanabhan-nair/", text: "Connect ↗" },
  { label: "Twitter", value: "Twitter", link: "https://x.com/ux_ananthu", text: "Follow ↗" },
  { label: "Instagram", value: "Instagram", link: "https://www.instagram.com/ux.ananthu/", text: "Follow ↗" },
];

const extras = [
  { label: "Works", link: "/works", text: "Link ↗" },
  { label: "Archives", link: "/archives", text: "Link ↗", isExternal: true },
  { label: "Blog", link: "/blog", text: "Link ↗", isExternal: true },
  { label: "Contact", link: "/contact", text: "Link ↗" },
  { label: "Resume", link: "/resume", text: "Link ↗", isExternal: true },
  { label: "Portfolio Booklet", link: "/booklet", text: "Link ↗", isExternal: true },
];

const listItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 }
};

const AboutSection = () => {
  return (
    <section className="section-padding py-24 md:py-32 bg-transparent text-white" style={{ fontFamily: 'Geist, sans-serif' }}>

      {/* Top Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center mb-20 md:mb-32"
      >
        <span className="text-sm tracking-wide text-white/80">Inside my little life</span>
      </motion.div>

      <div className="max-w-4xl mx-auto flex flex-col gap-24 md:gap-32">

        {/* About Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          <div className="w-full md:w-24 flex-shrink-0">
            <span className="text-sm font-medium text-white/90">About</span>
          </div>
          <div className="flex-grow flex flex-col gap-6 text-[15px] leading-relaxed text-white/80 font-normal md:max-w-lg">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={listItemVariants}>
              I first stumbled into design observing my father, an artist and designer whose mastery of Photoshop and illustrator became my earliest visual education. Growing up, our discussions on lighting and framing shaped how I viewed the world. At 17, I started tinkering with those same tools between school assignments.
            </motion.p>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} variants={listItemVariants}>
              My drive, however, extends beyond the canvas. I started playing basketball and I have participated in multiple All Kerala and All India tournaments—an experience that ingrained in me a deep sense of discipline, teamwork, and a relentless pursuit of goals. Born in Kerala, I later moved to Bangalore to pursue a B.Tech degree. Even while studying engineering, that quiet, persistent pull toward design never faded; it simply waited for its moment.
            </motion.p>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} variants={listItemVariants}>
              I am currently in my 3rd year of studies. Beyond the daily grind, I am a devoted automotive enthusiast. When I'm not studying or designing interfaces, I spend my time immersed in video editing and photography—my second greatest passions. Exploring these diverse creative avenues continuously fuels my primary design work, allowing me to approach problems with a multifaceted and refined perspective.
            </motion.p>

            {/* Image centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 mb-4 w-full overflow-hidden rounded-md"
            >
              <img
                src="/2R7A2720.JPG"
                alt="Portrait"
                className="w-full h-auto object-cover object-center mx-auto filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>



        {/* Online Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          <div className="w-full md:w-24 flex-shrink-0">
            <span className="text-sm font-medium text-white/90">Online</span>
          </div>
          <div className="flex-grow flex flex-col gap-4 text-sm text-white/80 md:max-w-lg">
            {onlineLinks.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} variants={listItemVariants}
                className="flex items-center gap-4 w-full"
              >
                <span className="whitespace-nowrap">{item.value}</span>
                <div className="flex-grow border-b border-white/20"></div>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap hover:text-white transition-colors border-b border-transparent hover:border-white/40 pb-0.5">
                  {item.text}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Where Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          <div className="w-full md:w-24 flex-shrink-0">
            <span className="text-sm font-medium text-white/90">Where</span>
          </div>
          <div className="flex-grow flex flex-col text-sm text-white/80 md:max-w-lg">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }} variants={listItemVariants}
              className="w-full rounded-md overflow-hidden mb-3"
            >
              <img
                src="/Frame 11.png"
                alt="Bengaluru"
                className="w-full h-64 md:h-80 object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="text-right text-xs opacity-50"
            >
              Bengaluru, India
            </motion.span>
          </div>
        </div>

        {/* Extras Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          <div className="w-full md:w-24 flex-shrink-0">
            <span className="text-sm font-medium text-white/90">Extras</span>
          </div>
          <div className="flex-grow flex flex-col gap-4 text-sm text-white/80 md:max-w-lg">
            {extras.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} variants={listItemVariants}
                className="flex items-center gap-4 w-full"
              >
                <span className="whitespace-nowrap">{item.label}</span>
                <div className="flex-grow border-b border-white/20"></div>
                {item.isExternal ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap hover:text-white transition-colors border-b border-transparent hover:border-white/40 pb-0.5"
                  >
                    {item.text}
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    className="whitespace-nowrap hover:text-white transition-colors border-b border-transparent hover:border-white/40 pb-0.5"
                  >
                    {item.text}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
