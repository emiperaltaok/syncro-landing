import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-[#141414] border border-[#1e1e1e] px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Implementar IA ahora
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            No dejes que la competencia se adelante. Implementa automatización hoy.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://wa.me/5493512332525"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-[#0d0d0d] bg-[#f0ede6] rounded-md px-7 lg:px-10 lg:py-5 hover:bg-white"
          >
            Consulta Gratuita
          </a>
        </div>
      </div>
    </Container>
  );
};
