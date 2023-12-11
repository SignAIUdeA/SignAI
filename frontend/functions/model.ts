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

export const createNewModel = async (
  newModel: string,
  file: File
): Promise<RequestResponse> => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("metadata", newModel);
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const response = await axios.post(
      "http://127.0.0.1:8000/model/",
      formData,
      config
    );

    return {
      ok: true,
      message: "Se ha creado la seña correctamente",
    };
  } catch (error: any) {
    return { ok: false, message: error.response.data.detail };
  }
};

export const getModels = async (
  page: number,
  size = 6
): Promise<RequestResponse> => {
  try {
    const response = await instance.get(`/model?page=${page}&size=${size}`);
    const data = response.data;
    return { ok: true, message: "¡Modelos obtenidos exitosamente!", data };
  } catch (error: any) {
    return { ok: false, message: error.response.data.detail };
  }
};

export const getModelFile = async (id: number): Promise<RequestResponse> => {
  try {
    const response = await instance.get(`/model/file/${id}`);
    const data = response.data;
    return { ok: true, message: "¡Modelo obtenido exitosamente!", data };
  } catch (error: any) {
    return { ok: false, message: error.response.data.detail };
  }
};
