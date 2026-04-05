import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { Code2, Server, Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Three.js", level: 85 },
      ],
    },
    {
      icon: Server,
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: [
        { name: "Git", level: 93 },
        { name: "Docker", level: 78 },
        { name: "Figma", level: 87 },
        { name: "VS Code", level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2 }}
                >
                  <GlassCard className="p-8 h-full">
                    <div className="space-y-6">
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                          <Icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h3 className="text-2xl text-white">{category.title}</h3>
                      </div>

                      {/* Skills */}
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300 text-sm">{skill.name}</span>
                              <span className="text-cyan-400 text-sm">{skill.level}%</span>
                            </div>

                            {/* Progress Bar */}
                            <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                                  duration: 1,
                                  ease: "easeOut",
                                }}
                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
