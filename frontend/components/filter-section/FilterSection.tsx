import { IconArrow, IconFilter } from "@/icons/Icons";
import style from "./filter-section.module.css";

interface Props {
  className?: string;
}

const FilterSection = ({ className = "" }: Props) => {
  return (
    <section className={`${style.FilterSection} ${className}`}>
      <section className={style.BarSearch}>
        <input
          className={style.BarSearchInput}
          type="text"
          placeholder="Buscar..."
        />
      </section>
      <section className={style.Butttons}>
        <button className={`${style.ButtonArrow} ${style.Button}`}>
          <IconArrow rotate="0deg" />
        </button>
        <button className={`${style.ButtonArrow} ${style.Button}`}>
          <IconArrow />
        </button>
        <button className={`${style.ButtonFilter} ${style.Button}`}>
          <IconFilter />
          Filtros
        </button>
      </section>
    </section>
  );
};

export default FilterSection;