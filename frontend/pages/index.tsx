import Image from 'next/image';
import escudoUdeA from '../public/escudoUdeA.png';
import React from 'react'
import Link from 'next/link';
import Logo from "@/components/Logo";

const index = () => {
  console.log(escudoUdeA)
  return (
    <div className="welcome flex justify-center gap-3 m-4">
		  <Logo/>     
      <h1>SignAI UdeA</h1>
      <Link href="/login">
        <button type='submit' className='primary-button'>Ingresar</button>
      </Link>
      <Link href="/signup">
        <button type='reset' className='secondary-button'>Registrarse</button>
      </Link>
	  </div>
  )
}

export default index