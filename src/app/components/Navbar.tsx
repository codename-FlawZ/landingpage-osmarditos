'use client'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  };

    return (
        <nav className="w-full fixed z-[999] top-0 bg-neutral-200 shadow-xl">
        {/* Desktop */}
          <div className="hidden md:flex items-center justify-between px-6 py-4 h-[80px]">
          {/* Nome à esquerda */}
            <div className="text-xl font-bold text-orange-950 tracking-wider font-alfa">
             OSMAR DITOS
            </div>
          {/* Logo central */}
          <div className="flex justify-center flex-1">
           <img
            src="/images/Logo.png"
            alt="Logo Osmar Ditos"
            className="h-20 w-20 rounded-full object-cover"
            />
          </div>
          {/* Links à direita */}
          <div className="flex justify-end items-center gap-4">
           <a href="#home" className="text-sm text-blue-900 hover:text-neutral-800 transition-colors duration-200">
            HOME
          </a>
          <a href="#sobre" className="text-sm text-blue-900 hover:text-neutral-800 transition-colors duration-200">
            SOBRE
          </a>
          <a href="#contato" className="text-sm text-blue-900 hover:text-neutral-800 transition-colors duration-200">
            CONTATO
          </a>
          <a href="#PressKit" className="p-2 px-3 bg-neutral-950 text-white hover:bg-orange-950 rounded-xl transition-colors duration-200">
            Nosso Press Kit
          </a>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between px-4 py-3 h-[70px]">
        <img
          src="/images/Logo.png"
          alt="Logo Osmar Ditos"
          className="h-16 w-16 rounded-full object-cover"
        />
        <button
          className="p-3 rounded-full text-neutral-900 active:text-orange-800 transition-colors duration-200"
          onClick={toggleMobileMenu}
          aria-label="Abrir menu"
        >
         <GiHamburgerMenu size={24} />
        </button>
      </div>
      {/* Overlay para fechar o menu quando clicar fora */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-neutral-950/50 backdrop-blur-xs z-[1000] cursor-pointer animate-fadeIn md:hidden" onClick={toggleMobileMenu}></div>
      )}
      {/* Barra lateral para o menu */}
      <nav className={`fixed top-0 w-60 h-95 rounded-l-xl bg-gray-100 shadow-lg z-[1002] pt-16 transition-all ease-in-out duration-150 md:hidden ${isMobileMenuOpen ? 'right-0' : '-right-64'}`}>
        <ul className="list-none p-0 m-0 text-orange-950">
          <li className="py-4 px-5 border-b font-alfa text-bold uppercase tracking-wider border-orange-950">Home</li>
          <li className="py-4 px-5 border-b font-alfa text-bold uppercase tracking-wider border-orange-950">Sobre</li>
          <li className="py-4 px-5 border-b font-alfa text-bold uppercase tracking-wide border-orange-950">Contato</li>
          <button className="my-4 mx-5 py-3 px-2 bg-orange-950 rounded-xl text-neutral-100">Garanta nosso Press Kit</button>
        </ul>
      </nav>
    </nav>
    );
}