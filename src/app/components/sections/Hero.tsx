'use client'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from "motion/react"; 

export default function Hero() {
  return (
    <section className="bg-[url(/images/Herobg.png)] bg-center relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/herovideo.mp4" type="video/mp4" />
        Seu navegador não suporta o video.
      </motion.video>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      {/* Desktop Content */}
      <div className="max-sm:hidden bg-neutral-950/60 p-10 rounded-2xl backdrop-blur-xs shadow-xl absolute left-[4.5%] top-1/2 transform -translate-y-1/2 max-w-lg text-center text-white flex flex-col justify-center gap-4 z-20">
        <h1 className="text-4xl text-orange-800 drop-shadow-md font-alfa uppercase tracking-wide">
         Raiz na sola,<br /> Rebeldia na alma
        </h1>
      <p>
       A banda de bluegrass que vem sendo pioneira no Brasil trazendo o estilo único do Punk roça está aqui.<br />
       Veja abaixo um pouco mais sobre a nossa história e entre em contato conosco.
      </p>
      <div className="flex gap-4 justify-center">
        <a
         href="#contato"
         className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-2 rounded-xl shadow-md transition-all"
        >
         Entre em contato
        </a>
        <a
         href="#sobre"
         className="border hover:bg-white hover:text-black text-white px-6 py-2 rounded-xl shadow-md transition-all"
        >
         Saiba mais
        </a>
      </div>
    </div>
      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <MdKeyboardDoubleArrowDown className="text-neutral-200 text-4xl max-sm:text-3xl animate-bounce" />
      </div>

      {/* Mobile Content */}
      <div className="md:hidden bg-black/10 p-6 rounded-xl backdrop-blur-sm shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md text-center text-white flex flex-col justify-center gap-4 z-20">
        <h1 className="text-2xl text-orange-950 drop-shadow-md font-alfa uppercase">
          Raiz na sola,<br /> Rebeldia na alma
        </h1>
        <p className="text-sm leading-relaxed">
          A banda de bluegrass que vem sendo pioneira no Brasil trazendo o estilo único do Punk Roça está aqui.<br />
          Veja abaixo um pouco mais sobre a nossa história e entre em contato conosco.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href="#contato"
            className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-2 rounded-xl shadow-md transition-all"
          >
            Entre em contato
          </a>
          <a
            href="#sobre"
            className="border border-white hover:bg-white hover:text-black text-white px-6 py-2 rounded-xl shadow-md transition-all"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}