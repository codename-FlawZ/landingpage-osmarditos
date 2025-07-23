'use client'
import { FaInstagram, FaTiktok, FaPhone } from "react-icons/fa";

export default function Footer() {
    return (
         <footer className="py-5 sm:px-10 px-5 bg-blue-950 text-neutral-300 shadow-xl">
      <div className="screen-max-width">
        <div className="bg-neutral-300 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs max-sm:text[0.6rem] cursor-default">Copyright @ 2025 Osmar Ditos</p>
          <div className="inline-flex text-center items-center justify-evenly gap-3 text-sm max-sm:hidden">
              <p className="footer-links">
                <a href="/contact"><FaInstagram /></a>
              </p>
              <span>|</span>
              <p className="footer-links">
                <a href="/men"><FaTiktok /></a>
              </p>
              <span>|</span>
              <p className="footer-links">
                <a href="">Contato</a>
              </p>
              <span>|</span>
              <p className="footer-links">
                <a href="">Garanta nosso Press Kit</a>
              </p>
          </div>
        </div>
        <p className="font-semibold text-gray text-xs cursor-default max-sm:text-[0.6rem]">2025 @ Project created by: Pedro H. Alexandre. All rights reserved.</p>
      </div>
    </footer>
    );
}