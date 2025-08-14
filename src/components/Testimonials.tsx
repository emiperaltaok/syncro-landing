import React from "react";
import { Container } from "@/components/Container";

export const Testimonials = () => {
  return (
    <Container>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
          Empresas que ya transformaron su negocio con IA
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-500 dark:text-gray-300">
          Casos reales de empresas que implementaron automatización e inteligencia artificial 
          para revolucionar sus operaciones
        </p>
      </div>

      {/* Grid de casos reales */}
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 mb-16">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-8 rounded-2xl py-8 dark:bg-trueGray-800">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Restaurante automatiza pedidos
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Un restaurante implementó un <Mark>chatbot de WhatsApp</Mark> que procesa pedidos automáticamente. 
                Resultado: 70% menos tiempo en gestión de pedidos y 40% más ventas por delivery.
              </p>
            </div>
            <div className="flex items-center mt-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🍕</span>
              </div>
              <div className="ml-4">
                <div className="text-lg font-medium text-gray-800 dark:text-white">Sector Gastronomía</div>
                <div className="text-gray-600 dark:text-gray-400">Automatización de pedidos</div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-8 rounded-2xl py-8 dark:bg-trueGray-800">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Empresa reduce costos 60%
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Implementación de <Mark>análisis predictivo</Mark> para optimizar inventario y reducir desperdicios.
              </p>
            </div>
            <div className="flex items-center mt-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">📊</span>
              </div>
              <div className="ml-4">
                <div className="text-lg font-medium text-gray-800 dark:text-white">Sector Retail</div>
                <div className="text-gray-600 dark:text-gray-400">Análisis de datos</div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-8 rounded-2xl py-8 dark:bg-trueGray-800">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Startup escala 300%
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                <Mark>Automatización de procesos</Mark> internos permitió crecer sin contratar más personal administrativo.
              </p>
            </div>
            <div className="flex items-center mt-6">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🚀</span>
              </div>
              <div className="ml-4">
                <div className="text-lg font-medium text-gray-800 dark:text-white">Sector Tech</div>
                <div className="text-gray-600 dark:text-gray-400">Automatización de procesos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video de YouTube */}
      <div className="bg-gray-50 rounded-2xl p-8 dark:bg-trueGray-800">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Mira cómo las empresas están automatizando con WhatsApp
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Casos reales de implementación y resultados concretos
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/umTjswDOpA4"
              title="Automatización empresarial con WhatsApp"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
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