
import React from 'react'
import Image from 'next/image'
import { MdDateRange, MdLabelOutline, MdOutlinePermIdentity } from 'react-icons/md'
import { CardData } from './card.services';

interface CardProps {
    name: string,
    date: string,
    label: string
}

const Card = ({name, date, label}: CardProps) => {
    return(
      <div className='flex flex-col  w-44 h-[250px]'>
        <Image  src="/sign.png" width={176} height={100} alt="sign"/>
        <div className='flex flex-col gap-2 p-2 bg-[#E3F8ED] '>
          <div className='flex '>
            <MdOutlinePermIdentity className='h-5 w-5'/>
            <span>{name}</span>
          </div>
          <div className='flex '>
            <MdDateRange className='h-5 w-5'/>
            <span>{date}</span>
          </div>
          <div className='flex '>
            <MdLabelOutline className='h-5 w-5'/>
            <span>{label}</span>
          </div>
          <button className='w-30 h-5 flex justify-center items-center p-0 rounded-lg  bg-'>
            <span>Etiquetar</span>
          </button>
        </div>
      </div>
    );
  };

export default Card