import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Noticias from "@/components/Noticias/Noticias";
import Secciones from "@/components/Secciones/Secciones";
import Hero from "@/components/Section/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Secciones />
      <Noticias />
      <Banner />
      <Footer />
    </>
  );
}
