import React from 'react'
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS, LinearScale} from 'chart.js/auto';

ChartJS.register(LinearScale);

const ChartData = ({ charData }) => {
    return (
      <Bar
        width={600}
        height={300}
        data={charData}
        options={{
          indexAxis: 'y',
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Cantidad de datos', // Título del eje X
                font: {
                  size: 14, // Tamaño de fuente del título
                  weight: 'bold', // Peso de la fuente del título
                },
              },
              ticks: {
                padding: 10, // Ajuste de padding para las etiquetas en el eje X
              },
            },
            y: {
              title: {
                display: true,
                text: 'Etiquetas', // Título del eje Y
                font: {
                  size: 14, // Tamaño de fuente del título
                  weight: 'bold', // Peso de la fuente del título
                },
              },
              ticks: {
                padding: 10, // Ajuste de padding para las etiquetas en el eje X
              },
            },
          },
        }}
        className='debug'
      />
    );
  };

  export default ChartData

