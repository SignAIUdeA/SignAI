import FormUpdateCredentialUser from "@/components/form-update-credential-user/FormUpdateCredentialUser";
import Modal from "@/components/modal/Modal";
import { useState } from "react";
import TagPosition from "@/components/tag-position/TagPosition";
import UploadModel from "@/components/upload-model/UploadModel";
import axios from "axios";
import CardModel from "@/components/card-model/CardModel";
import { modelo } from "@/components/card-model/mock";
import SkeletonCardModel from "@/components/skeleton/skeleton-card-model/SkeletonCardModel";

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
      <button
        onClick={async () => {
          const instance = axios.create({
            baseURL: "http://127.0.0.1:8000/",
            timeout: 1000,
            headers: { "Content-Type": "application/json" },
          });

          const response = await instance.get(
            "http://127.0.0.1:8000/streaming/video/video.mp4"
          );

          console.log(response);
        }}>
        Ver video
      </button>

      <CardModel modelInfo={modelo} />

      {/* <SkeletonCardModel /> */}
    </main>
  );
}

export default Components;
