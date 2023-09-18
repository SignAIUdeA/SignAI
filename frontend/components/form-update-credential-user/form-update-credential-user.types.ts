import { StringDictionary } from "@/hooks/useForm";

export interface UpdateCredentialsUser extends StringDictionary {
  user: string;
  password: string;
  confirmPassword: string;
}
