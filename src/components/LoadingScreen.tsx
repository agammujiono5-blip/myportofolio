import { motion } from "framer-motion";

export function LoadingScreen() {
    return (
        <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
            <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px]" />

            {/* Logo / Text */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-white mb-6 z-10"
            >
                Agam Dev
            </motion.h1>

            {/* Spinner Modern */}
            <motion.div
                className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full z-10"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />

            {/* Loading Text */}
            <motion.p
                className="text-gray-400 mt-6 z-10"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                Loading portfolio...
            </motion.p>
        </div>
    );
}