import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-xl
        bg-white/5 backdrop-blur-lg
        border border-white/10
        shadow-[0_0_20px_rgba(14,165,233,0.1)]
        ${hover ? "transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:scale-[1.02]" : ""}
        ${className}
      `}
      whileHover={hover ? { y: -5 } : {}}
    >
      {/* 🔥 FIX DISINI */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

      {/* Optional tapi lebih aman */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}