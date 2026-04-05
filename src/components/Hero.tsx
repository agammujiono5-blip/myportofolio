import { motion } from "motion/react";
import { GradientButton } from "./GradientButton";
import { GlassCard } from "./GlassCard";
import { Scene3D } from "./Scene3D";
import { Code2, Trophy, Target } from "lucide-react";

export function Hero() {
  const stats = [
    { icon: Trophy, label: "1+ Years", color: "cyan" },
    { icon: Target, label: "20+ Projects", color: "blue" },
    { icon: Code2, label: "90% Quality", color: "purple" },
  ];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400 text-lg"
            >
              Hi, Aku
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent leading-tight"
            >
              Muhammad Agam Mudjiono
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl text-gray-300"
            >
              Web Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg leading-relaxed max-w-xl"
            >
              Saya mengembangkan website yang tidak hanya terlihat menarik, tetapi juga cepat, responsif, dan mudah digunakan oleh semua orang.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <GradientButton onClick={() => scrollToSection("projects")}>
                View Projects
              </GradientButton>
              <GradientButton variant="outline" onClick={() => scrollToSection("contact")}>
                Contact Me
              </GradientButton>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Scene & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] space-y-6"
          >
            {/* Code Card */}
            <GlassCard className="p-6 relative z-10" hover={false}>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Code2 className="w-5 h-5" />
                  <span className="text-sm">Portfolio.tsx</span>
                </div>
                <div className="font-mono text-sm space-y-2 text-gray-300">
                  <div><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = {"{"}</div>
                  <div className="pl-4"><span className="text-cyan-300">name:</span> <span className="text-green-400">"Muhammad Agam"</span>,</div>
                  <div className="pl-4"><span className="text-cyan-300">skills:</span> [<span className="text-green-400">"React"</span>, <span className="text-green-400">"TypeScript"</span>],</div>
                  <div className="pl-4"><span className="text-cyan-300">passion:</span> <span className="text-green-400">"Building Amazing Web Apps"</span></div>
                  <div>{"}"}</div>
                </div>
                <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
              </div>
            </GlassCard>

            {/* 3D Scene */}
            <div className="absolute top-0 right-0 w-full h-full opacity-40 pointer-events-none">
              <Scene3D />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 relative z-10">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <GlassCard className="p-4 text-center">
                      <Icon className={`w-6 h-6 mx-auto mb-2 text-${stat.color}-400`} />
                      <p className="text-sm text-gray-300">{stat.label}</p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
