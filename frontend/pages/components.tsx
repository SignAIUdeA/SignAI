import FormUpdateCredentialUser from "@/components/form-update-credential-user/FormUpdateCredentialUser";
import Modal from "@/components/modal/Modal";
import { useState } from "react";
import TagPosition from "@/components/tag-position/TagPosition";
import UploadModel from "@/components/upload-model/UploadModel";

function Components() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <main className="p-10">
      <button onClick={() => setShowModal(!showModal)}>Abrir Modal</button>
      {!showModal || (
        <Modal setShowModal={setShowModal} closeButton={false}>
          <FormUpdateCredentialUser setShowModal={setShowModal} />
        </Modal>
      )}
      {/* <ConfigProfile /> */}
      <TagPosition />
      <video width={360} controls muted>
        <source
          src="http://127.0.0.1:8000/streaming/video/video.mp4"
          type="video/mp4"
        />
      </video>
      <UploadModel />
    </main>
  );
}

export default Components;
