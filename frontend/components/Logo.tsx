import React from 'react';
import Image from 'next/image';
import escudoUdeA from '../public/escudoUdeA.png';

function Logo() {
    return (
        <div>
       <Image 
        src={escudoUdeA}
        alt="Escudo UdeA"
        width={200}
        height={200}
       />
      </div>

    )
}

export default Logo