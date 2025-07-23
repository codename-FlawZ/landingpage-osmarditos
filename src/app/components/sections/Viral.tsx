'use client';
import { motion } from "motion/react";
import { FaInstagram, FaTiktok, FaEye } from "react-icons/fa";

export default function Viral() {
  return (
    <section className="w-full min-h-screen bg-neutral-200 flex flex-col items-center justify-center px-6 py-12">
      {/* Título */}
      <div className="text-center mb-12">
        <h1 className="font-alfa font-bold text-5xl md:text-6xl text-black uppercase">
          Nosso vídeo mais visto
        </h1>
        <p className="uppercase text-sm text-neutral-700 mt-2">
          Veja abaixo nosso vídeo mais visto recentemente
        </p>
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-40 w-full max-w-6xl">
        {/* Texto e dados */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <div>
            <h2 className="font-alfa text-3xl md:text-4xl font-bold uppercase text-blue-950 leading-tight">
              Momento Bluegrass: <br /> Earl Scruggs
            </h2>
            <p className="uppercase text-sm text-neutral-700 mt-1">
              Foggy Mountain Breakdown
            </p>
            <button className="bg-neutral-950 shadow-2xl hover:bg-orange-800 cursor-pointer transition-colors ease-in-out duration-200 text-neutral-200 rounded-2xl p-4 text-xl mt-10">Assista agora</button>
          </div>

          {/* Métricas */}
          <div className="flex gap-6 mt-4">
            {/* TikTok */}
            <div className="flex items-center gap-3">
              <div className="p-4 bg-black text-white rounded-full text-2xl shadow-lg">
                <FaTiktok />
              </div>
              <p className="uppercase text-black font-semibold text-sm">
                1.2M visualizações no TikTok
              </p>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-3">
              <div className="p-4 bg-black text-white rounded-full text-2xl shadow-lg">
                <FaInstagram />
              </div>
              <p className="uppercase text-black font-semibold text-sm">
                12 mil visualizações no Instagram
              </p>
            </div>
          </div>
        </div>

{/* Mockup + vídeo embutido */}
<div className="relative w-[290px] md:w-[300px] aspect-[9/19.5] bg-neutral-950 rounded-[3.5rem]">
  {/* Área da tela interna do iPhone - fundo preto preenchendo a parte interna */}
  <div className="absolute top-[6.5%] left-[6.5%] w-[87%] h-[87%] bg-black rounded-[1.5rem] z-10 overflow-hidden">
    {/* Vídeo colado na moldura preta sem espaço */}
    <motion.video
      autoPlay
      loop
      muted
      playsInline
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      className="w-full h-full object-cover rounded-[1rem]"
    >
      <source src="/videos/ViralVideo.mp4" type="video/mp4" />
      Seu navegador não suporta o vídeo.
    </motion.video>

    {/* Contador DENTRO da tela */}
    <span className="absolute inline-flex flex-row gap-2 items-center bottom-2 left-3 p-2 bg-neutral-950 rounded-2xl text-white text-xs font-bold z-30 drop-shadow">
      <FaEye />1.2M
    </span>
  </div>

  {/* Mockup do iPhone por cima de tudo */}
  <img
    src="/images/Iphonemodel.png"
    alt="iPhone Mockup"
    className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none select-none"
  />
</div>
      </div>
    </section>
  );
}
