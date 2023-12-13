export interface Modelo {
  id: string;
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
