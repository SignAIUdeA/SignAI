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
          id={item.id}
          key={item.id}
          upload_by={item.upload_by}
          creation_date={item.creation_date}
          label={item.label}
          path_file={item.path_file}
          role_user={item.role_user}
        />
      ))}
    </section>
  );
};

export default ListSigns;
