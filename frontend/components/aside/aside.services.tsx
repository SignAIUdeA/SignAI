import React from 'react'
import { MdLeaderboard, MdManageAccounts, MdMarkAsUnread, MdArticle, MdFileUpload } from "react-icons/md";

interface SidebarDataItemType {
    title: string,
    icon: JSX.Element,
    link: string
} 

export const SidebarData: SidebarDataItemType[] = [
    {
        title: 'Bandeja de Entrada',
        icon: <MdMarkAsUnread className='h-8 w-8'/>,
        link: '/ProfesionalDashboard'
    },
    {
        title: 'Subir Señas',
        icon: <MdFileUpload className='h-8 w-8'/>,
        link: '/uploadfile'
    },
    {
        title: 'Análisis de Datos',
        icon: <MdLeaderboard className='h-8 w-8'/>,
        link: '/profesionalChart'
    },
    {
        title: 'Configurar Perfil',
        icon: <MdManageAccounts className='h-8 w-8'/>,
        link: '/profile'
    }
]
