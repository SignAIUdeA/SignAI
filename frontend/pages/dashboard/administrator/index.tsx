import FilterSection from "@/components/filter-section/FilterSection";
import Table from "@/components/table/Table";
import Layout from "@/layouts/Layout";
import Layoutp from "@/layouts/Layoutp";

const Administrator = () => {
  return (
    <Layoutp role="administrator">
      <div>
        <FilterSection />
        <Table />
      </div>
    </Layoutp>
  );
};

export default Administrator;
