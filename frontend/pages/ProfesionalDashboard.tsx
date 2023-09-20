import React from 'react'
import Layout from '@/layouts/Layout'
import Card from '@/components/card/Card'
import { CardData } from '@/components/card/card.services'
import InfoUser from '@/components/info-user/InfoUser'
import FilterSection from '@/components/filter-section/FilterSection'

const ProfesionalDashboard = () => {
  return (
    <>
      <Layout>
        <div className='flex flex-col w-full h-full'>
            <div className='flex justify-center mt-11 debug'>
              <FilterSection/>
            </div>
            <DesktopCards/>
            <MobileCards/>
        </div>
      </Layout>
    </>
  )
}

const DesktopCards = () => {
  return (
    <div className='hidden md:grid h-full mt-6 justify-items-center debug overflow-y-auto'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {CardData.map((item, index) => (
          <Card key={index} name={item.name} date={item.date} label={item.label} />
        ))}
      </div>
    </div>
  );
};

const MobileCards = () =>{
  return(
    <div className='md:hidden sm:grid h-full mt-6 justify-items-center debug'>
      <div className='grid sm:grid-cols-2'>
        {CardData.map((item, index) => (
          <Card key={index} name={item.name} date={item.date} label={item.label} />
        ))}
      </div>
    </div>
  );
};


export default ProfesionalDashboard