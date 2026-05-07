"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      <div className="z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-emerald/80 mb-6"
        >
          Speak to Rise
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light"
        >
          Decoding environmental economics, climate finance, and the future of human society through cinematic storytelling.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#videos" className="px-8 py-4 bg-emerald hover:bg-emerald-dark text-background font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
            Watch Latest Video
          </a>
          <a href="#community" className="px-8 py-4 bg-transparent border border-gray-600 hover:border-emerald text-white font-semibold rounded-full transition-all duration-300">
            Suggest a Topic
          </a>
        </motion.div>
      </div>
    </section>
  );
}