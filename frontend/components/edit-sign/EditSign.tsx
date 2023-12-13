import { useEffect, useState } from "react";
import styles from "./edit-sign.module.css";
import ErrorMessage from "../error-message/ErrorMessage";
import { changeSignLabel } from "@/functions/sign";
import { useRouter } from "next/router";

interface Props {
  idVideo: string;
  setShowModal: (value: boolean) => void;
}

const EditSign = ({ idVideo, setShowModal }: Props) => {
  const [label, setLabel] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (errorMessage !== "") {
      timeout = setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [errorMessage]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (label.trim() === "") {
      setErrorMessage("El campo no puede estar vacío");
    }
    changeSignLabel(idVideo, label).then((res) => {
      const { ok, message } = res;
      if (ok) {
        router.reload();
        return;
      }
      setErrorMessage(message);
    });
  };

  return (
    <section className="flex flex-col gap-8 min-w-[320px] p-4">
      <div>
        <video className="rounded-lg" width={360} controls muted>
          <source
            type="video/mp4"
            src={`http://127.0.0.1:8000/streaming/video/${idVideo}.mp4`}
          />
        </video>
      </div>
      <div className="flex flex-col gap-4 items-center justify-between">
        <h3 className={styles.FormTitle}>Cambiar Etiqueta</h3>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <label htmlFor="label">
            Nueva etiqueta
            <input
              className={styles.Input}
              type="text"
              name="label"
              id="label"
              onChange={(e) => setLabel(e.target.value)}
            />
          </label>
          <div className={styles.WrapperBtns}>
            <button
              className={`${styles.BtnCancel} ${styles.Btn}`}
              onClick={() => setShowModal(false)}>
              Cancelar
            </button>
            <button
              className={`${styles.BtnConfirm} ${styles.Btn}`}
              disabled={Boolean(errorMessage.length !== 0)}>
              Cambiar
            </button>
          </div>
          <ErrorMessage errorMessage={errorMessage} className={""} />
        </form>
      </div>
    </section>
  );
};

export default EditSign;
