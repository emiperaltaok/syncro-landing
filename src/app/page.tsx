import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
            
      <Benefits data={benefitOne} />
      
      <SectionTitle
        preTitle=""
        title="Grandes marcas ya están automatizando con WhatsApp"
      >
        Casos reales de implementación y resultados concretos.         
        
      </SectionTitle>

      <Video videoId="umTjswDOpA4" />
      
      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Preguntas Frecuentes">
        Resolvemos las dudas más comunes sobre nuestros servicios 
        de inteligencia artificial, automatización y análisis de datos 
        para ayudarte a tomar la mejor decisión.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
