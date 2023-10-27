import { Modelo } from "@/components/card-model/mock";
import FilterSection from "@/components/filter-section/FilterSection";
import ListCardModels from "@/components/list-models/ListCardModels";
import { getModels } from "@/functions/model";
import Layout from "@/layouts/Layout";
import { useEffect, useState } from "react";

const transformar = (objetoOriginal: any): Modelo => {
  return {
    name: objetoOriginal.name,
    description: objetoOriginal.description,
    category: objetoOriginal.category,
    keyWords: objetoOriginal.key_words,
    precision: objetoOriginal.precision,
    sensitivity: objetoOriginal.sensitivity,
    specificity: objetoOriginal.specificity,
    f1Score: objetoOriginal.f1_score,
    rocAuc: objetoOriginal.roc_auc,
    version: objetoOriginal.version,
    notesVersion: objetoOriginal.notes_version,
    stateInvestigation: objetoOriginal.state_investigation,
    comments: objetoOriginal.comments,
    creationDate: objetoOriginal.creation_date,
    createdBy: objetoOriginal.created_by,
  };
};

const ListModels = () => {
  const [listModels, setListModels] = useState<Modelo[]>();
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);

  useEffect(() => {
    getModels(page).then((res) => {
      const { data } = res;
      const list = data.items.map((item: any) => transformar(item));
      console.log(data);
      setMaxPage(data.pages);
      setListModels(list);
    });
  }, [page]);

  console.log(listModels);

  return (
    <Layout>
      <div className="flex flex-col w-[100%] h-[100%] p-[2rem]">
        <FilterSection page={page} setPage={setPage} maxPages={maxPage} />
        <ListCardModels models={listModels} />
      </div>
    </Layout>
  );
};

export default ListModels;
