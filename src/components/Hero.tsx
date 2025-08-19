import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Transformamos tu empresa con IA, datos ó automatizaciones
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Desarrollamos análisis de datos, productos con inteligencia artificial y
              automatizaciones que potencian tu negocio.
              Resultados reales, sin complicaciones técnicas.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://wa.me/5493512332525"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Consulta Gratuita
              </a>
              
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container className="mb-20">
        <div className="flex flex-col justify-center">
          <div className="text-2xl text-center text-gray-700 dark:text-white font-semibold">
            Tecnologias que potencian nuestras soluciones
          </div>

          {/* Fila 1 - AI & Intelligence */}
          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="text-gray-400 dark:text-gray-400 font-semibold text-2xl">
              OpenAI
            </div>
            <div className="text-gray-400 dark:text-gray-400 font-semibold text-2xl">
              Anthropic
            </div>
            <div className="text-gray-400 dark:text-gray-400 font-semibold text-2xl">
              xAI
            </div>
            <div className="text-gray-400 dark:text-gray-400 font-semibold text-2xl">
              Google
            </div>
            <div className="text-gray-400 dark:text-gray-400 font-semibold text-2xl">
              Python
            </div>
          </div>

          {/* Fila 2 - Automation & Integration */}
          <div className="flex flex-wrap justify-center gap-5 mt-6 md:justify-around">
            <div className="text-gray-400 dark:text-gray-400 font-semibold text-2xl">
              Microsoft
            </div>
            <div className="text-gray-400 dark:text-gray-400 font-semibold text-2xl">
              GitHub
            </div>
            <div className="text-gray-400 dark:text-gray-400 font-semibold text-2xl">
              n8n/Make
            </div>
            <div className="text-gray-400 dark:text-gray-400 font-semibold text-2xl">
              WhatsApp API
            </div>
            <div className="text-gray-400 dark:text-gray-400 font-semibold text-2xl">
              ElevenLabs
            </div>
            <div className="text-gray-400 dark:text-gray-400 font-semibold text-2xl">
              No Code Tools
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}