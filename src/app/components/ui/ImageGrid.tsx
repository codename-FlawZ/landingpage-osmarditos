'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  { src: '/images/grid-img1.jpg', alt: 'Grupo Osmar Ditos - 1' },
  { src: '/images/grid-img2.jpg', alt: 'Grupo Osmar Ditos - 2' },
  { src: '/images/grid-img3.jpg', alt: 'Grupo Osmar Ditos - 3' },
  { src: '/images/grid-img4.jpg', alt: 'Grupo Osmar Ditos - 4' },
  { src: '/images/grid-img5.jpg', alt: 'Grupo Osmar Ditos - 5' }
];

export default function ParallaxSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrolled = containerRef.current.scrollLeft;
      const itemWidth = 300;
      const gap = 32;
      const imageIndex = Math.round(scrolled / (itemWidth + gap));
      setScrollX(imageIndex);
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 md:px-16 bg-neutral-950 overflow-hidden">
      <motion.div
        className="w-full max-w-[1600px] flex flex-col md:flex-row items-center justify-between gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Texto à esquerda */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className='font-alfa uppercase tracking-wide text-4xl md:text-5xl text-orange-800'>Galeria de imagens</h1>
          <p className='font-light uppercase text-sm mt-3 text-neutral-300'>Veja algumas das nossas melhores fotos</p>
        </div>

        {/* Parallax Slider à direita */}
        <div className="relative w-full md:w-[55%] h-[380px] overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex h-full items-center gap-8 overflow-x-scroll no-scrollbar px-[10vw] snap-x snap-mandatory"
            onScroll={handleScroll}
            drag="x"
            dragConstraints={{ left: -9999, right: 0 }}
            whileTap={{ cursor: 'grabbing' }}
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="relative w-[300px] h-[300px] flex-shrink-0 overflow-hidden rounded-xl shadow-2xl snap-start cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 100 }}
                onClick={() => setSelectedImage(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 300px"
                  priority
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Contador de imagens */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white bg-neutral-950/80 px-4 py-1 rounded-full text-sm tracking-wider font-semibold shadow-md z-10">
            {scrollX + 1} / {images.length}
          </div>

          {/* Fades laterais */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none z-10" />
        </div>
      </motion.div>

      {/* Modal de Imagem */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative mt-10 w-full h-[70vh] max-w-5xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={selectedImage}
                alt="Imagem Ampliada"
                fill
                className="object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}