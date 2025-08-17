import React from "react";
import { Container } from "@/components/Container";

export const Testimonials = () => {
  return (
    <Container>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
          Los 3 Pilares de SYNCRO
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-500 dark:text-gray-300">
          Nuestra filosofía en acción: cómo trabajamos para transformar tu negocio con inteligencia artificial
        </p>
      </div>

      {/* Grid de los 3 pilares */}
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 mb-16">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-8 rounded-2xl py-8 dark:bg-trueGray-800">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                IA FIRST
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Implementamos <Mark>inteligencia artificial</Mark> desde el primer día para automatizar procesos y optimizar tu operación antes de pensar en soluciones tradicionales.
              </p>
            </div>
            <div className="flex items-center mt-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">IA</span>
              </div>
              <div className="ml-4">
                <div className="text-lg font-medium text-gray-800 dark:text-white">Inteligencia Artificial</div>
                <div className="text-gray-600 dark:text-gray-400">Automatización inteligente</div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-8 rounded-2xl py-8 dark:bg-trueGray-800">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                DATA FIRST
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Analizamos tus <Mark>datos existentes</Mark> para tomar decisiones basadas en información real, no en suposiciones o intuición.
              </p>
            </div>
            <div className="flex items-center mt-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">DA</span>
              </div>
              <div className="ml-4">
                <div className="text-lg font-medium text-gray-800 dark:text-white">Análisis de Datos</div>
                <div className="text-gray-600 dark:text-gray-400">Decisiones informadas</div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-8 rounded-2xl py-8 dark:bg-trueGray-800">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                CLIENTE FIRST
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Diseñamos cada solución pensando en mejorar la <Mark>experiencia de tus clientes finales</Mark>, porque su satisfacción impulsa el crecimiento de tu negocio.
              </p>
            </div>
            <div className="flex items-center mt-6">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CL</span>
              </div>
              <div className="ml-4">
                <div className="text-lg font-medium text-gray-800 dark:text-white">Enfoque Cliente</div>
                <div className="text-gray-600 dark:text-gray-400">Experiencia optimizada</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          ¿Tu empresa será la próxima en transformarse?
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          No te quedes atrás. Implementa IA y automatización en tu negocio hoy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Agenda tu consulta gratuita
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 text-lg font-medium text-center text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-trueGray-700 dark:text-gray-300 dark:hover:bg-trueGray-600"
          >
            Ver nuestros servicios
          </a>
        </div>
      </div>
    </Container>
  );
};

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}