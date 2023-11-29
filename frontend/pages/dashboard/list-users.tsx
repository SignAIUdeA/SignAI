import FilterSection from "@/components/filter-section/FilterSection";
import Table from "@/components/table/Table";
import { getUsers } from "@/functions/users";
import Layout from "@/layouts/Layout";
import { UserTableInfo } from "@/types/types";
import { use, useEffect, useState } from "react";

const ListUsers = () => {
  const [listUsers, setListUsers] = useState<UserTableInfo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);

  useEffect(() => {
    getUsers(page).then((res) => {
      const { data } = res;
      const { items: list } = data;
      setMaxPage(data.pages);
      setListUsers(list);
    });
  }, [page]);

  return (
    <Layout>
      <div className="flex flex-col w-[100%] h-[100%] p-[2rem]">
        <FilterSection page={page} setPage={setPage} maxPages={maxPage} />
        {listUsers.length === 0 ? (
          "No hay usuarios"
        ) : (
          <Table listUsers={listUsers} />
        )}
      </div>
    </Layout>
  );
};

export default ListUsers;
