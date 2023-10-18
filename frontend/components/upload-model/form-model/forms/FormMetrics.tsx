import { ChangeEvent } from "react";
import { ModelMetrics } from "../FormModel";
import styles from "./form.module.css";

interface Props {
  inputs: ModelMetrics;
  handleChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

const FormMetrics = ({ inputs, handleChange }: Props) => {
  return (
    <form className={styles.Form} onSubmit={(event) => event.preventDefault()}>
      <h2 className={`${styles.FormTitle} ${styles.FormSubtitle}`}>
        Metricas de Evaluación:
      </h2>
      <label htmlFor="precision">
        <span className={styles.FieldRequired}>Precisión</span>
        <input
          onChange={handleChange}
          value={inputs.precision}
          className={styles.Input}
          type="number"
          name="precision"
          id="precision"
          required
        />
      </label>
      <label htmlFor="sensitivy">
        Sensibilidad
        <input
          onChange={handleChange}
          value={inputs.sensitivy}
          className={styles.Input}
          type="number"
          name="sensitivy"
          id="sensitivy"
        />
      </label>
      <label htmlFor="specificity">
        Especificidad
        <input
          onChange={handleChange}
          value={inputs.specificity}
          className={styles.Input}
          type="number"
          name="specificity"
          id="specificity"
        />
      </label>
      <label htmlFor="f1Score">
        F1-Score
        <input
          onChange={handleChange}
          value={inputs.f1Score}
          className={styles.Input}
          type="number"
          name="f1Score"
          id="f1Score"
        />
      </label>
      <label htmlFor="rocAuc">
        ROC-AUC
        <input
          onChange={handleChange}
          value={inputs.rocAuc}
          className={styles.Input}
          type="number"
          name="rocAuc"
          id="rocAuc"
        />
      </label>
    </form>
  );
};

export default FormMetrics;
