import { AuthResponse } from "@/types/types";
import axios from "axios";

interface RequestResponse {
  ok: boolean;
  message: string;
  data?: any;
}

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export const createNewSign = async (
  label: string,
  file: File,
  authInfo: AuthResponse
): Promise<RequestResponse> => {
  const metadata = {
    label: label,
  };

  const formData = new FormData();
  formData.append("metadata", JSON.stringify(metadata));
  formData.append("file", file);

  try {
    const config = {
      headers: {
        Authorization: `${authInfo.token_type} ${authInfo.access_token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    const response = await axios.post(
      "http://127.0.0.1:8000/signs/",
      formData,
      config
    );

    return {
      ok: true,
      message: "Se ha creado la seña correctamente",
    };
  } catch (error: any) {
    return { ok: false, message: error.message };
  }
};

export const getSigns = async (
  page: number,
  size = 6
): Promise<RequestResponse> => {
  try {
    const response = await instance.get(`/signs/all?page=${page}&size=${size}`);
    const data = response.data;
    console.log(data);

    return { ok: true, message: "¡Señas obtenidas exitosamente!", data };
  } catch (error: any) {
    return { ok: false, message: error.message };
  }
};

export const getInfoSigs = async (): Promise<RequestResponse> => {
  try {
    const response = await instance.get("/signs/data-analysis");
    const data = response.data;
    return { ok: true, message: "¡Información obtenida exitosamente!", data };
  } catch (error: any) {
    return { ok: false, message: error.message };
  }
};

export const changeSignLabel = async (
  id: string,
  newLabel: string
): Promise<RequestResponse> => {
  try {
    const response = await instance.put(`/signs/${id}`, { label: newLabel });
    const data = response.data;
    return {
      ok: true,
      message: "¡La etiqueta ha sido cambiada exitosamente!",
    };
  } catch (error: any) {
    return { ok: false, message: error.message };
  }
};

export const approveSign = async (id: string): Promise<RequestResponse> => {
  try {
    const response = await instance.put(`/signs/approve/${id}`);
    const data = response.data;
    return {
      ok: true,
      message: "¡La etiqueta ha sido aprovada exitosamente!",
    };
  } catch (error: any) {
    return { ok: false, message: error.message };
  }
};
