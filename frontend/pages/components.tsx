import FilterSection from "@/components/filter-section/FilterSection";
import FormAddUser from "@/components/form-add-user/FormAddUser";
import FormUpdateCredentialUser from "@/components/form-update-credential-user/FormUpdateCredentialUser";
import InfoUser from "@/components/info-user/InfoUser";
import Modal from "@/components/modal/Modal";
import Table from "@/components/table/Table";
import useLogin from "@/hooks/useLogin";
import { RoleType } from "@/types/types";
import { useState } from "react";

const ROLES = {
  administrator: "Administrador",
  assistant: "Auxiliar",
  professional: "Profesional",
};

function Components() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { isLogin, userAuth, userInfo } = useLogin();

  if (isLogin) {
    const role = userAuth?.role as RoleType;

    return (
      <main className="p-10">
        <h1 className="mb-[2rem]">Vista de los componentes</h1>
        <Table />
        <InfoUser name={userInfo?.name as string} role={ROLES[role]} />
        <FilterSection />
        <FormAddUser />
        <button onClick={() => setShowModal(!showModal)}>Abrir Modal</button>
        {!showModal || (
          <Modal setShowModal={setShowModal} closeButton={false}>
            <FormUpdateCredentialUser setShowModal={setShowModal} />
          </Modal>
        )}
      </main>
    );
  }
}

export default Components;
