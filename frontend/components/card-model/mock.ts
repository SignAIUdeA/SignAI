export interface Modelo {
  name: string;
  description: string;
  category: string;
  keyWords: string[];
  precision: string;
  sensitivity: string;
  specificity: string;
  f1Score: string;
  rocAuc: string;
  version: string;
  notesVersion: string;
  stateInvestigation: string;
  comments: string;
  creationDate: string;
  createdBy: string;
}

export const modelo: Modelo = {
  name: "Modelo de Clasificación de Imágenes",
  description:
    "Este modelo utiliza una red neuronal convolucional para clasificar imágenes de animales.",
  category: "Visión por Computadora",
  keyWords: ["Clasificación de Imágenes", "CNN", "Animales"],
  precision: "0.85",
  sensitivity: "0.92",
  specificity: "0.78",
  f1Score: "0.87",
  rocAuc: "0.91",
  version: "v1.0.0",
  notesVersion: "Versión estable",
  stateInvestigation: "En progreso",
  comments: "Comentarios adicionales",
  creationDate: "20231018091602",
  createdBy: "Andrés Quintero",
};
