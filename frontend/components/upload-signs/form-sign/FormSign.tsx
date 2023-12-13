import useForm, { StringDictionary } from "@/hooks/useForm";
import style from "./form-sign.module.css";
import { useState } from "react";
import { createNewSign } from "@/functions/sign";
import { AuthResponse } from "@/types/types";
import ErrorMessage from "@/components/error-message/ErrorMessage";
import Modal from "@/components/modal/Modal";
import SuccesfulMessage from "@/components/successful-message/SuccesfulMessage";

interface Props {
  file: File;
  setShowModal: (showModal: boolean) => void;
}

interface FormSign extends StringDictionary {
  label: string;
}

const FormSign = ({ setShowModal, file }: Props) => {
  const { inputs, handleChange } = useForm<FormSign>({
    label: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const [showModalSuccesfully, setShowModalSuccesfully] = useState<boolean>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let timeout: any;
    if (inputs.label.trim() === "") {
      setErrorMessage("El campo de etiqueta no puede estar vacío");
      timeout = setTimeout(() => {
        setErrorMessage(undefined);
      }, 3000);
    } else {
      const authInfo = sessionStorage.getItem("authInfo");
      const authInfoParse = JSON.parse(authInfo as string) as AuthResponse;
      createNewSign(inputs.label, file, authInfoParse).then((res) => {
        if (res.ok) {
          setShowModalSuccesfully(true);
          timeout = setTimeout(() => {
            setShowModal(false);
            setShowModalSuccesfully(false);
          }, 3000);
        }
      });
    }

    return () => clearInterval(timeout);
  };

  return (
    <>
      <form className={style.Form} onSubmit={(e) => handleSubmit(e)}>
        <h2 className={style.FormSubtitle}>Información de las señas</h2>
        <label htmlFor="label">
          <span className={style.FieldRequired}>Añade una etiqueta</span>
          <input
            className={style.Input}
            type="text"
            name="label"
            id="label"
            onChange={handleChange}
            required
          />
        </label>
        <section className={style.WrapperButtons}>
          <button
            className={`${style.Btn} ${style.BtnCancel}`}
            onClick={() => setShowModal(false)}>
            Cancelar
          </button>
          <button className={`${style.Btn} ${style.BtnUpdate}`}>Enviar</button>
        </section>
        <ErrorMessage className="" errorMessage={errorMessage} />
      </form>

      {!showModalSuccesfully || (
        <Modal setShowModal={setShowModalSuccesfully} closeButton={true}>
          <SuccesfulMessage message={"La señal ha sido creada con exito"} />
        </Modal>
      )}
    </>
  );
};

export default FormSign;
