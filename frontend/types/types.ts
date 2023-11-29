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

export interface NewModelInteface {
  name: string;
  description: string;
  category: string;
  key_words: string[];
  precision: string;
  sensitivity: string;
  specificity: string;
  f1_score: string;
  roc_auc: string;
  version: string;
  notes_version: string;
  state_investigation: string;
  comments: string;
  created_by: string;
  creation_date: string;
}

export interface UserTableInfo {
  id: string;
  name: string;
  email: string;
  creation_date: string;
  modification_data: string;
  role: string;
  location: string;
  documentId: string;
  university: string;
}
