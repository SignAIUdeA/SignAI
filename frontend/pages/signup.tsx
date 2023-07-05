
import { useState } from "react";
import React from 'react'
// import axios from 'axios'
import Logo from "@/components/Logo";
import { ApiService } from "@/common/api.service";

const signin = () => {

  const [credentials, setCredentials] = useState({ name: '', email: '', password: '' })

  const handleChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // console.log(credentials)
    // const res = await axios.post("http://127.0.0.1:8000/user/", credentials).catch((e)=>{console.log(e)})
    // console.log(res);
    const res = await ApiService.post('user/', credentials)
    console.log(res)
  };
  

  return (
    <div className="welcome">
      <Logo/>
      <h1>Registrarse SignAI UdeA</h1>

      <div className="logform">
      <form className="flex flex-col place-items-center gap-2" onSubmit={handleSubmit}>
        <input name="name" type="name" placeholder="nombre" onChange={handleChange}></input>
        <input name="email" type="email" placeholder="correo" onChange={handleChange}></input>
        <input name="password" type="password" placeholder="contraseña" onChange={handleChange}></input>
        <div className='flex justify-center gap-3 m-4'>
          <button type='submit' className='primary-button'>Enviar datos</button>
          <button type='reset' className='secondary-button'>Limpiar datos</button>
        </div>
      </form>
      </div>
    </div>
  )
}
export default signin