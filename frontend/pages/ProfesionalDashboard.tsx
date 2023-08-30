import Layout from '@/layouts/Layout'
import React from 'react'

const ProfesionalDashboard = () => {
  return (
    <>
      <Layout>
        <div className='flex flex-col w-full h-full'>
            <div className='flex justify-end debug pt-12 pr-16 gap-6'>
                <button>salir</button>
                <span>Perfil</span>
            </div>
            <div className='flex justify-between mt-11 debug'>
                <div>Filtros</div>
                <div>
                    <button>izq</button>
                    <button>der</button>
                </div>
            </div>
            <DesktopTable/>
            <MobileCards/>
        </div>
      </Layout>
    </>
  )
}

const DesktopTable = () => {
  return(
    <div className='hidden md:flex h-full flex-col'>
      <div className='h-full mt-6 debug'>tabla</div>
      <div>paginacion</div>
    </div>
  );
};
const MobileCards = () =>{
  return(
    <div className='grid grid-cols-2 h-full md:hidden'>
      <div className='flex flex-col debug'>
        <div>Imagen</div>
        <div className='flex flex-col'>
          <span>Nombre</span>
          <span>Fecha</span>
          <span>Etiqueta</span>
          <button>Etiquetar</button>
        </div>
      </div>
      <div className='flex flex-col debug'>
        <div>Imagen</div>
        <div className='flex flex-col'>
          <span>Nombre</span>
          <span>Fecha</span>
          <span>Etiqueta</span>
          <button>Etiquetar</button>
        </div>
      </div>
    </div>
  );
};

export default ProfesionalDashboard