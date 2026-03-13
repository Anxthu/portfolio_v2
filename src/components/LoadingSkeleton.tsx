import { motion } from "framer-motion";

interface LoadingSkeletonProps {
  variant?: "card" | "text" | "image" | "folder";
  count?: number;
}

const LoadingSkeleton = ({ variant = "card", count = 1 }: LoadingSkeletonProps) => {
  const shimmer = {
    animate: {
      backgroundPosition: ["200% 0", "-200% 0"],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  };

  const skeletonBase = "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]";

  const renderSkeleton = () => {
    switch (variant) {
      case "card":
        return (
          <div className="space-y-4">
            <motion.div
              {...shimmer}
              className={`${skeletonBase} h-64 rounded-lg`}
            />
            <motion.div
              {...shimmer}
              className={`${skeletonBase} h-6 w-3/4 rounded`}
            />
            <motion.div
              {...shimmer}
              className={`${skeletonBase} h-4 w-1/2 rounded`}
            />
          </div>
        );

      case "text":
        return (
          <div className="space-y-3">
            <motion.div
              {...shimmer}
              className={`${skeletonBase} h-4 w-full rounded`}
            />
            <motion.div
              {...shimmer}
              className={`${skeletonBase} h-4 w-5/6 rounded`}
            />
            <motion.div
              {...shimmer}
              className={`${skeletonBase} h-4 w-4/6 rounded`}
            />
          </div>
        );

      case "image":
        return (
          <motion.div
            {...shimmer}
            className={`${skeletonBase} aspect-video rounded-lg`}
          />
        );

      case "folder":
        return (
          <div className="relative w-full max-w-[320px] h-[240px]">
            <motion.div
              {...shimmer}
              className={`${skeletonBase} w-full h-full rounded-xl`}
            />
            <motion.div
              {...shimmer}
              className={`${skeletonBase} absolute -top-10 left-4 w-40 h-10 rounded-t-xl`}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
    </>
  );
};

export default LoadingSkeleton;
