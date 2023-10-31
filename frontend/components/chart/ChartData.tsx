import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale } from "chart.js/auto";
import { Jost, Poppins } from "next/font/google";

const tipografia = Jost({ subsets: ["latin"], weight: ["500", "600", "700"] });

ChartJS.register(LinearScale);

const ChartData = ({ charData }) => {
  const fontFamily = tipografia.style.fontFamily;

  return (
    <Bar
      width={600}
      height={300}
      data={charData}
      options={{
        indexAxis: "y",
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Cantidad de datos", // Título del eje X
              font: {
                size: 16, // Tamaño de fuente del título
                weight: "bold",
                family: fontFamily, // Peso de la fuente del título
              },
              color: "#026937",
            },
            ticks: {
              padding: 10, // Ajuste de padding para las etiquetas en el eje X
              color: "dark",
            },
          },
          y: {
            title: {
              display: true,
              text: "Etiquetas", // Título del eje Y
              font: {
                size: 16, // Tamaño de fuente del título
                weight: "bold",
                family: fontFamily, // Peso de la fuente del título
              },
              color: "#026937",
            },
            grid: {
              display: false,
            },
            ticks: {
              padding: 10, // Ajuste de padding para las etiquetas en el eje X
              color: "dark",
            },
          },
        },
      }}
    />
  );
};

export default ChartData;
