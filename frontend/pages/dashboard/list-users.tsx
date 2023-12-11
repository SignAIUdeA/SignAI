import FilterSection from "@/components/filter-section/FilterSection";
import Table from "@/components/table/Table";
import { getUsers } from "@/functions/users";
import Layout from "@/layouts/Layout";
import { useUserStore } from "@/store/userStore";
import { UserTableInfo } from "@/types/types";
import { use, useEffect, useState } from "react";

const ListUsers = () => {
  const [listUsers, setListUsers] = useState<UserTableInfo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);
  const userLogin = useUserStore((state) => state.userInfo);

  useEffect(() => {
    getUsers(page).then((res) => {
      const { data } = res;
      const list: UserTableInfo[] = data.items;
      setMaxPage(data.pages);
      const newList = list.filter((user) => user.email !== userLogin?.email);
      setListUsers(newList);
    });
  }, [page]);

  return (
    <Layout>
      <div className="flex flex-col w-[100%] h-[100%] p-[2rem]">
        <FilterSection page={page} setPage={setPage} maxPages={maxPage} />
        {listUsers.length === 0 ? (
          <h3 className="text-gray-800">No hay usuarios...</h3>
        ) : (
          <Table listUsers={listUsers} />
        )}
      </div>
    </Layout>
  );
};

export default ListUsers;
