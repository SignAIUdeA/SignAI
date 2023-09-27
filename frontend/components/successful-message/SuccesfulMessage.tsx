import { IconCheckSuccesfully } from "@/icons/Icons";
import styles from "./succesful-message.module.css";

interface Props {
  message: string;
}

const SuccesfulMessage = ({ message }: Props) => {
  return (
    <section className={styles.Container}>
      <IconCheckSuccesfully width="50px" height="50px" fill="#35944b" />
      <p>{message}</p>
    </section>
  );
};

export default SuccesfulMessage;
