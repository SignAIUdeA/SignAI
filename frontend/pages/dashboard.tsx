import React from 'react'
import Sidebar from "@/components/Sidebar";
import Rechart from "@/components/Rechart";

const home = () => {
  return (
    <div>
    <div className="menu">
        <Sidebar/>

    </div>
    <div className="main">
      <Rechart/>
    </div>
</div>
  )
}

export default home