import { ChangeEvent } from "react";
import { ModelStateVersion } from "../FormModel";
import styles from "./form.module.css";

const investigationStates = [
  { value: "inDevelopment", label: "En desarrollo" },
  { value: "inTesting", label: "En pruebas" },
  { value: "readyForProduction", label: "Listo para producción" },
];

interface Props {
  inputs: ModelStateVersion;
  handleChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

const FormStateVersion = ({ inputs, handleChange }: Props) => {
  return (
    <form className={styles.Form} onSubmit={(event) => event.preventDefault()}>
      <h2 className={`${styles.FormTitle} ${styles.FormSubtitle}`}>
        Versión del modelo y estado de investigación:
      </h2>
      <label htmlFor="version">
        <span className={styles.FieldRequired}>Versión</span>
        <input
          onChange={handleChange}
          className={styles.Input}
          type="text"
          name="version"
          id="version"
          value={inputs.version}
          placeholder="v1.0.0"
        />
      </label>
      <label htmlFor="notesVersion">
        Notas de la versión
        <textarea
          onChange={handleChange}
          className={`${styles.Input} ${styles.InputArea}`}
          name="notesVersion"
          id="notesVersion"
          value={inputs.notesVersion}
        />
      </label>
      <label htmlFor="stateInvestigation">
        <span className={styles.FieldRequired}>Estado de Investigación</span>
        <select
          className={`${styles.Input} py-[1rem]`}
          name="stateInvestigation"
          id="stateInvestigation"
          value={inputs.stateInvestigation}
          onChange={handleChange}>
          <option>Selecciona un estado</option>
          {investigationStates.map(({ label, value }, index) => (
            <option key={index} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="comments">
        Comentarios
        <textarea
          onChange={handleChange}
          className={`${styles.Input} ${styles.InputArea}`}
          name="comments"
          id="comments"
          value={inputs.comments}
        />
      </label>
    </form>
  );
};

export default FormStateVersion;
