'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { src: '/images/private-cabin1.png', alt: 'Premium Private Cabin', span: 'md:col-span-2 md:row-span-2' },
  { src: '/images/reception.png', alt: 'Reception & Lobby', span: 'md:col-span-1 md:row-span-1' },
  { src: '/images/open-desks1.png', alt: 'Open Desks Area', span: 'md:col-span-1 md:row-span-1' },
  { src: '/images/team-officee.png', alt: 'Dedicated Team Office', span: 'md:col-span-1 md:row-span-1' },
  { src: '/images/meeting-room1.png', alt: 'Conference Room', span: 'md:col-span-1 md:row-span-1' },
  { src: '/images/varanda.png', alt: 'Outdoor Veranda', span: 'md:col-span-2 md:row-span-1' },
  { src: '/images/waiting-charis-new.png', alt: 'Waiting Lounge', span: 'md:col-span-1 md:row-span-1' },
  { src: '/images/pantry2.png', alt: 'Modern Pantry', span: 'md:col-span-1 md:row-span-1' },
  { src: '/images/gallery.png', alt: 'NEXDESK Community Space', span: 'md:col-span-2 md:row-span-2' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Experience NEXDESK.</h2>
          <p className="text-lg text-zinc-600">A look inside our premium spaces.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 text-white font-bold text-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
