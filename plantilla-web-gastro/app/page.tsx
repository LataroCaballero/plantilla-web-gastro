import { getBusinessData } from "./lib/getBusinessData";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Experience from "./components/Experience";

export default function Home() {
  const data = getBusinessData();

  return (
    <main style={{ backgroundColor: "#fff", color: data.primaryColor }}>
      <Loader colors={data} />
      <Navbar colors={data} />
      <Hero data={data.hero} colors={data} />
      <section id="about">
        <About data={data.about} colors={data} />
      </section>
      <section id="menu">
        <Menu data={data.menu} colors={data} />
      </section>
      <section id="experiencia">
        <Experience data={data.menu} colors={data} />
      </section>
      <Footer name={data.name} colors={data} data={data} />
    </main>
  );
}
