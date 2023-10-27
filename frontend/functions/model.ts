import { Modelo } from "@/components/card-model/mock";
import { NewModelInteface } from "@/types/types";
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

export const createNewModel = async (
  newModel: NewModelInteface
): Promise<RequestResponse> => {
  try {
    const response = await instance.post("/model", newModel);
    const data = response.data;
    return { ok: true, message: "¡El modelo se ha creado exitosamente!" };
  } catch (error: any) {
    return { ok: false, message: error.response.data.detail };
  }
};

export const getModels = async (
  page: number,
  size = 3
): Promise<RequestResponse> => {
  try {
    const response = await instance.get(`/model?page=${page}&size=${size}`);
    const data = response.data;
    return { ok: true, message: "¡Modelos obtenidos exitosamente!", data };
  } catch (error: any) {
    return { ok: false, message: error.response.data.detail };
  }
};
