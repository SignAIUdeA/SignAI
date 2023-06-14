import { useState } from "react";
import React from 'react'
import axios from 'axios'
import DragDrop from "@/components/DragDrop";

import Dropdownmenu from "@/components/DropDown"
import Sidebar from "@/components/Sidebar";

const uploadfile = () => {
    
    
    return (
        <div>
            <div className="menu">
                <Sidebar/>
            </div>
            <div className="main">
                    <DragDrop/>
                    <Dropdownmenu />
                    <div className='flex justify-center gap-3 m-4'>
                    <button type='submit' className='primary-button'>Enviar datos</button>
                    </div>
            </div>
        </div>
    )
}

export default uploadfile