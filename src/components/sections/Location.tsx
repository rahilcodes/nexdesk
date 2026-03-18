'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Visit Us in Kondapur.</h2>
          <p className="text-lg text-zinc-600">Prime location, directly behind AMB Mall.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch h-[500px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3 bg-zinc-50 rounded-3xl p-8 flex flex-col justify-center border border-zinc-200"
          >
            <div className="w-14 h-14 bg-accent-red/10 text-accent-red rounded-full flex items-center justify-center mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">NEXDESK Hub</h3>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              B-609, B Block,<br/> 
              Asian Suncity,<br/>
              Behind AMB Mall,<br/>
              Kondapur, Hyderabad 500084
            </p>
            <a 
              href="https://maps.app.goo.gl/YWKwrymsDPceZRze7" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-black text-white font-medium hover:bg-zinc-800 transition-colors w-full"
            >
              Get Directions
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-2/3 rounded-3xl overflow-hidden shadow-sm border border-zinc-200 h-full"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d307.95348964950676!2d78.36289135724608!3d17.458596923071777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sone9%20hyderabad!5e0!3m2!1sen!2sin!4v1773852154494!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
