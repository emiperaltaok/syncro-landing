"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = const faqdata = [
  {
    question: "¿Cuánto tiempo toma implementar una solución de IA?",
    answer: "Dependiendo de la complejidad, nuestras implementaciones van desde 2-3 semanas para automatizaciones simples hasta 2-3 meses para proyectos integrales de IA. Siempre definimos plazos claros desde el inicio del proyecto.",
  },
  {
    question: "¿Necesito conocimientos técnicos para usar las soluciones?",
    answer: "No. Diseñamos todas nuestras soluciones para que sean intuitivas y fáciles de usar, sin necesidad de conocimientos técnicos avanzados. Incluimos capacitación completa para tu equipo.",
  },
  {
    question: "¿Qué pasa si mi empresa es pequeña?",
    answer: "Trabajamos con empresas de todos los tamaños. Adaptamos nuestras soluciones al presupuesto y escala de cada cliente. Tenemos opciones flexibles que se ajustan a PyMEs y startups.",
  },
  {
    question: "¿Ofrecen soporte post-implementación?",
    answer: "Sí. Incluimos capacitación del equipo, documentación completa y soporte técnico para garantizar el éxito de la implementación. También ofrecemos planes de mantenimiento y actualización.",
  },
  {
    question: "¿Cómo miden el éxito de los proyectos?",
    answer: "Definimos KPIs específicos desde el inicio y proporcionamos reportes regulares que muestran el impacto real en tu negocio: ahorro de tiempo, reducción de costos, aumento de eficiencia, etc.",
  },
  {
    question: "¿Trabajan solo con empresas grandes?",
    answer: "No, nuestro enfoque B2B incluye desde startups hasta empresas consolidadas. Lo importante es que tengas la visión de transformar tu negocio con tecnología inteligente.",
  },
];
