import {
  ChartBarSquareIcon,
  CogIcon,
  SparklesIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Transformamos datos en decisiones inteligentes",
  desc: "Implementamos soluciones de inteligencia artificial y automatización que revolucionan la forma en que tu empresa opera. Nuestro enfoque IA FIRST - DATA FIRST - CLIENTES FIRST garantiza resultados medibles.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Análisis de Datos Avanzado",
      desc: "Convertimos tu información en insights accionables con dashboards interactivos y análisis predictivo.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Automatizaciones Inteligentes", 
      desc: "Eliminamos tareas repetitivas con flujos de trabajo automatizados sin código complicado.",
      icon: <CogIcon />,
    },
    {
      title: "Implementación de IA",
      desc: "Integramos chatbots, sistemas de recomendación y herramientas de IA específicas para tu industria.",
      icon: <SparklesIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Soluciones diseñadas para empresas B2B",
  desc: "Entendemos las necesidades específicas del mundo empresarial. Combinamos experiencia profunda en negocios con tecnología de vanguardia para crear soluciones que realmente agregan valor a tu organización.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Enfoque Empresarial",
      desc: "Conocimiento profundo del entorno B2B para implementar soluciones que se adapten a tu realidad.",
      icon: <LightBulbIcon />,
    },
    {
      title: "Resultados Medibles",
      desc: "Cada implementación incluye KPIs específicos para medir el impacto real en tu negocio.",
      icon: <RocketLaunchIcon />,
    },
    {
      title: "Soporte Integral",
      desc: "Capacitación del equipo, documentación completa y soporte técnico para garantizar el éxito.",
      icon: <ShieldCheckIcon />,
    },
  ],
};

export {benefitOne, benefitTwo};
