'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons after scrolling past the hero section
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+919966998665"
            className="w-14 h-14 bg-zinc-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black transition-colors"
            title="Call Us"
          >
            <Phone size={24} />
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919966998665?text=Hi%20I%20want%20to%20schedule%20a%20visit%20to%20NEXDESK"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 transition-colors"
            title="WhatsApp Us"
          >
            <MessageCircle size={32} />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
