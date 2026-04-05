import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { Calendar, Briefcase, Users } from "lucide-react";

export function About() {
  const stats = [
    { icon: Calendar, value: "1+", label: "Years Experience" },
    { icon: Briefcase, value: "20+", label: "Projects Completed" },
    { icon: Users, value: "10+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-gray-300 leading-relaxed text-lg">
                  Saya adalah seorang web developer yang bersemangat sekaligus mahasiswa Teknologi Informasi di Universitas Negeri Yogyakarta (UNY), saat ini berada di semester 4. Saya memiliki minat yang kuat dalam membangun aplikasi web modern yang fungsional dan mudah digunakan. Perjalanan saya di dunia web development dimulai dari rasa ingin tahu tentang bagaimana sebuah website bekerja, dan kini berkembang menjadi proses belajar yang berkelanjutan.

                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-gray-300 leading-relaxed text-lg">
                  Saat ini saya sedang mempelajari dan menggunakan berbagai teknologi web modern seperti React, TypeScript, dan Next.js. Saya berfokus pada penulisan kode yang bersih, terstruktur, dan mudah dipelihara, serta terus meningkatkan kemampuan dengan mengikuti tren industri dan praktik terbaik terbaru.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-gray-300 leading-relaxed text-lg">
                  Di luar aktivitas coding, saya senang mengeksplorasi teknologi baru, mengerjakan proyek pribadi, dan memperluas pengetahuan di bidang pengembangan web.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-3 gap-4 pt-8"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <GlassCard key={stat.label} className="p-4 text-center">
                      <Icon className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                      <p className="text-2xl text-white mb-1">{stat.value}</p>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                    </GlassCard>
                  );
                })}
              </motion.div>
            </div>

            {/* Right Content - Diamond Shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative h-[500px] flex items-center justify-center"
            >
              <div className="relative w-80 h-80">
                {/* Rotating Diamond */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="w-full h-full rotate-45 relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 shadow-[0_0_50px_rgba(34,211,238,0.3)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent" />
                  </div>
                </motion.div>

                {/* Inner Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-30" />
                </div>

                {/* Orbiting Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0"
                  >
                    <div
                      className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) translateY(-${160 + i * 10}px)`,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
