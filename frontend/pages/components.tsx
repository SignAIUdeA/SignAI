import Table from "@/components/table/Table";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Components() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const auth = sessionStorage.getItem("authInfo");
    if (auth) {
      setIsLogin(true);
      return;
    } else {
      router.push("/newlogin");
      return;
    }
  }, []);

  if (isLogin) {
    return (
      <main className="p-10">
        <h1 className="mb-[2rem]">Vista de los componentes</h1>
        <Table />
      </main>
    );
  }
}

export default Components;
