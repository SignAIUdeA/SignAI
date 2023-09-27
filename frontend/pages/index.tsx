import Link from "next/link";
import style from "@/styles/index.module.css";
import Contact from "@/components/contact/Contact";

const Index = () => {
  return (
    <main className={style.Main}>
      <section className={style.SectionCentral}>
        <div>
          <h1 className={style.Logo}>SignAI</h1>
          <h3 className={style.Slogan}>uniendo mundos seña por seña</h3>
        </div>
        <Link className={style.Btn} href={"/login"}>
          Ingresar
        </Link>
      </section>
      <footer className={style.Footer}>
        <figure className={style.WrapperImage}>
          <img
            className={style.Image}
            src="udea-logo-blanco.svg"
            alt="Logo de la Universidad de Antioquia"
          />
        </figure>
        <Contact />
      </footer>
    </main>
  );
};

export default Index;
