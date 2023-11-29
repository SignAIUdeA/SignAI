import React, { useState } from "react";
import Image from "next/image";
import {
  MdDateRange,
  MdLabelOutline,
  MdOutlinePermIdentity,
  MdPlayCircle,
} from "react-icons/md";
import style from "./card-sign.module.css";
import TagPosition from "../tag-position/TagPosition";
import Modal from "../modal/Modal";
import Loader from "../loader/Loader";

interface CardProps {
  name: string;
  date: string;
  label: string;
}

const Card = ({ name, date, label }: CardProps) => {
  const [showModalVideo, setShowModalVideo] = useState<boolean>(false);
  const [showModalForm, setShowModalForm] = useState<boolean>(false);

  if (showModalVideo) {
    return (
      <Modal setShowModal={setShowModalVideo} closeButton={true}>
        <div className="p-4">
          <div className="h-20">
            <Loader />
          </div>
          Cargando
        </div>
      </Modal>
    );
  }

  return (
    <article className={style.Card}>
      <header className={style.Header}>
        <img
          src="https://images.unsplash.com/photo-1698993001180-8654ab29032a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagen de seña"
          className={style.Image}
        />
        <button
          className={style.IconWrapper}
          onClick={() => setShowModalVideo(true)}>
          <MdPlayCircle className={style.IconPlay} />
        </button>
      </header>
      <section className={style.InfoCard}>
        <div className={style.Field}>
          <MdOutlinePermIdentity className={style.Icon} />
          <span>{name}</span>
        </div>
        <div className={style.Field}>
          <MdDateRange className={style.Icon} />
          <span>{date}</span>
        </div>
        <div className={style.Field}>
          <MdLabelOutline className={style.Icon} />
          <TagPosition position="administrator" />
        </div>
        <button className={style.Btn}>Etiquetar</button>
      </section>
    </article>
  );
};

export default Card;
