import styles from "./form-update-credential-user.module.css";
import useForm from "@/hooks/useForm";
import { UpdateCredentialsUser } from "./form-update-credential-user.types";
import { FormEvent, useState } from "react";
import { validateUpdateCredentials } from "@/functions/validations";
import ErrorMessage from "../error-message/ErrorMessage";

interface Props {
  setShowModal: (showModal: boolean) => void;
}

const userUpdateCredentialsDataForm: UpdateCredentialsUser = {
  user: "",
  password: "",
  confirmPassword: "",
};

const FormUpdateCredentialUser = ({ setShowModal }: Props) => {
  const { inputs, handleChange } = useForm<UpdateCredentialsUser>(
    userUpdateCredentialsDataForm
  );
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { message, isValidate } = validateUpdateCredentials(inputs);
    if (isValidate) {
      alert("Se ha actualizado el usuario");
      setShowModal(false);
    }
    setErrorMessage(message);

    setTimeout(() => {
      setErrorMessage(undefined);
    }, 5000);
  };

  return (
    <form method="POST" className={styles.Form} onSubmit={handleSubmit}>
      <h2 className={styles.FormTitle}>Actualizar Información</h2>
      <label htmlFor="user">
        Nuevo Usuario
        <input
          onChange={handleChange}
          className={styles.Input}
          type="text"
          name="user"
          id="user"
        />
      </label>
      <label htmlFor="password">
        Contraseña
        <input
          onChange={handleChange}
          className={styles.Input}
          type="password"
          name="password"
          id="password"
        />
      </label>
      <label htmlFor="confirmPassword">
        Repetir contraseña
        <input
          onChange={handleChange}
          className={styles.Input}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
        />
      </label>
      <section className={styles.WrapperButtons}>
        <button
          onClick={() => setShowModal(false)}
          className={`${styles.Btn} ${styles.BtnCancel}`}>
          Cancelar
        </button>
        <button
          disabled={errorMessage ? true : false}
          className={`${styles.Btn} ${styles.BtnUpdate}`}>
          Actualizar
        </button>
      </section>
      <ErrorMessage className="" errorMessage={errorMessage} />
    </form>
  );
};

export default FormUpdateCredentialUser;
