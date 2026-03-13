import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { blogPosts } from "@/lib/blogData";

const Blog = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-black relative" style={{ fontFamily: 'Geist, sans-serif' }}>

        {/* Hero Section - Booklet Style */}
        <div className="w-full min-h-[60vh] md:min-h-[80vh] flex flex-col justify-between p-6 md:p-12 lg:p-20 relative">
          <div className="max-w-[1400px] mt-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#E52E2D] font-bold text-4xl md:text-6xl lg:text-[85px] leading-[0.95] tracking-tight"
            >
              Design insights, process, and thoughts from my journey as a UI/UX designer.
            </motion.h1>
          </div>
          <div className="w-full flex justify-end mt-20 pb-16 md:pb-10">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#E52E2D] font-bold text-xs md:text-sm tracking-tight"
            >
              Blog — Sharing knowledge and inspiration. © 2026
            </motion.p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="section-padding pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-square overflow-hidden mb-4 bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-wider text-black/50 font-bold">
                      {post.category}
                    </span>
                    <span className="text-xs text-black/50">•</span>
                    <span className="text-xs text-black/50">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-black mb-2 group-hover:text-[#E52E2D] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-black/70 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-sm text-black group-hover:translate-x-1 transition-transform inline-block">
                    Read more →
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;
