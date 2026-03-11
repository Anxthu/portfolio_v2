import { useState } from "react";
import { motion } from "framer-motion";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

const ImageWithLoader = ({ src, alt, className = "", loading = "lazy" }: ImageWithLoaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Skeleton Loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse">
          <div className="w-full h-full bg-gradient-to-r from-muted via-muted-foreground/10 to-muted animate-shimmer" />
        </div>
      )}

      {/* Actual Image */}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default ImageWithLoader;
