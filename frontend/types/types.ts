import { StringDictionary } from "@/hooks/useForm";

export interface Credentials extends StringDictionary {
  user: string;
  password: string;
}

export interface AuthResponse {
  token_type: string;
  access_token: string;
}

export interface UserAuthorized {
  email: string;
  role: string;
  idUser: string;
  exp: number;
}
