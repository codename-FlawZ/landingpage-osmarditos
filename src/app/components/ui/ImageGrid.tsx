'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
    '/images/grid-img1.jpg',
    '/images/grid-img2.jpg',
    '/images/grid-img3.jpg',
    '/images/grid-img4.jpg',
    '/images/grid-img5.jpg',
]

export default function ImageGrid() {
    return(
        <section className="container relative w-full overflow-hidden py-16 bg-neutral-200">
      {/* Gradiente lateral esquerda */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-neutral-200 to-transparent z-10" />
      {/* Gradiente lateral direita */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-neutral-200 to-transparent z-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative flex gap-6 overflow-x-auto no-scrollbar px-8"
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`Image ${i + 1}`}
              width={256}
              height={256}
              className="h-64 w-64 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
    );
}