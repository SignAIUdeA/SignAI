import React from 'react'
import Sidebar from "@/components/Sidebar";
import LabelVideo from "@/components/LabelVideos";
import Dropdownmenu from "@/components/DropDown"

const labelsign = () => {
  return (
    <div>
    <div className="menu">
        <Sidebar/>
    </div>
    <div className="main">
          <LabelVideo/>
          <Dropdownmenu />
          <div className='flex justify-center gap-3 m-4'>
            <button type='submit' className='primary-button'>Enviar datos</button>
          </div>
    </div>
</div>
  )
}

export default labelsign