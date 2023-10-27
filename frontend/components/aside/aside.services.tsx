import { RoleType } from "@/types/types";
import React from "react";
import {
  MdLeaderboard,
  MdManageAccounts,
  MdMarkAsUnread,
  MdFileUpload,
  MdPersonAdd,
  MdOutlineUploadFile,
  MdDescription,
} from "react-icons/md";

interface SidebarDataItemType {
  title: string;
  icon: JSX.Element;
  link: string;
}

const CLASS = "h-[1.4rem] w-[1.4rem]";

const SidebarProfessional: SidebarDataItemType[] = [
  {
    title: "Bandeja de Entrada",
    icon: <MdMarkAsUnread className={CLASS} />,
    link: "/dashboard/inbox",
  },
  {
    title: "Subir Señas",
    icon: <MdFileUpload className={CLASS} />,
    link: "/dashboard/upload-signs",
  },
  {
    title: "Análisis de Datos",
    icon: <MdLeaderboard className={CLASS} />,
    link: "/dashboard/data-analysis",
  },
  {
    title: "Subir Modelos",
    icon: <MdOutlineUploadFile className={CLASS} />,
    link: "/dashboard/upload-models",
  },
  {
    title: "Ver Modelos",
    icon: <MdDescription className={CLASS} />,
    link: "/dashboard/list-models",
  },
  {
    title: "Configurar Perfil",
    icon: <MdManageAccounts className={CLASS} />,
    link: "/dashboard/profile",
  },
];

const SidebarAssistant: SidebarDataItemType[] = [
  {
    title: "Subir Señas",
    icon: <MdFileUpload className={CLASS} />,
    link: "/dashboard/upload-signs",
  },
  {
    title: "Análisis de Datos",
    icon: <MdLeaderboard className={CLASS} />,
    link: "/dashboard/data-analysis",
  },
  {
    title: "Ver Modelos",
    icon: <MdDescription className={CLASS} />,
    link: "/dashboard/list-models",
  },
  {
    title: "Configurar Perfil",
    icon: <MdManageAccounts className={CLASS} />,
    link: "/dashboard/profile",
  },
];

const SidebarAdministrator: SidebarDataItemType[] = [
  {
    title: "Lista de Usuarios",
    icon: <MdMarkAsUnread className={CLASS} />,
    link: "/dashboard/list-users",
  },
  {
    title: "Añadir Usuarios",
    icon: <MdPersonAdd className={CLASS} />,
    link: "/dashboard/add-users",
  },
  {
    title: "Configurar Perfil",
    icon: <MdManageAccounts className={CLASS} />,
    link: "/dashboard/profile",
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
