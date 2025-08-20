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

const faqdata = [
  {
    question: "¿Para qué sirve el análisis de datos?",
    answer: "Si registrás tus ventas o actividad en un sistema, ahí tenés una mina de oro. El análisis de datos te ayuda a detectar patrones de consumo y tomar decisiones más inteligentes para tu negocio.",
  },
  {
    question: "¿Qué hacemos con IA?",
    answer: "La Inteligencia Artificial puede analizar tus datos, automatizar respuestas y sugerir acciones para vender más, mejorar la experiencia de tus clientes y ahorrar tiempo.",
  },  
  {
    question: "¿Para qué sirve una automatización?",
    answer: "Si repetís tareas todos los días, una automatización se encarga de hacerlas por vos. Esto ahorra tiempo y dinero, y te permite enfocarte en lo que realmente importa: hacer crecer tu negocio.",
  },
  {
   question: "¿Quiénes pueden contratar Syncro?",
   answer: (
    <div className="space-y-2">
      <p><strong>Entretenimiento:</strong> bares, discotecas, eventos. Automatizaciones y análisis de datos.</p>
      <p><strong>Retail:</strong> supermercados, cadenas de bebidas, comercios grandes. Automatizaciones y análisis de datos.</p>
      <p><strong>Inmobiliaria:</strong> responder mensajes, agendar citas, dar cotizaciones.</p>
      <p><strong>Otras industrias:</strong> productos con IA para optimizar procesos y ventas.</p>
    </div>
   ),
  }

];
