import { useState } from "react";
import style from "./card-model.module.css";
import { Modelo } from "./mock";
import Modal from "@/components/modal/Modal";
import CardBasicDescription from "./CardBasicDescription";
import CardDetails from "./CardDetails";

interface Props {
  modelInfo: Modelo;
}

const CardModel = ({ modelInfo }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const URL = "http://localhost:8000/model/file/";

  return (
    <>
      <article className={style.Card}>
        <CardBasicDescription
          name={modelInfo.name}
          category={modelInfo.category}
          description={modelInfo.description}
          keyWords={modelInfo.keyWords}
        />
        <section>
          <button
            className={`${style.Btn} ${style.BtnDetails}`}
            onClick={() => setShowModal(true)}>
            Ver Detalles
          </button>
          <button className={`${style.Btn} ${style.BtnDownload}`}>
            <a
              href={`${URL}${modelInfo.id}`}
              target="_blank"
              rel="noopener noreferrer"
              download="archivo">
              Descargar
            </a>
          </button>
        </section>
      </article>

      {!showModal || (
        <Modal setShowModal={setShowModal} closeButton={true}>
          <section className={style.Container}>
            <div className={style.ModelInformation}>
              <article className={style.CardInfo}>
                <CardBasicDescription
                  name={modelInfo.name}
                  category={modelInfo.category}
                  description={modelInfo.description}
                  keyWords={modelInfo.keyWords}
                />
              </article>
              <div className={style.Line}></div>
              <article className={style.CardInfo}>
                <CardDetails
                  precision={modelInfo.precision}
                  sensitivity={modelInfo.sensitivity}
                  specificity={modelInfo.specificity}
                  f1Score={modelInfo.f1Score}
                  rocAuc={modelInfo.rocAuc}
                  version={modelInfo.version}
                  notesVersion={modelInfo.notesVersion}
                  stateInvestigation={modelInfo.stateInvestigation}
                  comments={modelInfo.comments}
                  createdBy={modelInfo.createdBy}
                />
              </article>
            </div>
            <button
              className={`${style.Btn} ${style.BtnDownload} ${style.BtnModal}`}>
              <a
                href={`${URL}${modelInfo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                download="archivo">
                Descargar
              </a>
            </button>
          </section>
        </Modal>
      )}
    </>
  );
};

export default CardModel;
