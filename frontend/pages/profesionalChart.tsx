import React, { useState } from 'react'
// import {labelsData} from '@/components/chart/Data';
import {labelsData} from '@/components/chart/chart.services';
import Layout from '@/layouts/Layout';
import ChartData from '@/components/chart/ChartData';

const ProfesionalChart = () => {
    const [userLabelData, setUserLabelData] = useState({
        labels: labelsData.map((data) => data.sign_desc),
        datasets: [{
          axis: 'y',
          label: "Count",
          data: labelsData.map((data) => data.count),
          backgroundColor: ["green"],
          borderRadius: 5,
          barPercentage: 0.2,
          borderSkipped: false,
        }]
      })
  return (
    <>
        <Layout>
        {/* <div style={{width: 700}}> */}
            <div className='debug flex flex-col w-full items-center gap-8 m-20'>
              <div className='flex flex-col debug'>
                <span>ANÁLISIS DE DATOS</span>
                <div className='flex gap-4'>
                    <span>375</span>
                    <span>Videos e Imagenes</span>
                </div>
              </div>
                <div style={{width:600, height:300}} className='debug'>
                  <ChartData charData={userLabelData}/>
                </div>
            </div>
        </Layout>
    </>
  )
}

export default ProfesionalChart