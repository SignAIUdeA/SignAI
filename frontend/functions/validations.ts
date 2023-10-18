import { Credentials } from "@/types/types";
import { NewUser } from "@/components/form-add-user/form-add-user.types";
import { UpdateCredentialsUser } from "@/components/form-update-credential-user/form-update-credential-user.types";
import {
  ModelDescription,
  ModelMetrics,
  ModelStateVersion,
} from "@/components/upload-model/form-model/FormModel";

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

export const isVersionValid = (version: string): boolean => {
  const versionRegex = /^v\d+\.\d+\.\d+$/;
  return versionRegex.test(version);
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

export interface ResponseValidation {
  isValidate: boolean;
  message: string;
}

export interface ModelDescriptionAll {
  name: string;
  category: string;
  description: string;
  keyWords: string[];
}

export const validateFormDescriptionModel = (
  formDescriptionData: ModelDescriptionAll
): ResponseValidation => {
  if (
    haveEmptyFields([
      formDescriptionData.name,
      formDescriptionData.category,
      formDescriptionData.name,
    ])
  ) {
    return {
      isValidate: false,
      message: "Los campos con asterisco son obligatorios.",
    };
  }
  return { isValidate: true, message: "Todos los campos son correctos" };
};

const isValidRangeValues = (values: number[]): boolean => {
  const foundInvalidValues = values.filter((value) => value < 0 || value > 1);
  return Boolean(foundInvalidValues.length === 0);
};

export const validateFormMetricsModel = (
  formMetricsData: ModelMetrics
): ResponseValidation => {
  if (formMetricsData.precision.length === 0)
    return {
      isValidate: false,
      message: "La precisión es un campo obligatorio",
    };

  const values = Object.values(formMetricsData).map((value) =>
    parseFloat(value)
  );

  if (!isValidRangeValues(values))
    return {
      isValidate: false,
      message: "Los valores se encuentran fuera del rango [0 - 1]",
    };

  return { isValidate: true, message: "Todos los campos son correctos" };
};

export const validateFormStateVersion = (
  formStateVersion: ModelStateVersion
): ResponseValidation => {
  if (
    haveEmptyFields([
      formStateVersion.version,
      formStateVersion.stateInvestigation,
    ])
  )
    return {
      isValidate: false,
      message:
        "La versión y el estado de investigación son campos obligatorios",
    };

  if (!isVersionValid(formStateVersion.version))
    return {
      isValidate: false,
      message: "La versión tiene un formato incorrecto",
    };
  return { isValidate: true, message: "Todos los campos son correctos" };
};
