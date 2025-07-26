'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const images = [
  { src: "/images/grid-img1.jpg", alt: "Imagem 1" },
  { src: "/images/grid-img2.jpg", alt: "Imagem 2" },
  { src: "/images/grid-img3.jpg", alt: "Imagem 3" },
  { src: "/images/grid-img4.jpg", alt: "Imagem 4" },
  { src: "/images/grid-img5.jpg", alt: "Imagem 5" },
];

export default function ImageGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visibleIndex, setVisibleIndex] = useState(1);

  const totalWidth = (images.length * 300) + (images.length - 1) * 48; // largura total em px
  const translateX = useTransform(scrollY, [0, 1200], [0, -totalWidth + window.innerWidth]);
  const xSmooth = useSpring(translateX, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-neutral-950">
      <div className="gap-8 text-center pt-30">
        <h1 className='font-alfa uppercase tracking-wide text-6xl text-orange-800'>Galeria de imagens</h1>
        <p className='font-light uppercase text-lg'>Veja alguma das nossas melhores fotos</p>
      </div>
      <div className="relative top-0 left-0  w-full h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="flex gap-12"
          style={{ x: xSmooth }}
        >
          {images.map((img, idx) => {
            const ref = useRef(null);
            const isIn = useInView(ref, { amount: 0.6 });

            useEffect(() => {
              if (isIn) setVisibleIndex(idx + 1);
            }, [isIn, idx]);

            const bgX = useTransform(scrollY, [0, 1200], [0, -60]);
            const bgSmooth = useSpring(bgX, { stiffness: 150, damping: 40 });

            return (
              <motion.div
                key={idx}
                ref={ref}
                className="relative w-[18rem] h-[24rem] bg-white rounded-xl shadow-xl overflow-hidden flex-shrink-0"
                initial={{ opacity: 0.7, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <motion.div
                  className="absolute w-full h-full bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${img.src})`,
                    x: bgSmooth,
                  }}
                  aria-label={img.alt}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="text-white text-sm font-medium bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm">
          {visibleIndex} / {images.length}
        </div>
      </div>
    </section>
  );
}
