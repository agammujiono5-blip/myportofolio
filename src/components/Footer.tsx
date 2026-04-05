import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Muhammad Agam Mudjiono
          </div>

          <div className="text-gray-400 text-sm">
            © 2026 All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
