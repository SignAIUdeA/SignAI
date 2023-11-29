import style from "./form-sign.module.css";

interface Props {
  file: File;
  setShowModal: (showModal: boolean) => void;
}

const FormSign = ({ setShowModal, file }: Props) => {
  return (
    <form className={style.Form}>
      <h2 className={style.FormSubtitle}>Información de las señas</h2>
      <label htmlFor="label">
        <span className={style.FieldRequired}>Añade una etiqueta</span>
        <input
          className={style.Input}
          type="text"
          name="label"
          id="label"
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
    </form>
  );
};

export default FormSign;
