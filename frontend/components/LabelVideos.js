import { useState, useRef } from "react"
import Image from 'next/image'
import sign from '../public/sign.gif'


const LabelVideo = () => {
 

    return (

            <div className="dropzone mx-auto">
                <Image 
                src={sign}
                alt="Escudo UdeA"
                width={300}
                height={300}
                
                ></Image>
            </div>

    )

};

export default LabelVideo