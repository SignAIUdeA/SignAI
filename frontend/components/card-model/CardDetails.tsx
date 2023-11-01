import { STATE_INVESTIGATION } from "@/constants/model-info";
import style from "./card-model.module.css";

interface Props {
  precision: string;
  sensitivity: string;
  specificity: string;
  f1Score: string;
  rocAuc: string;
  version: string;
  notesVersion: string;
  stateInvestigation: string;
  comments: string;
  createdBy: string;
}

const CardDetails = ({
  precision,
  sensitivity,
  specificity,
  f1Score,
  rocAuc,
  version,
  notesVersion,
  stateInvestigation,
  comments,
  createdBy,
}: Props) => {
  return (
    <>
      <section className={style.Description}>
        <h3 className={style.Subtitle}>Métricas:</h3>
        <ul>
          <li>
            <strong>Precisión:</strong> {precision}
          </li>
          {sensitivity.length > 0 ? (
            <li>
              <strong>Sensibilidad:</strong> {sensitivity}
            </li>
          ) : (
            ""
          )}
          {specificity.length > 0 ? (
            <li>
              <strong>Especificidad:</strong> {specificity}
            </li>
          ) : (
            ""
          )}
          {f1Score.length > 0 ? (
            <li>
              <strong>F1-Score:</strong> {f1Score}
            </li>
          ) : (
            ""
          )}
          {rocAuc.length > 0 ? (
            <li>
              <strong>ROC-AUC:</strong> {rocAuc}
            </li>
          ) : (
            ""
          )}
        </ul>
      </section>
      <section>
        <h3 className={style.Subtitle}>Versión:</h3>
        <strong>{version}</strong>
        <p>
          <strong>Nota:</strong>{" "}
          {notesVersion.length > 0 ? notesVersion : "no hay notas"}
        </p>
      </section>
      <section>
        <h3 className={style.Subtitle}>Estado:</h3>
        <strong>{STATE_INVESTIGATION[stateInvestigation]}</strong>
        <p>
          <strong>Comentarios:</strong>{" "}
          {comments.length > 0 ? comments : "no hay comentarios"}
        </p>
      </section>
      <section>
        <h3 className={style.Subtitle}>Autor:</h3>
        <strong>{createdBy}</strong>
      </section>
    </>
  );
};

export default CardDetails;
