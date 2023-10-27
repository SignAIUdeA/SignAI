import FilterSection from "@/components/filter-section/FilterSection";
import Table from "@/components/table/Table";
import Layout from "@/layouts/Layout";

const ListUsers = () => {
  return (
    <Layout>
      <div className="flex flex-col w-[100%] h-[100%] p-[2rem]">
        <FilterSection />
        <Table />
      </div>
    </Layout>
  );
};

export default ListUsers;
