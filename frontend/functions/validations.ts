import { Credentials } from "@/types/types";
import { NewUser } from "@/components/form-add-user/form-add-user.types";
import { UpdateCredentialsUser } from "@/components/form-update-credential-user/form-update-credential-user.types";

interface ResponseValidateCredentials {
  isValidate: boolean;
  message?: string;
}

const haveEmptyFields = (fieldValues: string[]): boolean => {
  const emptyFields = fieldValues.filter((elem) => elem.length === 0);
  return emptyFields.length === 0 ? false : true;
};

export const validateCredentials = ({
  user,
  password,
}: Credentials): ResponseValidateCredentials => {
  let message = "Todos los campos son correctos";
  let isValidate = true;

  if (haveEmptyFields([user, password])) {
    if (user.length === 0) {
      message = "El campo usuario es obligatorio";
      isValidate = false;
    } else if (password.length === 0) {
      message = "El campo contraseña es obligatorio";
      isValidate = false;
    }
  }

  return { isValidate, message };
};

export const validateFieldsAddForm = (
  userFormData: NewUser
): ResponseValidateCredentials => {
  let message = "Todos los campos son correctos";
  let isValidate = true;

  const { document, position, email } = userFormData;

  if (haveEmptyFields(Object.values(userFormData))) {
    isValidate = false;
    message = "Error, todos los campos son obligatorios";
  } else if (!isEmailValid(email)) {
    isValidate = false;
    message = "El campo email es incorrecto";
  } else if (!isDocumentValid(document)) {
    isValidate = false;
    message =
      "El documento no puede contener números, espacios o caracteres especiales";
  } else if (!isPositonValid(position)) {
    isValidate = false;
    message = "Cargo no válido para el sistema";
  }
  return { isValidate, message };
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
  return (
    position === "assistant" ||
    position === "professional" ||
    position === "administrator"
  );
};

export const validateUpdateCredentials = (
  updatedCredential: UpdateCredentialsUser
): ResponseValidateCredentials => {
  let message = "Todos los campos son correctos";
  let isValidate = true;

  const { password, confirmPassword } = updatedCredential;

  if (haveEmptyFields(Object.values(updatedCredential))) {
    message = "Todos los campos son obligatorios";
    isValidate = false;
  } else if (!passwordsMatch(password, confirmPassword)) {
    message = "Error al confirmar la contraseña. No coinciden";
    isValidate = false;
  }
  return { isValidate, message };
};

export const passwordsMatch = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword;
};
