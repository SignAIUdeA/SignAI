import { CATEGORIAS_AI } from "@/constants/model-info";
import style from "./card-model.module.css";

interface Props {
  name: string;
  description: string;
  category: string;
  keyWords: string[];
}

const CardBasicDescription = ({
  name,
  description,
  category,
  keyWords,
}: Props) => {
  console.log("category", category, CATEGORIAS_AI[category]);

  return (
    <>
      <h2 className={style.Title}>{name}</h2>
      <section className={style.Description}>
        <h3 className={style.Subtitle}>Descripción:</h3>
        <p>{description}</p>
      </section>
      <section>
        <h3 className={style.Subtitle}>Categoria:</h3>
        <p>{CATEGORIAS_AI[category]}</p>
      </section>
      <section>
        <ul className={style.ListKeywords}>
          {keyWords.map((keyword, index) => (
            <li key={index} className={style.Keyword}>
              {keyword}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default CardBasicDescription;
