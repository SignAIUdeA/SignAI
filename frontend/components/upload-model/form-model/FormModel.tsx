import { useState } from "react";
import styles from "./form-model.module.css";
import FormDescription from "./forms/FormDescription";
import FormMetrics from "./forms/FormMetrics";
import FormStateVersion from "./forms/FormStateVersion";
import useForm, { StringDictionary } from "@/hooks/useForm";
import {
  ResponseValidation,
  validateFormDescriptionModel,
  validateFormMetricsModel,
  validateFormStateVersion,
} from "@/functions/validations";
import ErrorMessage from "@/components/error-message/ErrorMessage";
import SuccesfulMessage from "@/components/successful-message/SuccesfulMessage";
import Modal from "@/components/modal/Modal";
import { useRouter } from "next/router";
import { NewModelInteface } from "@/types/types";
import { createNewModel } from "@/functions/model";
import { CATEGORIAS_AI, STATE_INVESTIGATION } from "@/constants/model-info";
import { useUserStore } from "@/store/userStore";

interface Props {
  file: File;
  setShowModal: (showModal: boolean) => void;
}

export interface ModelDescription extends StringDictionary {
  name: string;
  description: string;
  category: string;
}

export interface ModelMetrics extends StringDictionary {
  precision: string;
  sensitivy: string;
  specificity: string;
  f1Score: string;
  rocAuc: string;
}

export interface ModelStateVersion extends StringDictionary {
  version: string;
  notesVersion: string;
  stateInvestigation: string;
  comments: string;
}

const modelDescription: ModelDescription = {
  name: "",
  category: "",
  description: "",
};

const modelMetrics: ModelMetrics = {
  precision: "",
  specificity: "",
  sensitivy: "",
  f1Score: "",
  rocAuc: "",
};

const modelStateVersion: ModelStateVersion = {
  version: "",
  notesVersion: "",
  stateInvestigation: "",
  comments: "",
};

const FormModel = ({ file, setShowModal }: Props) => {
  const userInfo = useUserStore((state) => state.userInfo);
  const nameUser = userInfo?.name;

  const {
    inputs: inputsModelDescription,
    handleChange: handleChangeModelDescription,
  } = useForm<ModelDescription>(modelDescription);

  const { inputs: inputsModelMetrics, handleChange: handleChangeModelMetrics } =
    useForm<ModelMetrics>(modelMetrics);

  const {
    inputs: inputsModelStateVersion,
    handleChange: handleChangeModelStateVersion,
  } = useForm<ModelStateVersion>(modelStateVersion);

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [tags, setTags] = useState<string[]>([]);

  const router = useRouter();

  const [showModalSuccesfully, setShowModalSuccesfully] =
    useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const formList = [
    <FormDescription
      setTags={setTags}
      tags={tags}
      inputs={inputsModelDescription}
      handleChange={handleChangeModelDescription}
    />,
    <FormMetrics
      inputs={inputsModelMetrics}
      handleChange={handleChangeModelMetrics}
    />,
    <FormStateVersion
      inputs={inputsModelStateVersion}
      handleChange={handleChangeModelStateVersion}
    />,
  ];

  const backStep = () => {
    setCurrentStepIndex((prev) => {
      if (prev !== 0) return (prev -= 1);
      return prev;
    });
  };

  const nextStep = () => {
    setCurrentStepIndex((prev) => {
      if (prev === formList.length - 1) return (prev = 0);
      return (prev += 1);
    });
  };

  const handleClickNext = () => {
    const dataFormDescription = {
      name: inputsModelDescription.name,
      description: inputsModelDescription.description,
      category: inputsModelDescription.category,
      keyWords: tags,
    };

    let response: ResponseValidation;

    if (currentStepIndex === 0) {
      response = validateFormDescriptionModel(dataFormDescription);
    } else if (currentStepIndex === 1) {
      response = validateFormMetricsModel(inputsModelMetrics);
    } else if (currentStepIndex === 2) {
      response = validateFormStateVersion(inputsModelStateVersion);
    } else {
      response = { isValidate: false, message: "Índice no reconocido" };
    }

    if (response.isValidate) {
      if (currentStepIndex === 2) {
        const newModelData: NewModelInteface = {
          name: dataFormDescription.name,
          description: dataFormDescription.description,
          category: dataFormDescription.category,
          key_words: dataFormDescription.keyWords,
          precision: inputsModelMetrics.precision,
          sensitivity: inputsModelMetrics.sensitivy,
          specificity: inputsModelMetrics.specificity,
          f1_score: inputsModelMetrics.f1Score,
          roc_auc: inputsModelMetrics.rocAuc,
          version: inputsModelStateVersion.version,
          notes_version: inputsModelStateVersion.notesVersion,
          state_investigation: inputsModelStateVersion.stateInvestigation,
          comments: inputsModelStateVersion.comments,
          created_by: nameUser || "",
          creation_date: "",
        };
        createNewModel(newModelData);
        setShowModalSuccesfully(true);
        let timeout: ReturnType<typeof setTimeout>;
        timeout = setTimeout(() => {
          router.reload();
          clearTimeout(timeout);
        }, 2000);
      }
      nextStep();
      return;
    }
    setErrorMessage(response.message);

    let timeout: ReturnType<typeof setTimeout>;
    timeout = setTimeout(() => {
      setErrorMessage(undefined);
      clearTimeout(timeout);
    }, 5000);
  };

  const handleClickBack = () => {
    if (currentStepIndex === 0) setShowModal(false);
    backStep();
  };

  return (
    <>
      <section className={styles.InformationModel}>
        <h1 className={styles.FormTitle}>Información del modelo</h1>
        <div className={styles.FormProgress}>
          {formList.map((elem, index) => (
            <span
              key={index}
              className={
                currentStepIndex >= index
                  ? `${styles.Circle} ${styles.CircleFill}`
                  : styles.Circle
              }></span>
          ))}
        </div>
        {formList[currentStepIndex]}
        <section className={styles.WrapperButtons}>
          <button
            onClick={handleClickBack}
            className={`${styles.Btn} ${styles.BtnCancel}`}>
            {currentStepIndex === 0 ? "Cancelar" : "Atrás"}
          </button>
          <button
            onClick={handleClickNext}
            disabled={Boolean(errorMessage)}
            className={`${styles.Btn} ${styles.BtnUpdate}`}>
            {currentStepIndex === formList.length - 1 ? "Enviar" : "Siguiente"}
          </button>
        </section>
        <ErrorMessage className="" errorMessage={errorMessage} />
      </section>
      {!showModalSuccesfully || (
        <Modal setShowModal={setShowModalSuccesfully} closeButton={true}>
          <SuccesfulMessage message={"El modelo ha sido creado con exito"} />
        </Modal>
      )}
    </>
  );
};

export default FormModel;
