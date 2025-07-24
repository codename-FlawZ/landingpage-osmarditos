'use client'
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function About() {
    return(
        <section className="container w-full h-screen bg-neutral-200">
          {/* Desktop */}
            <div className="max-sm:hidden max-w-7xl mx-auto px-8 text-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div className="flex flex-col order-2 lg:order-1">
            <div className="aspect-[6/4] relative mt-18 overflow-hidden">
              <Image
                src="/images/About-image.jpg"
                alt="Foto da banda"
                fill
                className="object-cover bg-center shadow-xl"
                priority
              />
            </div>
            <p className="text-center text-sm">Osmar Ditos: três cabra bão que misturam country,bluegrass e rock pra sacudir até espantalho no milharal.</p>
          </div>
          <div className="order-1 lg:order-2 lg:pt-16">
            <div className="mb-3">
              <h1 className="text-6xl lg:text-7xl font-alfa text-shadow-2xl uppercase tracking-wide text-orange-950">
                Sobre Nós
              </h1>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-thin tracking-tight">
                OSMAR DITOS
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed max-w-lg">
              <p>
                Osmar Ditos é a nova cara do punk roça: uma mistura explosiva de bluegrass, country e rock nacional. No repertório, versões ousadas de lendas como Elvis Presley, Lulu Santos e Roberto Carlos. Tradição e rebeldia no mesmo palco.
              </p>
              <div className="inline-flex flex-row items-center justify-evenly gap-5">
                <div className="inline-flex flex-row items-center gap-5">
                <div className="inline-flex items-center rounded-full bg-neutral-950 text-neutral-100 p-4 text-4xl shadow-xl">
                  <FaInstagram />
                </div>
                <p className="text-sm">37 Mil seguidores no Instagram.</p>
              </div>
              <div className="inline-flex flex-row items-center gap-3">
                <div className="inline-flex items-center rounded-full bg-neutral-950 text-neutral-100 p-4 text-4xl shadow-xl">
                  <FaTiktok />
                </div>
                <p className="text-sm">14.8 Mil seguidores no TikTok.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>
    );
}