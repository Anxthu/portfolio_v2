import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { blogPosts } from "@/lib/blogData";

const Blog = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-black">

        <div className="section-padding pt-32 pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-[#E52E2D] mb-6 uppercase font-heading tracking-tight"
          >
            BLOG
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-black/60 text-lg mb-16"
          >
            Design insights, process, and thoughts
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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
                    <span className="text-xs uppercase tracking-wider text-black/50">
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
