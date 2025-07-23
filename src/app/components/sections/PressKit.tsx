'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PressKit() {
  return (
    <section className="w-full px-6 py-20 bg-neutral-950 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-5xl sm:text-5xl font-alfa text-orange-800 uppercase mb-4 leading-wide">
          Baixe o <br /> Press & Mídia Kit
        </h2>
        <p className="text-neutral-200 text-lg mb-10">
          Faça o download do nosso press kit e mídia kit oficial.
        </p>

        {/* Mockup Único */}
        <div className="w-full flex justify-center">
          <Image
            src="/images/mockup-presskit.png" 
            alt="Mockup Press Kit"
            width={1000}
            height={800}
            className="w-full max-w-4xl h-auto rounded-xl shadow-xl"
          />
        </div>

        {/* Botão */}
        <motion.a
          whileTap={{ scale: 0.95 }}
          href="/docs/presskit.pdf" 
          download
          className="inline-block mt-12 px-6 py-3 text-lg font-semibold bg-neutral-200 text-neutral-950 rounded-full shadow-md hover:bg-neutral-600 hover:text-neutral-200 transition-colors ease-in-out"
        >
          Baixar Press & Mídia Kit
        </motion.a>
      </motion.div>
    </section>
  );
}
