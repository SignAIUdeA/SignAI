import { IconAvatarUser } from "@/icons/Icons";
import styles from "./form-add-user.module.css";
import useForm from "@/hooks/useForm";
import { FormEvent, useState } from "react";
import { validateFieldsAddForm } from "@/functions/validations";
import { NewUser } from "./form-add-user.types";
import ErrorMessage from "../error-message/ErrorMessage";
import { createNewUser } from "@/functions/login";
import Modal from "../modal/Modal";
import SuccesfulMessage from "../successful-message/SuccesfulMessage";

const userDataForm: NewUser = {
  name: "",
  lastName: "",
  username: "",
  email: "",
  document: "",
  position: "",
  location: "",
  university: "",
};

interface Props {
  className?: string;
}

const FormAddUser = ({ className = "" }: Props) => {
  const { inputs, handleChange } = useForm<NewUser>(userDataForm);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [messageSuccesfully, setMessageSuccesfully] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const responseValidation = validateFieldsAddForm(inputs);

    if (responseValidation.isValidate) {
      const newUser = {
        name: inputs.name + " " + inputs.lastName,
        email: inputs.email,
        university: inputs.university,
        documentId: inputs.document,
        location: inputs.location,
        role: inputs.position,
      };

      createNewUser(newUser).then((res) => {
        if (res.ok) {
          setMessageSuccesfully(res.message);
          setShowModal(true);
        } else {
          setErrorMessage(res.message);
        }
      });
    } else {
      setErrorMessage(responseValidation.message);
    }

    setTimeout(() => {
      setErrorMessage(undefined);
    }, 5000);

    return;
  };

  return (
    <>
      <form
        method="POST"
        className={`${styles.Form} ${className}`}
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        <div className={styles.AvatarContainer}>
          <IconAvatarUser width="100px" height="100px" />
        </div>
        <h3 className={styles.FormTitle}>Información Personal</h3>
        <section className={styles.WrapperInputs}>
          <label htmlFor="name">
            Nombres
            <input
              onChange={handleChange}
              className={styles.Input}
              type="text"
              name="name"
              id="name"
            />
          </label>
          <label htmlFor="username">
            Usuario
            <input
              onChange={handleChange}
              className={styles.Input}
              type="text"
              name="username"
              id="username"
            />
          </label>
          <label htmlFor="document">
            N° Documento
            <input
              onChange={handleChange}
              className={styles.Input}
              type="number"
              name="document"
              id="document"
            />
          </label>
          <label htmlFor="location">
            Localidad
            <input
              onChange={handleChange}
              className={styles.Input}
              type="text"
              name="location"
              id="location"
            />
          </label>

          <label htmlFor="lastName">
            Apellidos
            <input
              onChange={handleChange}
              className={styles.Input}
              type="text"
              name="lastName"
              id="lastName"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              onChange={handleChange}
              className={styles.Input}
              type="email"
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="position">
            Cargo
            <select
              className={`${styles.Input} py-[0.2rem]`}
              onChange={handleChange}
              name="position"
              id="position">
              <option>Selecciona un cargo</option>
              <option value="administrator">Administrador</option>
              <option value="professional">Profesional</option>
              <option value="assistant">Auxiliar</option>
            </select>
          </label>
          <label htmlFor="university">
            Universidad
            <input
              onChange={handleChange}
              className={styles.Input}
              type="text"
              name="university"
              id="university"
            />
          </label>
        </section>
        <button
          disabled={errorMessage ? true : false}
          className={styles.BtnForm}>
          Crear Usuario
        </button>
        <ErrorMessage className="" errorMessage={errorMessage} />
      </form>
      {!showModal || (
        <Modal setShowModal={setShowModal} closeButton={true}>
          <SuccesfulMessage message={messageSuccesfully} />
        </Modal>
      )}
    </>
  );
};

export default FormAddUser;
