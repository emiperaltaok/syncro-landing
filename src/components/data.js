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
      desc: "Interpretamos tus datos para que generes más dinero",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Automatizaciones Inteligentes", 
      desc: "Menos tareas manuales, más tecnología para no quedar afuera",
      icon: <CogIcon />,
    },
    {
      title: "Implementación de IA",
      desc: "Con solo 3 datos de tu empresa, creamos un sistema con IA que te ahorra tiempo",
      icon: <SparklesIcon />,
    },
  ],
};

export {benefitOne};
