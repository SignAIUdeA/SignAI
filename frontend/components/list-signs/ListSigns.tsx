import Card from "../card/CardSign";
import { CardSignType } from "../card/card.services";
import styles from "./list-signs.module.css";

interface Props {
  listSigns: CardSignType[];
}

const ListSigns = ({ listSigns }: Props) => {
  return (
    <section className={styles.Wrapper}>
      {listSigns.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          date={item.date}
          label={item.label}
        />
      ))}
    </section>
  );
};

export default ListSigns;
