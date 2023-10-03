import FilterSection from "@/components/filter-section/FilterSection";
import Table from "@/components/table/Table";
import Layout from "@/layouts/Layout";

const ListUsers = () => {
  return (
    <Layout>
      <>
        <FilterSection />
        <Table />
      </>
    </Layout>
  );
};

export default ListUsers;
