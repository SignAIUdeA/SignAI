import { IconArrow, IconFilter } from "@/icons/Icons";
import style from "./filter-section.module.css";

interface Props {
  className?: string;
  page: number;
  maxPages: number;
  setPage: (page: number) => void;
}

const FilterSection = ({ className = "", setPage, page, maxPages }: Props) => {
  const backPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < maxPages) {
      setPage(page + 1);
    }
  };

  return (
    <section className={`${style.FilterSection} ${className}`}>
      <section className={style.BarSearch}>
        <input
          className={style.BarSearchInput}
          type="text"
          placeholder="Buscar..."
        />
      </section>
      <strong className={style.Pages}>
        {page}/{maxPages}
      </strong>
      <section className={style.Butttons}>
        <button
          className={`${style.ButtonArrow} ${style.Button}`}
          onClick={backPage}
          disabled={page === 1}>
          <IconArrow rotate="0deg" />
        </button>
        <button
          className={`${style.ButtonArrow} ${style.Button}`}
          onClick={nextPage}
          disabled={page === maxPages}>
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
