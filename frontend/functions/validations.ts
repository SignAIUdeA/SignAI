import { Credentials } from "@/types/types";

interface ResponseValidateCredentials {
  isValidate: boolean;
  message?: string;
}

export const validateCredentials = ({
  user,
  password,
}: Credentials): ResponseValidateCredentials => {
  let message = "";
  let isValidate = false;

  if (user.length !== 0 && password.length !== 0) {
    isValidate = true;
    return { isValidate };
  } else if (user.length === 0) {
    message = "El campo usuario es obligatorio";
  } else if (password.length === 0) {
    message = "El campo contraseña es obligatorio";
  }

  return { isValidate: false, message };
};
