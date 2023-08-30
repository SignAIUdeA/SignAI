import React from 'react'
import Layout from '@/layouts/Layout'
import Image from 'next/image'
import { MdDateRange, MdLabelOutline, MdOutlinePermIdentity } from 'react-icons/md'

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
            <DesktopCards/>
            <MobileCards/>
        </div>
      </Layout>
    </>
  )
}

const Card = () => {
  return(
    <div className='flex flex-col debug w-44 h-[250px]'>
      <Image  src="/sign.png" width={176} height={100} alt="sign"/>
      <div className='flex flex-col gap-2 p-2 bg-[#E3F8ED] debug'>
        <div className='flex debug'>
          <MdOutlinePermIdentity className='h-5 w-5'/>
          <span>Nombre</span>
        </div>
        <div className='flex debug'>
          <MdDateRange className='h-5 w-5'/>
          <span>Fecha</span>
        </div>
        <div className='flex debug'>
          <MdLabelOutline className='h-5 w-5'/>
          <span>Etiqueta</span>
        </div>
        <button className='w-30 h-5 flex justify-center items-center p-0 rounded-lg debug'>
          <span>Etiquetar</span>
        </button>
      </div>
    </div>
  );
};

const DesktopCards = () => {
  return (
    <div className='hidden md:grid h-full mt-6 justify-items-center debug overflow-y-auto'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const MobileCards = () =>{
  return(
    <div className='md:hidden sm:grid h-full mt-6 justify-items-center debug'>
      <div className='grid sm:grid-cols-2'>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};


export default ProfesionalDashboard