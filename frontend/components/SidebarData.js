import React from 'react' 
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UploadIcon from '@mui/icons-material/Upload';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LabelIcon from '@mui/icons-material/Label';
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarData = [
    {
        title: 'Inicio',
        icon: <HomeIcon />,
        link: '/home'
    },
    {
        title: 'Perfil',
        icon: <AccountCircleIcon />,
        link: '/profile'
    },
    {
        title: 'Subir Señas',
        icon: <UploadIcon />,
        link: '/uploadfile'
    },
    {
        title: 'Analisis de Datos',
        icon: <DashboardIcon />,
        link: '/dashboard'
    },
    {
        title: 'Etiquetar Señas',
        icon: <LabelIcon />,
        link: '/labelsign'
    },
    {
        title: 'Salir',
        icon: <LogoutIcon />,
        link: '/'
    }
]

