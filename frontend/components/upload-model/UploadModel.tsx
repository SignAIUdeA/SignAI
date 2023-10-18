import { ChangeEvent, useRef, useState } from "react";
import styles from "./upload-model.module.css";
import { DragEvent } from "react";
import FormModel from "./form-model/FormModel";
import Modal from "../modal/Modal";

const UploadModel = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      const file = event.target.files[0];
      console.log(file);
      setFile(file);
      setShowModal(true);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer) {
      setFile(event.dataTransfer.files[0]);
      setShowModal(true);
    }
  };

  if (showModal)
    return (
      <Modal setShowModal={setShowModal} closeButton={false}>
        <FormModel file={file as File} setShowModal={setShowModal} />
      </Modal>
    );

  return (
    <div
      className={styles.Wrapper}
      onDrop={handleDrop}
      onDragOver={handleDragOver}>
      <section className={styles.UploadSection}>
        <p className={styles.Title}>Arrastra el modelo aquí</p>
        <div className={styles.WrapperOption}>
          <span className={styles.Line}></span>
          <span className={styles.Or}>O</span>
          <span className={styles.Line}></span>
        </div>
        <input
          type="file"
          multiple={false}
          hidden
          ref={inputFileRef}
          onChange={handleFileChange}
        />
        <button
          className={styles.Btn}
          onClick={() => inputFileRef.current?.click()}>
          Busca en tus archivos
        </button>
      </section>
    </div>
  );
};

export default UploadModel;
