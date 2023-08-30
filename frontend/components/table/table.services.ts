import { type User } from "./table.types";

const users: User[] = [
  {
    name: "Hernando Cuesta",
    position: "Profesional",
    created_at: "Ago 23 - 2023"
  },
  {
    name: "Maria Castellanos",
    position: "Profesional",
    created_at: "Ago 23 - 2023"
  },
  {
    name: "Alejandra Perez",
    position: "Auxiliar",
    created_at: "Ago 23 - 2023"
  }
]

export const getAllUsers = (): User[] => users