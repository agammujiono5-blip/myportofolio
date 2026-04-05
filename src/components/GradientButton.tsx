import { motion } from "motion/react";
import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  className?: string;
}

export function GradientButton({
  children,
  variant = "primary",
  onClick,
  className = ""
}: GradientButtonProps) {
  if (variant === "outline") {
    return (
      <motion.button
        onClick={onClick}
        className={`
          relative px-8 py-3 rounded-xl
          border-2 border-cyan-400/50
          text-cyan-300
          overflow-hidden
          transition-all duration-300
          hover:border-cyan-400
          hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
          ${className}
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`
        relative px-8 py-3 rounded-xl
        bg-gradient-to-r from-cyan-500 to-blue-500
        text-white
        overflow-hidden
        shadow-[0_0_20px_rgba(14,165,233,0.5)]
        transition-all duration-300
        hover:shadow-[0_0_30px_rgba(14,165,233,0.8)]
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 hover:opacity-100 transition-opacity" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
