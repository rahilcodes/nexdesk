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
          <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-light mb-16">
            NEXDESK is a premium coworking space strategically located at the bustling borders of Kondapur, Gachibowli, and Hi-Tech City in Hyderabad. Built for productivity, collaboration, and growth, it is the ideal ecosystem for freelancers, startups, and teams who demand an environment that matches their ambition.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/nexdesk/images/pantry2.png" 
                alt="Modern Pantry Area" 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/nexdesk/images/varanda.png" 
                alt="Outdoor Veranda" 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
