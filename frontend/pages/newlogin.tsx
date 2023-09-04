import { useState, ChangeEvent, FormEvent } from "react";
import styles from "@/styles/login.module.css";

interface FormData {
  user: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    user: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className={styles.Container}>
      <section className={styles.LeftPanel}>
        <div className={styles.WrapperLogo}>
          <h1 className={styles.Logo}>SignAI</h1>
          <span className={`${styles.Slogan}`}>
            UNIENDO MUNDOS SEÑA POR SEÑA
          </span>
        </div>
        <div className={styles.ContactSection}>
          <span>Contáctanos</span>
        </div>
      </section>
      <section className={styles.RightPanel}>
        <form onSubmit={submitForm} className={styles.Form}>
          <h2 className={`${styles.green} ${styles.FormHeader}`}>
            Iniciar Sesión
          </h2>
          <label htmlFor="user" className={styles.Label}>
            <span className={styles.LabelText}>Usuario</span>
            <input
              className={styles.Input}
              type="text"
              name="user"
              value={formData.user}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="password" className={styles.Label}>
            <span className={styles.LabelText}>Contraseña</span>
            <input
              className={styles.Input}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className={styles.ButtonForm}>
            Ingresar
          </button>
        </form>
      </section>
      <figure className={styles.LogoContainer}>
        <img src="/udea-logo-blanco.svg" alt="logo udea" />
      </figure>
    </main>
  );
};

export default Login;
