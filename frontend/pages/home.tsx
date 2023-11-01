import React from "react";
import Sidebar from "@/components/Sidebar";

const home = () => {
  return (
    <div>
      <div className="menu">
        <Sidebar />
      </div>
      <div className="main flex justify-center gap-3 m-4">
        <h1>Bienvenidos a SignAI</h1>
      </div>
    </div>
  );
};

export default home;
