import { useState } from "react";
import axios from "axios";
import Logo from "@/components/Logo";


const LoginPage = () => {

  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const handleChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
  });


  const handleSubmit = async (e: any) => {
    {/*ESTO ENVÍA LOS DATOS DE LOGIN AL BACK END*/ }
    e.preventDefault();
    const res = await instance.post("auth/login/", credentials).then((res) => {
      instance.defaults.headers.post['Authorization'] = `${res.data.token_type} ${res.data.access_token}`
      console.log(res)
      if (res != null) {
        window.location.href = "/uploadfile"
      }
    }
    ).catch((e) => {
      if (e.response && e.response.status === 404) {
        // mostrar un mensaje de error en la aplicación
        alert("Usuario o contraseña incorrectos");
      } else {
        // mostrar un mensaje de error genérico en la aplicación
        alert("Ocurrió un error al procesar su solicitud");
        console.log(e);
      }
    });
    //console.log(res)
  }

  return (
    <div className="welcome">
      <Logo/>
      <h1>Ingresar SignAI UdeA</h1>
      <div className="logform">
      <form className="flex flex-col place-items-center gap-2" onSubmit={handleSubmit}>
        <input name="username" type="username" placeholder="correo" onChange={handleChange}></input>
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

export default LoginPage 