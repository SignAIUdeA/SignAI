
import Navbar from '@/components/Navbar';
import { ProvisionalSidebar } from '@/components/aside/ProvisionalSidebar';
import InfoUser from '@/components/info-user/InfoUser';
import React from 'react'

interface LayoutProps {
    children: JSX.Element;
}

const Layout = ({children}: LayoutProps) => {
  return (
    // <div className=''>
      <main className='flex h-screen flex-col md:flex-row overflow-hidden'>
      {/* <main className='flex h-screen w-screen flex-col md:flex-row'> */}
          <ProvisionalSidebar/>
          <Navbar/>
          <div className='flex flex-col w-full'>
            <div className='flex justify-end pt-12 pr-16'>
              <InfoUser name='santi' role='auxiliar'/>
            </div>
            {/* <section className='flex h-full w-full debug'> */}
            <section className='flex debug overflow-y-auto h-full'>
                {children}
            </section>
          </div>
      </main>
    
    // </div>
  );
};

export default Layout;