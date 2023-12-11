import { ChangeEvent, useRef } from "react";
import { DragEvent } from "react";
import styles from "./drag-drop-files.module.css";

interface DragDropFilesProps {
  label: string;
  setFile: (file: File) => void;
  setShowModal: (showModal: boolean) => void;
}

const DragDropFiles = ({
  label,
  setFile,
  setShowModal,
}: DragDropFilesProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

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

  return (
    <div
      className={styles.Wrapper}
      onDrop={handleDrop}
      onDragOver={handleDragOver}>
      <section className={styles.UploadSection}>
        <p className={styles.Title}>{label}</p>
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

export default DragDropFiles;
