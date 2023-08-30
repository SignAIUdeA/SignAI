
import React from 'react'
import { MdLeaderboard, MdManageAccounts, MdMarkAsUnread,
  MdArticle, MdSettings, MdMail,
   MdFileUpload } from "react-icons/md";

const ProvisionalSidebar = () => {
  return (
    <aside className='hidden w-64 md:flex flex-col gap-12 pt-12 pl-12 debug'>
        <div className='debug flex gap-4 items-center'>
          <button className='bg-white debug'>
            <MdArticle className='h-8 w-8'/>
          </button>
          <span>SignAI</span>
        </div>
        <div className='flex flex-col gap-6'>
            <button className='debug flex bg-white rounded-lg'>
              <MdMarkAsUnread className='h-8 w-8'/>
              <span>Bandeja de Entrada</span>
            </button>
            <button className='flex '>
              <MdFileUpload className='h-8 w-8'/>
              <span></span>Subir Señas
            </button>
            <button className='flex '> 
              <MdLeaderboard className='h-8 w-8'/>
              <span></span>Análisis de Datos
            </button>
            <button className='flex '>
              <MdManageAccounts className='h-8 w-8'/>
              <span></span>Configurar Perfil
            </button>
        </div>
    </aside>
  )
}

export {ProvisionalSidebar};