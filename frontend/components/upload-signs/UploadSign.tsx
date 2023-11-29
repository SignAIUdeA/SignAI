import DragDropFiles from "@/components/drag-drop-files/DragDropFiles";
import { useState } from "react";
import Modal from "../modal/Modal";
import FormSign from "./form-sign/FormSign";

const UploadSign = () => {
  const [file, setFile] = useState<File>();
  const [showModal, setShowModal] = useState<boolean>(false);

  if (showModal)
    return (
      <Modal setShowModal={setShowModal} closeButton={true}>
        <FormSign setShowModal={setShowModal} file={file as File} />
      </Modal>
    );

  return (
    <DragDropFiles
      label="Arrastra las señas aquí"
      setFile={setFile}
      setShowModal={setShowModal}
    />
  );
};

export default UploadSign;
