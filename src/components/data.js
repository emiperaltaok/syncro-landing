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
  title: "Nuestros servicios",
  desc: "Desarrollamos soluciones de IA, análisis de datos y automatizaciones que potencian tu negocio.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Análisis de Datos",
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

export {benefitOne};
