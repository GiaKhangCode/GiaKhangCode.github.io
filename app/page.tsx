import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import { About, Footer, Projects, Stats } from "@/components/Sections";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
