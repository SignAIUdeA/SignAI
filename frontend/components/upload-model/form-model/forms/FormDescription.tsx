import useForm, { StringDictionary } from "@/hooks/useForm";
import InputTags from "../../input-tags/InputTags";
import styles from "./form.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { ModelDescription } from "../FormModel";

const categoriasAI = [
  { value: "computerVision", label: "Visión por Computadora" },
  {
    value: "naturalLanguageProcessing",
    label: "Procesamiento de Lenguaje Natural",
  },
  { value: "reinforcementLearning", label: "Aprendizaje por Refuerzo" },
  { value: "audioProcessing", label: "Procesamiento de Audio" },
  { value: "dataAnalysisPrediction", label: "Análisis de Datos y Predicción" },
  { value: "automationRobotics", label: "Automatización y Robótica" },
  { value: "expertSystemsRules", label: "Sistemas Expertos y Reglas" },
  {
    value: "federatedLearningPrivacy",
    label: "Aprendizaje Federado y Privacidad de Datos",
  },
  {
    value: "graphicsSocialMedia",
    label: "Procesamiento de Gráficos y Redes Sociales",
  },
  { value: "documentAutomation", label: "Automatización de Documentos" },
];

interface Props {
  inputs: ModelDescription;
  handleChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  setTags: (newTags: string[]) => void;
  tags: string[];
}

const FormDescription = ({ inputs, handleChange, tags, setTags }: Props) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Validando Información");
  };

  return (
    <form className={styles.Form} onSubmit={(e) => handleSubmit(e)}>
      <h2 className={`${styles.FormTitle} ${styles.FormSubtitle}`}>
        Descripción:
      </h2>
      <label htmlFor="name">
        <span className={styles.FieldRequired}>Nombre</span>
        <input
          onChange={handleChange}
          className={styles.Input}
          type="text"
          name="name"
          id="name"
          value={inputs.name}
        />
      </label>
      <label htmlFor="description">
        <span className={styles.FieldRequired}>Descripción</span>
        <textarea
          onChange={handleChange}
          className={`${styles.Input} ${styles.InputArea}`}
          name="description"
          id="description"
          value={inputs.description}
        />
      </label>
      <label htmlFor="category">
        <span className={styles.FieldRequired}>Área de Investigación</span>
        <select
          className={`${styles.Input} py-[1rem]`}
          onChange={handleChange}
          name="category"
          id="category"
          value={inputs.category}>
          <option>Selecciona una categoria</option>
          {categoriasAI.map(({ label, value }, index) => (
            <option key={index} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <InputTags tags={tags} setTags={setTags} />
    </form>
  );
};

export default FormDescription;
