'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MessageCircle, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-50 text-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Get in Touch.</h2>
          <p className="text-lg text-zinc-600">We'd love to hear from you. Experience NEXDESK today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="h-full flex flex-col items-center text-center p-8 hover:border-black transition-colors">
              <div className="w-14 h-14 bg-zinc-100 rounded-full flex items-center justify-center text-black mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-zinc-600 mb-6 flex-grow">Speak directly with our team for inquiries and bookings.</p>
              <a href="tel:+919966998665" className="text-lg font-bold hover:text-accent-red transition-colors inline-block w-full py-3 bg-zinc-100 rounded-full">
                9966998665
              </a>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Card className="h-full flex flex-col items-center text-center p-8 hover:border-black transition-colors">
              <div className="w-14 h-14 bg-zinc-100 rounded-full flex items-center justify-center text-black mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-zinc-600 mb-6 flex-grow">Send us a message and we'll get back to you promptly.</p>
              <a href="mailto:info@nexdesk.in" className="text-lg font-bold hover:text-accent-red transition-colors inline-block w-full py-3 bg-zinc-100 rounded-full">
                info@nexdesk.in
              </a>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Card className="h-full flex flex-col items-center text-center p-8 hover:border-black transition-colors">
              <div className="w-14 h-14 bg-zinc-100 rounded-full flex items-center justify-center text-black mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Working Hours</h3>
              <p className="text-zinc-600 mb-6 flex-grow">Our facilities are open all day, every day for your convenience.</p>
              <div className="text-lg font-bold inline-block w-full py-3 bg-zinc-100 rounded-full">
                Open 24/7
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a 
            href="tel:+919966998665" 
            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-black text-white font-medium hover:bg-zinc-800 transition-colors gap-2 text-lg"
          >
            <Phone size={20} />
            Call Now
          </a>
          <a 
            href="https://wa.me/919966998665?text=Hi%20I%20want%20to%20schedule%20a%20visit%20to%20NEXDESK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition-colors gap-2 text-lg"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
          <a 
            href="https://maps.app.goo.gl/YWKwrymsDPceZRze7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-zinc-200 text-black font-medium hover:bg-zinc-100 transition-colors gap-2 text-lg"
          >
            <MapPin size={20} />
            Get Directions
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          <img 
            src="/nexdesk/images/waiting-chairs-CVuVAVi3.jpg.jpeg" 
            alt="NEXDESK Waiting Lounge" 
            className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-8 text-white z-10">
            <h3 className="text-2xl font-bold">Step into your new workspace.</h3>
            <p className="text-zinc-200">Our team is ready to welcome you.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
