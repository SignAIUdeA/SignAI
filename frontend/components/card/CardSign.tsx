import React, { useState } from "react";
import {
  MdDateRange,
  MdLabelOutline,
  MdOutlinePermIdentity,
  MdPlayCircle,
} from "react-icons/md";
import style from "./card-sign.module.css";
import TagPosition from "../tag-position/TagPosition";
import Modal from "../modal/Modal";
import { RoleType } from "@/types/types";
import { formatDate } from "./card.services";
import { Edit } from "@mui/icons-material";
import EditSign from "../edit-sign/EditSign";
import { useRouter } from "next/router";
import { approveSign } from "@/functions/sign";

interface CardProps {
  id: string;
  path_file: string;
  label: string;
  creation_date: string; // Puedes cambiar este tipo a 'Date' si deseas trabajar con fechas en TypeScript
  role_user: string;
  upload_by: string;
}

const Card = ({
  id,
  path_file,
  label,
  creation_date,
  role_user,
  upload_by,
}: CardProps) => {
  const [showModalVideo, setShowModalVideo] = useState<boolean>(false);
  const [showModalForm, setShowModalForm] = useState<boolean>(false);
  const [idVideo, setIdVideo] = useState<string>("");
  const router = useRouter();

  if (showModalVideo) {
    return (
      <Modal setShowModal={setShowModalVideo} closeButton={true}>
        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-center text-2xl font-bold text-green-900">
            Muestra de la seña
          </h2>
          <video
            className="rounded-lg min-w-[480px]"
            width={360}
            controls
            muted>
            <source
              type="video/mp4"
              src={`http://127.0.0.1:8000/streaming/video/${idVideo}.mp4`}
            />
          </video>
          <button
            className={`${style.Btn} ${style.BtnAccept}`}
            onClick={(e) => {
              e.preventDefault();
              approveSign(idVideo).then((res) => {
                const { ok } = res;
                if (ok) {
                  router.reload();
                  return;
                }
              });
            }}>
            Aprobar seña
          </button>
        </div>
      </Modal>
    );
  }

  if (showModalForm) {
    return (
      <Modal setShowModal={setShowModalForm} closeButton={true}>
        <EditSign idVideo={id} setShowModal={setShowModalForm} />
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
          className={`${style.IconWrapper} ${style.Tooltip}`}
          onClick={() => {
            setShowModalVideo(true);
            setIdVideo(id);
          }}>
          <MdPlayCircle className={style.IconPlay} />
        </button>
      </header>
      <section className={style.InfoCard}>
        <div className={style.Field}>
          <MdOutlinePermIdentity className={style.Icon} />
          <span>{upload_by}</span>
        </div>
        <div className={style.Field}>
          <MdDateRange className={style.Icon} />
          <span>{formatDate(creation_date)}</span>
        </div>
        <div className={style.Field}>
          <MdLabelOutline className={style.Icon} />
          <span className={style.Label}>{label}</span>
        </div>
        <TagPosition position={role_user as RoleType} />
        <button className={style.Btn} onClick={() => setShowModalForm(true)}>
          Cambiar etiqueta
        </button>
      </section>
    </article>
  );
};

export default Card;
