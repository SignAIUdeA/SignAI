import { CardSignType } from "@/components/card/card.services";
import FilterSection from "@/components/filter-section/FilterSection";
import ListSigns from "@/components/list-signs/ListSigns";
import { getSigns } from "@/functions/sign";
import Layout from "@/layouts/Layout";
import { useEffect, useState } from "react";

const Inbox = () => {
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);
  const [listSigns, setListSigns] = useState<CardSignType[]>([]);

  useEffect(() => {
    getSigns(page).then((res) => {
      const { data } = res;
      setListSigns(data.items);
      setMaxPage(data.pages);
    });
  }, []);

  return (
    <Layout>
      <div className="flex flex-col w-[100%] h-[100%] px-[2rem] py-[1.5rem]">
        <FilterSection page={page} setPage={setPage} maxPages={maxPage} />
        <ListSigns listSigns={listSigns} />
      </div>
    </Layout>
  );
};

export default Inbox;
