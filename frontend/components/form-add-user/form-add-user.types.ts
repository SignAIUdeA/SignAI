import { StringDictionary } from "@/hooks/useForm";

export interface NewUser extends StringDictionary {
  name: string;
  lastName: string;
  username: string;
  email: string;
  document: string;
  position: string;
  location: string;
  university: string;
}
