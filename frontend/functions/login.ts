import axios from "axios";
import { Credentials, AuthResponse, UserInfo } from "@/types/types";

interface ResponseLogin {
  ok: boolean;
  authResponse?: AuthResponse;
  messageError?: string;
}

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export const handleLogin = async ({
  user: username,
  password,
}: Credentials): Promise<ResponseLogin> => {
  try {
    const response = await instance.post("auth/login/", { username, password });

    const authResponse: AuthResponse = response.data;

    const { token_type, access_token } = authResponse;

    // Establecer el token de autorización en las cabeceras de la instancia Axios
    instance.defaults.headers.post[
      "Authorization"
    ] = `${token_type} ${access_token}`;

    return {
      ok: true,
      authResponse,
    };
  } catch (error: any) {
    let messageError = "";
    if (error.response) {
      if (error.response.status === 404) {
        messageError = "Usuario o contraseña incorrectos";
      } else {
        messageError = "Ocurrió un error al procesar su solicitud";
      }
    } else {
      messageError = "Ocurrió un error inesperado al procesar su solicitud";
    }

    return {
      ok: false,
      messageError,
    };
  }
};

export const getUserInfo = async (
  authInfo: AuthResponse
): Promise<UserInfo | null> => {
  try {
    const config = {
      headers: {
        Authorization: `${authInfo.token_type} ${authInfo.access_token}`,
      },
    };

    const response = await instance.get("/user", config);
    const data = response.data as UserInfo;

    return data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const createNewUser = async (newUser: any) => {
  try {
    const response = await instance.post("/user", newUser);
    const data = response.data;
    return { ok: true, message: "¡El usuario se ha creado exitosamente!" };
  } catch (error: any) {
    return { ok: false, message: error.response.data.detail };
  }
};

export const updatePassword = async (
  newPassword: string,
  authInfo: AuthResponse
) => {
  try {
    const config = {
      headers: {
        Authorization: `${authInfo.token_type} ${authInfo.access_token}`,
      },
    };

    const response = await instance.put(
      "/user/update-credentials",
      { new_password: newPassword },
      config
    );

    const data = response.data;
    return {
      ok: true,
      message: "¡Las credenciales se han modificado exitosamente!",
    };
  } catch (error: any) {
    return { ok: false, message: error.response.data.detail };
  }
};
