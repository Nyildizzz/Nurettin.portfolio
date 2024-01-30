import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HireMe from "@/components/HireMe";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import About from "@/components/About";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
    <Navbar />
    <HireMe />
    <Hero />
    <Projects />
    <Technologies />
    <About />
    <Footer />
    </>
  );
}
