import axios from "axios";

interface RequestResponse {
  ok: boolean;
  message: string;
  data?: any;
  //authResponse?: AuthResponse;
}

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export const getUsers = async (
  page: number,
  size = 6
): Promise<RequestResponse> => {
  try {
    const response = await instance.get(`/user/all/?page=${page}&size=${size}`);
    const data = response.data;
    return { ok: true, message: "¡Usuarios obtenidos exitosamente!", data };
  } catch (error: any) {
    return { ok: false, message: "Error al obtener usuarios" };
  }
};

export const deleteUser = async (id: string): Promise<RequestResponse> => {
  try {
    const response = await instance.delete(`/user/${id}`);
    const data = response.data;
    return { ok: true, message: "¡Usuario eliminado exitosamente!", data };
  } catch (error: any) {
    return { ok: false, message: "Error al eliminar el usuario" };
  }
};

export const getUserInformationById = async (
  id: string
): Promise<RequestResponse> => {
  try {
    const response = await instance.get(`/user/${id}`);
    const data = response.data;
    return { ok: true, message: "¡Usuario obtenido exitosamente!", data };
  } catch (error: any) {
    return { ok: false, message: "Error al obtener el usuario" };
  }
};
