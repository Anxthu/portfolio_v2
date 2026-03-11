import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'ANANTHU_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageTransition>
      {/* White background for entire page */}
      <div className="min-h-screen bg-white">
        {/* Dark navbar on white background */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between section-padding py-5 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-900 hover:text-gray-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>BACK</span>
          </Link>
          
          <span className="text-sm font-semibold tracking-wide text-gray-900">
            ANANTHU© RESUME
          </span>

          <div className="w-20" />
        </nav>

        {/* Resume Content */}
        <div className="pt-24 pb-32 section-padding">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* PDF Embed */}
            <div className="relative bg-white shadow-2xl rounded-sm overflow-hidden">
              <iframe
                src="/resume.pdf"
                className="w-full h-[calc(100vh-8rem)] min-h-[800px]"
                title="Resume PDF"
              />
            </div>
          </motion.div>
        </div>

        {/* Frosted Glass Download Button - Fixed at bottom with blur effect */}
        <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
          {/* Bottom blur gradient */}
          <div className="h-32 bg-gradient-to-t from-white via-white/95 to-transparent" />
          
          {/* Download Button - no delay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto"
          >
            <button
              onClick={handleDownload}
              className="group relative px-8 py-4 bg-gray-900/10 backdrop-blur-xl border border-gray-900/20 rounded-full shadow-2xl hover:bg-gray-900/20 transition-all duration-300 flex items-center gap-3"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-900/0 via-gray-900/5 to-gray-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <Download className="w-5 h-5 text-gray-900 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-900 font-semibold text-sm uppercase tracking-wider">
                Download Resume
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;
