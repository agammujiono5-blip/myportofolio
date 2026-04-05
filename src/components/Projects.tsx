import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Platform e-commerce full-stack dengan fitur manajemen inventaris secara real-time, sistem pembayaran yang aman, serta dashboard admin yang intuitif dan mudah digunakan.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Platform analitik canggih dengan insight berbasis AI, visualisasi data real-time, serta analisis prediktif untuk membantu pengambilan keputusan bisnis.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Next.js", "TypeScript", "TensorFlow", "D3.js"],
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Social Media App",
      description: "MPlatform media sosial modern dengan fitur pesan real-time, berbagi media, serta kontrol privasi yang canggih untuk interaksi pengguna yang lebih aman dan nyaman.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase", "WebSocket", "Redux"],
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <GlassCard className="overflow-hidden group h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
