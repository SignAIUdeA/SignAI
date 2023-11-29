import { type User } from "./table.types";

const users: User[] = [
  {
    name: "Hernando Cuesta",
    position: "Profesional",
    created_at: "Ago 23 - 2023",
  },
  {
    name: "Maria Castellanos",
    position: "Profesional",
    created_at: "Ago 23 - 2023",
  },
  {
    name: "Alejandra Perez",
    position: "Auxiliar",
    created_at: "Ago 23 - 2023",
  },
];

export const formatDate = (fechaOriginal: string): string => {
  const fecha = new Date(fechaOriginal);

  const formatoFecha = fecha.toLocaleDateString("es-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formatoFecha;
};

export const getAllUsers = (): User[] => users;
