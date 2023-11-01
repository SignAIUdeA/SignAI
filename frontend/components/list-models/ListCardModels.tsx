import CardModel from "../card-model/CardModel";
import { Modelo } from "../card-model/mock";
import SkeletonCardModel from "../skeleton/skeleton-card-model/SkeletonCardModel";
import styles from "./list-models.module.css";

interface Props {
  models: Modelo[] | undefined;
}

const ListCardModels = ({ models }: Props) => {
  if (!models)
    return (
      <section className={`${styles.ContainerCards}`}>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <SkeletonCardModel key={index} />
          ))}
      </section>
    );

  return (
    <section className={`${styles.ContainerCards}`}>
      {models?.map((model, index) => (
        <CardModel key={index} modelInfo={model} />
      ))}
    </section>
  );
};

export default ListCardModels;
