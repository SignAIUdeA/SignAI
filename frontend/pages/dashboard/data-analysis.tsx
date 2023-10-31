import Layoutp from "@/layouts/Layout";
import { labelsData } from "@/components/chart/chart.services";
import { useState } from "react";
import ChartData from "@/components/chart/ChartData";
import styles from "@/styles/data-analysis.module.css";

const DataAnalysis = () => {
  const [userLabelData, setUserLabelData] = useState({
    labels: labelsData.map((data) => data.sign_desc),
    datasets: [
      {
        axis: "y",
        label: "Count",
        data: labelsData.map((data) => data.count),
        backgroundColor: ["green"],
        borderRadius: 5,
        barPercentage: 0.2,
        borderSkipped: false,
      },
    ],
  });

  return (
    <Layoutp>
      <section className={styles.Wrapper}>
        <header className={styles.Header}>
          <h3 className={styles.Title}>Análisis de Datos</h3>
          <div className={styles.Information}>
            <span className={styles.Cantidad}>375</span>
            <span className={styles.Message}>Videos e Imagenes</span>
          </div>
        </header>
        <div style={{ width: 600, height: 300 }}>
          <ChartData charData={userLabelData} />
        </div>
      </section>
    </Layoutp>
  );
};

export default DataAnalysis;
