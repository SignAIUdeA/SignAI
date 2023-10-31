interface Constants {
  [key: string]: string;
}

export const STATE_INVESTIGATION: Constants = {
  inDevelopment: "En desarrollo",
  inTesting: "En pruebas",
  readyForProduction: "En producción",
};

export const CATEGORIAS_AI: Constants = {
  computerVision: "Visión por Computadora",
  naturalLanguageProcessing: "Procesamiento de Lenguaje Natural",
  reinforcementLearning: "Aprendizaje por Refuerzo",
  audioProcessing: "Procesamiento de Audio",
  dataAnalysisPrediction: "Análisis de Datos y Predicción",
  automationRobotics: "Automatización y Robótica",
  expertSystemsRules: "Sistemas Expertos y Reglas",
  federatedLearningPrivacy: "Aprendizaje Federado y Privacidad de Datos",
  graphicsSocialMedia: "Procesamiento de Gráficos y Redes Sociales",
  documentAutomation: "Automatización de Documentos",
};
