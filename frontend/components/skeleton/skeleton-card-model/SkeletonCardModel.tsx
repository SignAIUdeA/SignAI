import styles from "./skeleton-card-model.module.css";

const SkeletonCardModel = () => {
  return (
    <section className={styles.Card}>
      <div className={styles.SkeletonRec}></div>
      <div
        className={`${styles.SkeletonRec} ${styles.SkeletonRecSubTitle}`}></div>
      <div className={`${styles.SkeletonRec} ${styles.SkeletonRecDesc}`}></div>
      <div className={`${styles.SkeletonRec} ${styles.SkeletonRecDesc}`}></div>
      <div
        className={`${styles.SkeletonRec} ${styles.SkeletonRecSubTitle}`}></div>
      <div className={`${styles.SkeletonRec} ${styles.SkeletonRecDesc}`}></div>
      <div className={`${styles.SkeletonRec} ${styles.SkeletonRecDesc}`}></div>
      <div
        className={`${styles.SkeletonRec} ${styles.SkeletonRecSubTitle}`}></div>
    </section>
  );
};

export default SkeletonCardModel;
