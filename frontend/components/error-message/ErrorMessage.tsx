import { IconError } from "@/icons/Icons";
import styles from "./error-message.module.css";

interface Props {
  errorMessage: string | undefined;
  className: string;
}

const ErrorMessage = ({ errorMessage, className }: Props) => {
  return (
    <p
      className={
        errorMessage
          ? `${styles.ErrorMessage} ${styles.ErrorMessageVisible} ${className}`
          : `${styles.ErrorMessage} ${className}`
      }>
      <IconError />
      {errorMessage}
    </p>
  );
};

export default ErrorMessage;
