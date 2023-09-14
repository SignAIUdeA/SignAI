import FilterSection from "@/components/filter-section/FilterSection";
import FormAddUser from "@/components/form-add-user/FormAddUser";
import InfoUser from "@/components/info-user/InfoUser";
import Table from "@/components/table/Table";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Components() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
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
      </main>
    );
  }
}

export default Components;
