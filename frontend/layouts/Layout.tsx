
import Navbar from '@/components/Navbar';
import { ProvisionalSidebar } from '@/components/aside/ProvisionalSidebar';
import React from 'react'

interface LayoutProps {
    children: JSX.Element;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <main className='flex h-screen w-screen flex-col md:flex-row'>
        <ProvisionalSidebar/>
        <Navbar/>
        <section className='flex h-full w-full'>
            {children}
        </section>
    </main>
  );
};

export default Layout;