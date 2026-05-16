"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.svg";

export const Hero = () => {
  const technologies = [
    "OpenAI",
    "Anthropic", 
    "Google",
    "Python",
    "Microsoft",
    "GitHub",
    "n8n/Make",
    "WhatsApp API",
    "Vercel",
    "Supabase",
    "MercadoPago",
    "Cloudflare"
  ];

  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Transformamos tu empresa con IA, datos ó automatizaciones
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Tecnología simple, sin complicaciones técnicas.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              
                <a href="https://wa.me/5493512332525"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-[#0d0d0d] bg-[#f0ede6] rounded-md ">
                Consulta Gratuita
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="520"
              height="520"
              className={"object-cover"} style={{filter: "grayscale(1) opacity(0.4)"}}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>

      {/* NUEVA SECCIÓN CON CARRUSEL */}
      <Container className="mb-20">
        <div className="flex flex-col justify-center">
          <div className="text-2xl text-center text-gray-700 dark:text-white font-semibold mb-10">
            Tecnologias que potencian nuestras soluciones
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {technologies.map((tech, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-6 py-4 px-2"
                  style={{ minWidth: 'max-content' }}
                >
                  <div className="text-gray-700 dark:text-gray-200 font-extrabold text-xl text-center hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all duration-300 cursor-pointer">
                    {tech}
                  </div>
                </div>
              ))}
              
              {technologies.map((tech, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-6 py-4 px-2"
                  style={{ minWidth: 'max-content' }}
                >
                  <div className="text-gray-700 dark:text-gray-200 font-extrabold text-xl text-center hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all duration-300 cursor-pointer">
                    {tech}
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 25s linear infinite;
            width: max-content;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      {/* BADGE MERCADOPAGO */}
        <div className="flex flex-col items-center justify-center gap-4 mt-16">
          <p className="text-xs text-gray-400 dark:text-[#555] uppercase tracking-widest font-medium">
            Certificaciones oficiales
          </p>
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-gray-200 dark:border-[#1e1e1e] bg-white dark:bg-[#141414]">
            <Image
              src="/Insignia.png"
              alt="MercadoPago Checkout Pro Developer" style={{filter: "grayscale(1) brightness(1.2)"}}
              width={52}
              height={38}
            />
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 dark:text-[#555] leading-none mb-1 uppercase tracking-wider">Partner oficial</span>
              <span className="text-sm font-semibold text-gray-800 dark:text-[#f0ede6] leading-none">MercadoPago Checkout Pro</span>
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}
