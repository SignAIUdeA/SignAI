import { StringDictionary } from "@/hooks/useForm";

export type RoleType = "administrator" | "assistant" | "professional";

export interface Credentials extends StringDictionary {
  user: string;
  password: string;
}

export interface AuthResponse {
  token_type: string;
  access_token: string;
}

export interface UserInfo {
  name: string;
  email: string;
  university: string;
  documentId: string;
  location: string;
  signs: any;
}

export interface UserAuthorized {
  email: string;
  role: RoleType;
  idUser: string;
  exp: number;
}
