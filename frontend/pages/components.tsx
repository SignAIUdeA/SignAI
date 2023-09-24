import { ConfigProfile } from "@/components/config-profile/ConfigProfile";
import FilterSection from "@/components/filter-section/FilterSection";
import FormAddUser from "@/components/form-add-user/FormAddUser";
import FormUpdateCredentialUser from "@/components/form-update-credential-user/FormUpdateCredentialUser";
import InfoUser from "@/components/info-user/InfoUser";
import Modal from "@/components/modal/Modal";
import Table from "@/components/table/Table";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Components() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();

  // useEffect(() => {
  //   const auth = sessionStorage.getItem("authInfo");
  //   if (auth) {
  //     setIsLogin(true);
  //     return;
  //   } else {
  //     router.push("/newlogin");
  //     return;
  //   }
  // }, []);

  if (isLogin) {
    return (
      <main className="p-10">
        <h1 className="mb-[2rem]">Vista de los componentes</h1>
        <Table />
        <InfoUser name="Pedro Rodriguez" role="Administrador" />
        <FilterSection />
        <FormAddUser />
        <button onClick={() => setShowModal(!showModal)}>Abrir Modal</button>
        {!showModal || (
          <Modal setShowModal={setShowModal} closeButton={false}>
            <FormUpdateCredentialUser setShowModal={setShowModal} />
          </Modal>
        )}
        
        <ConfigProfile/>
      </main>
    );
  }
}

export default Components;
