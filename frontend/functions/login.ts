

import axios from "axios";


const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});


const handleLogin =(credentials:JSON)=> async (e: any) => {
    {/*ESTO ENVÍA LOS DATOS DE LOGIN AL BACK END*/ }
    e.preventDefault();
    console.log(credentials)
    const res = await instance.post("auth/login/", credentials).then((res) => {
        axios.defaults.headers.post['access_token'] = `${res.data.token_type} ${res.data.access_token}`
    }).catch((e) => { console.log(e) });
    console.log(axios.defaults.headers)
}

export {handleLogin}