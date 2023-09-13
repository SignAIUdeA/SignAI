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
  let isValidate = true;

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

  if (fieldEmpty.length !== 0)
    return {
      isValidate: false,
      message: "Error, todos los campos son obligatorios",
    };
  else if (!isEmailValid(email))
    return { isValidate: false, message: "El campo email es incorrecto" };
  else if (!isDocumentValid(document))
    return {
      isValidate: false,
      message:
        "El documento no puede contener números, espacios o caracteres especiales",
    };
  else if (!isPositonValid(position)) {
    return {
      isValidate: false,
      message: "Cargo no válido para el sistema",
    };
  }
  return { isValidate };
};

export const isEmailValid = (email: string): boolean => {
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegExp.test(email);
};

export const isDocumentValid = (document: string): boolean => {
  const numerosRegExp = /^[0-9]+$/;
  return numerosRegExp.test(document);
};

export const isPositonValid = (position: string): boolean => {
  if (
    position === "Auxiliar" ||
    position === "Profesional" ||
    position === "Administrador"
  )
    return true;
  return false;
};
