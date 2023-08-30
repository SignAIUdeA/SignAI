import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className='flex items-center justify-between gap-2 px-1 md:hidden'>
        <div className='flex items-center'>
            <button
            onClick={()=>{
                setIsOpen(!isOpen)
            }}
            >
                {/* {isOpen ? Icono1 : Icono2} */}
                <span>Icono</span>
            </button>
        </div>
        <div>
            <span>SignAI</span>
        </div>
        <div>Logo</div>
    </nav>
  );
};

export default Navbar;