import { ConfigProfile } from "@/components/config-profile/ConfigProfile";
import FormUpdateCredentialUser from "@/components/form-update-credential-user/FormUpdateCredentialUser";
import Modal from "@/components/modal/Modal";
import { useState } from "react";
import TagPosition from "@/components/tag-position/TagPosition";

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
      <ConfigProfile />
      <TagPosition />
    </main>
  );
}

export default Components;
