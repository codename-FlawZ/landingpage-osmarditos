import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import PressKit from "./components/sections/PressKit";
import Viral from "./components/sections/Viral";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Viral />
      <PressKit />
      <Contact />
      <Footer />
    </main>
  );
}
