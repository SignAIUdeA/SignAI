import { IconLock } from "@/icons/Icons";
import styles from "@/styles/error403.module.css";

const Error403 = () => {
  return (
    <main className={styles.Main}>
      <header className={styles.Header}>
        <div className={styles.WrapperIcon}>
          <IconLock width="80px" height="90px" />
        </div>
        <h2 className={styles.Subtitle}>ERROR</h2>
        <h1 className={styles.Title}>403</h1>
      </header>
      <section>
        <p className="text-[1.3rem]">
          No tienes autorización para acceder a este recurso
        </p>
      </section>
    </main>
  );
};

export default Error403;
