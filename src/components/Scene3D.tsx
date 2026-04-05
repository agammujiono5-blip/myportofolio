import { motion } from "motion/react";

export function Scene3D() {
  return (
    <div className="w-full h-full flex items-center justify-center perspective-[1000px]">
      {/* Floating Cube */}
      <motion.div
        className="absolute left-[10%] top-[20%]"
        animate={{
          y: [0, -20, 0],
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="w-24 h-24 relative" style={{ transformStyle: "preserve-3d" }}>
          {/* Cube faces */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 backdrop-blur-sm border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.4)]" style={{ transform: "translateZ(48px)" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 backdrop-blur-sm border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.4)]" style={{ transform: "translateZ(-48px) rotateY(180deg)" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 backdrop-blur-sm border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.4)]" style={{ transform: "rotateY(90deg) translateZ(48px)" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 backdrop-blur-sm border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.4)]" style={{ transform: "rotateY(-90deg) translateZ(48px)" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 backdrop-blur-sm border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.4)]" style={{ transform: "rotateX(90deg) translateZ(48px)" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 backdrop-blur-sm border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.4)]" style={{ transform: "rotateX(-90deg) translateZ(48px)" }} />
        </div>
      </motion.div>

      {/* Floating Sphere */}
      <motion.div
        className="absolute right-[15%] top-[30%]"
        animate={{
          y: [0, 30, 0],
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400/50 to-blue-500/50 backdrop-blur-sm border border-cyan-300/40 shadow-[0_0_40px_rgba(34,211,238,0.5),inset_0_0_30px_rgba(34,211,238,0.3)]" />
      </motion.div>

      {/* Floating Torus/Ring */}
      <motion.div
        className="absolute left-[40%] bottom-[25%]"
        animate={{
          y: [0, -25, 0],
          rotateX: [0, 360],
          rotateZ: [0, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-8 border-purple-500/50 shadow-[0_0_35px_rgba(139,92,246,0.5)]" />
          <div className="absolute inset-2 rounded-full border-4 border-purple-400/40 shadow-[inset_0_0_20px_rgba(139,92,246,0.4)]" />
        </div>
      </motion.div>

      {/* Additional floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-cyan-400/60 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
        />
      ))}
    </div>
  );
}
