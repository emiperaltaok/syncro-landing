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
              Transformamos tu empresa con Inteligencia Artificial
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Implementamos soluciones de inteligencia artificial,
              automatizaciones inteligentes y análisis de datos
              que revolucionan tu negocio.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://wa.me/5493512332525"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Descubre como podemos ayudarte
              </a>
              <a
                href="https://wa.me/5493512332525"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.050 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span> Consulta Gratuita</span>
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
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Tecnologias que potencian nuestras soluciones
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="text-gray-400 dark:text-gray-400">
              <OpenAILogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <AnthropicLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <XAILogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <GoogleLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <PythonLogo />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function OpenAILogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="32"
      fill="none"
      viewBox="0 0 120 32">
      <path
        fill="currentColor"
        d="M29.71 13.265c.181-2.69-.563-5.295-2.05-7.415-1.484-2.12-3.621-3.619-6.118-4.293-2.497-.673-5.148-.478-7.59.559-2.441 1.036-4.516 2.918-5.939 5.386-.77-1.342-1.888-2.48-3.237-3.297-1.35-.817-2.875-1.285-4.427-1.358-1.552-.073-3.09.235-4.459.893-1.369.658-2.52 1.634-3.338 2.833-.818 1.199-1.273 2.574-1.317 3.986-.044 1.412.324 2.812 1.067 4.063.342.577.758 1.115 1.237 1.602-.479.487-.895 1.025-1.237 1.602-.743 1.251-1.111 2.651-1.067 4.063.044 1.412.499 2.787 1.317 3.986.818 1.199 1.969 2.175 3.338 2.833 1.369.658 2.907.966 4.459.893 1.552-.073 3.077-.541 4.427-1.358 1.349-.817 2.467-1.955 3.237-3.297 1.423 2.468 3.498 4.35 5.939 5.386 2.442 1.037 5.093 1.232 7.59.559 2.497-.674 4.634-2.173 6.118-4.293 1.487-2.12 2.231-4.725 2.05-7.415.768-1.327 1.175-2.844 1.175-4.387s-.407-3.06-1.175-4.387zM16.718 26.582c-3.564 0-6.449-2.905-6.449-6.491 0-3.586 2.885-6.491 6.449-6.491 3.563 0 6.448 2.905 6.448 6.491 0 3.586-2.885 6.491-6.448 6.491z"
      />
      <path
        fill="currentColor"
        d="M46.4 8.24c2.52 0 4.56 2.04 4.56 4.56v6.48c0 2.52-2.04 4.56-4.56 4.56h-3.36c-2.52 0-4.56-2.04-4.56-4.56V12.8c0-2.52 2.04-4.56 4.56-4.56h3.36zm0 2.16h-3.36c-1.32 0-2.4 1.08-2.4 2.4v6.48c0 1.32 1.08 2.4 2.4 2.4h3.36c1.32 0 2.4-1.08 2.4-2.4V12.8c0-1.32-1.08-2.4-2.4-2.4z"
      />
      <path
        fill="currentColor"
        d="M58.56 8.24c2.52 0 4.56 2.04 4.56 4.56v10.44h-2.16V12.8c0-1.32-1.08-2.4-2.4-2.4h-4.08c-1.32 0-2.4 1.08-2.4 2.4v10.44h-2.16V12.8c0-2.52 2.04-4.56 4.56-4.56h4.08z"
      />
      <path
        fill="currentColor"
        d="M70.32 8.24c2.52 0 4.56 2.04 4.56 4.56v6.48c0 2.52-2.04 4.56-4.56 4.56h-3.36c-2.52 0-4.56-2.04-4.56-4.56V12.8c0-2.52 2.04-4.56 4.56-4.56h3.36zm0 2.16h-3.36c-1.32 0-2.4 1.08-2.4 2.4v6.48c0 1.32 1.08 2.4 2.4 2.4h3.36c1.32 0 2.4-1.08 2.4-2.4V12.8c0-1.32-1.08-2.4-2.4-2.4z"
      />
      <path
        fill="currentColor"
        d="M82.08 8.24c2.52 0 4.56 2.04 4.56 4.56v10.44h-2.16V12.8c0-1.32-1.08-2.4-2.4-2.4h-4.08c-1.32 0-2.4 1.08-2.4 2.4v10.44h-2.16V12.8c0-2.52 2.04-4.56 4.56-4.56h4.08z"
      />
      <path
        fill="currentColor"
        d="M100.08 8.24h2.4l-6.48 15.12h-2.4L87.12 8.24h2.4l4.8 11.04 4.76-11.04z"
      />
      <path
        fill="currentColor"
        d="M111.12 8.24h2.16v15.12h-2.16v-6.48h-6.48v6.48h-2.16V8.24h2.16v6.48h6.48V8.24z"
      />
    </svg>
  );
}

function AnthropicLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="32"
      fill="none"
      viewBox="0 0 140 32">
      <path
        fill="currentColor"
        d="M23.2 6.4h3.6l8.4 19.2h-4.2l-1.8-4.2H19.4l-1.8 4.2H13.4L23.2 6.4zm0 7.2l-3 7.2h6l-3-7.2z"
      />
      <path
        fill="currentColor"
        d="M42.8 8.8c4.8 0 8.4 3.6 8.4 8.4s-3.6 8.4-8.4 8.4-8.4-3.6-8.4-8.4 3.6-8.4 8.4-8.4zm0 3.6c-2.4 0-4.8 1.8-4.8 4.8s2.4 4.8 4.8 4.8 4.8-1.8 4.8-4.8-2.4-4.8-4.8-4.8z"
      />
      <path
        fill="currentColor"
        d="M60.4 9.2v3.6c-1.2-1.2-3-1.8-4.8-1.8-4.8 0-8.4 3.6-8.4 8.4s3.6 8.4 8.4 8.4c1.8 0 3.6-.6 4.8-1.8v1.6h3.6V9.2h-3.6zm-4.2 13.8c-2.4 0-4.8-1.8-4.8-4.8s2.4-4.8 4.8-4.8 4.8 1.8 4.8 4.8-2.4 4.8-4.8 4.8z"
      />
      <path
        fill="currentColor"
        d="M74.8 9.2v16.4h-3.6V9.2h3.6z"
      />
      <path
        fill="currentColor"
        d="M85.2 8.8c1.8 0 3.6.6 4.8 1.8V9.2h3.6v16.4h-3.6v-1.6c-1.2 1.2-3 1.8-4.8 1.8-4.8 0-8.4-3.6-8.4-8.4s3.6-8.4 8.4-8.4zm.6 3.6c-2.4 0-4.8 1.8-4.8 4.8s2.4 4.8 4.8 4.8 4.8-1.8 4.8-4.8-2.4-4.8-4.8-4.8z"
      />
      <path
        fill="currentColor"
        d="M104.8 8.8c1.8 0 3.6.6 4.8 1.8V9.2h3.6v16.4h-3.6v-1.6c-1.2 1.2-3 1.8-4.8 1.8-4.8 0-8.4-3.6-8.4-8.4s3.6-8.4 8.4-8.4zm.6 3.6c-2.4 0-4.8 1.8-4.8 4.8s2.4 4.8 4.8 4.8 4.8-1.8 4.8-4.8-2.4-4.8-4.8-4.8z"
      />
      <path
        fill="currentColor"
        d="M118.8 6.4h3.6v19.2h-3.6V6.4z"
      />
      <path
        fill="currentColor"
        d="M135.2 21.2c0 2.4-1.8 4.2-4.2 4.2s-4.2-1.8-4.2-4.2V9.2h3.6v12c0 .6.6 1.2 1.2 1.2s1.2-.6 1.2-1.2V9.2h2.4v12z"
      />
    </svg>
  );
}

function XAILogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="32"
      fill="none"
      viewBox="0 0 100 32">
      <path
        fill="currentColor"
        d="M20 6.4L12.8 16l7.2 9.6h-4.8L10 19.2 4.8 25.6H0L7.2 16 0 6.4h4.8L10 12.8 15.2 6.4H20z"
      />
      <path
        fill="currentColor"
        d="M35.2 6.4h3.6l8.4 19.2h-4.2l-1.8-4.2H31.4l-1.8 4.2H25.4L35.2 6.4zm0 7.2l-3 7.2h6l-3-7.2z"
      />
      <path
        fill="currentColor"
        d="M54.8 6.4h3.6v19.2h-3.6V6.4z"
      />
      <circle
        cx="78"
        cy="16"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        fill="currentColor"
        d="M72 12h12v8H72V12z"
      />
      <path
        fill="currentColor"
        d="M74 10v4h8v-4h-8zm2 2h4v-1h-4v1z"
      />
      <path
        fill="currentColor"
        d="M74 18v4h8v-4h-8zm2 2h4v-1h-4v1z"
      />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="32"
      fill="none"
      viewBox="0 0 120 32">
      <path
        fill="#4285f4"
        d="M58.2 16.4c0-1-.1-2-.3-2.9H30v5.5h15.8c-.7 3.7-2.8 6.8-5.9 8.9v7.3h9.5c5.6-5.1 8.8-12.7 8.8-18.8z"
      />
      <path
        fill="#34a853"
        d="M30 32c7.9 0 14.5-2.6 19.4-7.1l-9.5-7.3c-2.6 1.7-5.9 2.7-9.9 2.7-7.6 0-14.1-5.1-16.4-12h-9.8v7.6C8.7 25.9 18.6 32 30 32z"
      />
      <path
        fill="#fbbc04"
        d="M13.6 19.3c-1.2-3.7-1.2-7.7 0-11.4V.3h-9.8c-5.2 10.4-5.2 22.8 0 33.2l9.8-7.6 7.6-6.6z"
      />
      <path
        fill="#ea4335"
        d="M30 6.4c4.1 0 7.7 1.4 10.6 4.2l7.9-7.9C43.5.9 37.2-1.4 30 .4 18.6.4 8.7 6.5 3.8 15.9l9.8 7.6C16.1 11.5 22.6 6.4 30 6.4z"
      />
    </svg>
  );
}

function PythonLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="32"
      fill="none"
      viewBox="0 0 120 32">
      <path
        fill="#3776ab"
        d="M15.9 2.4c4.2 0 7.8 1.2 10.2 3.6 2.4 2.4 3.6 5.4 3.6 9v8.4c0 3.6-1.2 6.6-3.6 9-2.4 2.4-6 3.6-10.2 3.6H8.7c-4.2 0-7.8-1.2-10.2-3.6C-3.9 29.0-5.1 26.0-5.1 22.4V14c0-3.6 1.2-6.6 3.6-9 2.4-2.4 6-3.6 10.2-3.6h7.2zm-7.2 4.8c-2.4 0-4.2.6-5.4 1.8S1.5 11.6 1.5 14v8.4c0 2.4.6 4.2 1.8 5.4s3 1.8 5.4 1.8h7.2c2.4 0 4.2-.6 5.4-1.8s1.8-3 1.8-5.4V14c0-2.4-.6-4.2-1.8-5.4S18.3 7.2 15.9 7.2H8.7z"
      />
      <path
        fill="#ffd43b"
        d="M8.7 0c-4.2 0-7.8 1.2-10.2 3.6S-5.1 9.0-5.1 12.6v8.4c0 3.6 1.2 6.6 3.6 9 2.4 2.4 6 3.6 10.2 3.6h7.2c4.2 0 7.8-1.2 10.2-3.6 2.4-2.4 3.6-5.4 3.6-9v-8.4c0-3.6-1.2-6.6-3.6-9C22.7 1.2 19.1 0 14.9 0H8.7zm7.2 4.8c2.4 0 4.2.6 5.4 1.8s1.8 3 1.8 5.4v8.4c0 2.4-.6 4.2-1.8 5.4s-3 1.8-5.4 1.8H8.7c-2.4 0-4.2-.6-5.4-1.8S1.5 22.8 1.5 20.4V12c0-2.4.6-4.2 1.8-5.4S6.3 4.8 8.7 4.8h7.2z"
      />
      <path
        fill="currentColor"
        d="M45.6 8.4h4.8v15.6h9.6v4.2H45.6V8.4z"
      />
      <path
        fill="currentColor"
        d="M64.8 8.4h4.8l6 11.4 6-11.4h4.8l-8.4 15v5.4h-4.8v-5.4l-8.4-15z"
      />
      <path
        fill="currentColor"
        d="M91.2 8.4h12v4.2h-7.2v3.6h6.6v4.2h-6.6V24h7.2v4.2h-12V8.4z"
      />
      <path
        fill="currentColor"
        d="M109.2 8.4h4.8v15.6h9.6v4.2h-14.4V8.4z"
      />
    </svg>
  );
}

