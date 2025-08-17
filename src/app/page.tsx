import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      
      <SectionTitle
        preTitle="Filosofía SYNCRO"
        title="IA FIRST - DATA FIRST - CLIENTE FIRST"
      >
        Nuestra metodología se basa en tres pilares fundamentales: 
        primero la inteligencia artificial para optimizar procesos, 
        luego los datos para tomar decisiones precisas, y siempre 
        el cliente como centro de cada solución que desarrollamos.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Casos de Éxito"
        title="Cómo transformamos empresas con IA"
      >
        Descubre cómo nuestras soluciones de inteligencia artificial 
        han revolucionado procesos empresariales, automatizado tareas 
        y generado resultados medibles en tiempo real.
      </SectionTitle>

      <Video videoId="umTjswDOpA4" />

      <SectionTitle
        preTitle="Testimonios"
        title="Lo que dicen nuestros clientes"
      >
        La confianza de nuestros clientes es nuestro mayor activo. 
        Conoce las experiencias de empresas que ya transformaron 
        sus procesos con nuestras soluciones de IA.
      </SectionTitle>

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
