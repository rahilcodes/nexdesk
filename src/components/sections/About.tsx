'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            More than just a <span className="text-accent-red">Workspace.</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-light">
            NEXDESK is a premium coworking space located in Kondapur, built for productivity, collaboration, and growth. Ideal for freelancers, startups, and teams who demand an environment that matches their ambition.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
