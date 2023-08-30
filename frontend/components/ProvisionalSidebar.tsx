import React from 'react'

const ProvisionalSidebar = () => {
  return (
    <aside className='hidden w-64 md:flex flex-col gap-12 pt-12 pl-12'>
        <div>Logo</div>
        <div className='flex flex-col gap-6'>
            <div>Bandeja de Entrada</div>
            <div>Subir Señas</div>
            <div>Análisis de Datos</div>
            <div>Configurar Perfil</div>
        </div>
    </aside>
  )
}

export {ProvisionalSidebar};