import Link from "next/link";
import style from "@/styles/index.module.css";

const Index = () => {
  return (
    <main className={style.Main}>
      <section className={style.SectionCentral}>
        <div>
          <h1 className={style.Logo}>SignAI</h1>
          <h3 className={style.Slogan}>uniendo mundos seña por seña</h3>
        </div>
        <Link className={style.Btn} href={"/newlogin"}>
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
        <Link className={style.Contact} href={"/"}>
          Contáctanos
        </Link>
      </footer>
    </main>
  );
};

export default Index;
