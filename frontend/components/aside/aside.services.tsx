import { RoleType } from "@/types/types";
import React from "react";
import {
  MdLeaderboard,
  MdManageAccounts,
  MdMarkAsUnread,
  MdArticle,
  MdFileUpload,
} from "react-icons/md";

interface SidebarDataItemType {
  title: string;
  icon: JSX.Element;
  link: string;
}

export const SidebarData: SidebarDataItemType[] = [
  {
    title: "Bandeja de Entrada",
    icon: <MdMarkAsUnread className="h-[1.4rem] w-[1.4rem]" />,
    link: "/ProfesionalDashboard",
  },
  {
    title: "Subir Señas",
    icon: <MdFileUpload className="h-[1.4rem] w-[1.4rem]" />,
    link: "/profesionalUploadfile",
  },
  {
    title: "Análisis de Datos",
    icon: <MdLeaderboard className="h-[1.4rem] w-[1.4rem]" />,
    link: "/profesionalChart",
  },
  {
    title: "Configurar Perfil",
    icon: <MdManageAccounts className="h-[1.4rem] w-[1.4rem]" />,
    link: "/profesionalProfile",
  },
];

const SidebarProfessional: SidebarDataItemType[] = [
  {
    title: "Bandeja de Entrada",
    icon: <MdMarkAsUnread className="h-[1.4rem] w-[1.4rem]" />,
    link: "/ProfesionalDashboard",
  },
  {
    title: "Subir Señas",
    icon: <MdFileUpload className="h-[1.4rem] w-[1.4rem]" />,
    link: "/profesionalUploadfile",
  },
  {
    title: "Análisis de Datos",
    icon: <MdLeaderboard className="h-[1.4rem] w-[1.4rem]" />,
    link: "/profesionalChart",
  },
  {
    title: "Configurar Perfil",
    icon: <MdManageAccounts className="h-[1.4rem] w-[1.4rem]" />,
    link: "/profesionalProfile",
  },
];

const SidebarAssistant: SidebarDataItemType[] = [
  {
    title: "Subir Señas",
    icon: <MdFileUpload className="h-[1.4rem] w-[1.4rem]" />,
    link: "/dashboard/assistant",
  },
  {
    title: "Análisis de Datos",
    icon: <MdLeaderboard className="h-[1.4rem] w-[1.4rem]" />,
    link: "/dashboard/assistant/data-analysis",
  },
  {
    title: "Configurar Perfil",
    icon: <MdMarkAsUnread className="h-[1.4rem] w-[1.4rem]" />,
    link: "/dashboard/assistant/profile",
  },
];

const SidebarAdministrator: SidebarDataItemType[] = [
  {
    title: "Lista de Usuarios",
    icon: <MdMarkAsUnread className="h-[1.4rem] w-[1.4rem]" />,
    link: "/dashboard/administrator",
  },
  {
    title: "Añadir Usuarios",
    icon: <MdFileUpload className="h-[1.4rem] w-[1.4rem]" />,
    link: "/dashboard/administrator/addusers",
  },
  {
    title: "Configurar Perfil",
    icon: <MdLeaderboard className="h-[1.4rem] w-[1.4rem]" />,
    link: "/dashboard/administrator/profile",
  },
];

export const getSidebar = (role: RoleType) => {
  const sidebars = {
    administrator: SidebarAdministrator,
    assistant: SidebarAssistant,
    professional: SidebarProfessional,
  };

  return sidebars[role];
};
