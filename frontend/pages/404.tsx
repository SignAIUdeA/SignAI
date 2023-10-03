import styles from "@/styles/error403.module.css";
import { IconLock } from "@/icons/Icons";

const NotFound = () => {
  return (
    <main className={styles.Main}>
      <header className={styles.Header}>
        <div className={styles.WrapperIcon}>
          <IconLock width="80px" height="90px" />
        </div>
        <h2 className={styles.Subtitle}>ERROR</h2>
        <h1 className={styles.Title}>404</h1>
      </header>
      <section>
        <p className="text-[1.3rem]">
          La página a la que intentas acceder no se encuentra
        </p>
      </section>
    </main>
  );
};

export default NotFound;
