import { motion } from "motion/react";
import { Download } from "lucide-react";
import { GradientButton } from "./GradientButton";

export function Navbar() {
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-slate-950/40 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(14,165,233,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
          <div className="relative px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.div>

            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* Download CV Button */}
            <GradientButton className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </GradientButton>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
