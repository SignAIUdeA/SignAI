import { Credentials } from "@/types/types";
import { UserForm } from "@/components/form-add-user/form-add-user.types";

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

export const validateFieldsAddForm = (
  userFormData: UserForm
): ResponseValidateCredentials => {
  let message = "";
  let isValidate = false;

  const {
    name,
    lastName,
    username,
    document,
    position,
    email,
    university,
    location,
  } = userFormData;

  const fieldEmpty = Object.values(userFormData).filter(
    (elem) => elem.length === 0
  );

  if (fieldEmpty.length === 0)
    return { isValidate, message: "Error, todos los campos son obligatorios" };

  return { isValidate, message };
};
