import React, { useEffect, useState } from 'react'
// import {labelsData} from '@/components/chart/Data';
import {labelsData} from '@/components/chart/chart.services';
import Layout from '@/layouts/Layout';
import ChartData from '@/components/chart/ChartData';

const ProfesionalChart = () => {
    const [countData, setCountData] = useState(0);

    useEffect(()=>{
      let totalCount = 0;
      labelsData.forEach(label => {
        totalCount += label.count;
      });
      setCountData(totalCount);
    }, [])
    const [userLabelData, setUserLabelData] = useState({
        labels: labelsData.map((data) => data.sign_desc),
        datasets: [{
          axis: 'y',
          label: "Count",
          data: labelsData.map((data) => data.count),
          backgroundColor: ["#026937"],
          borderRadius: 5,
          barPercentage: 0.2,
          borderSkipped: false,
        }]
      })
  return (
    <>
        <Layout>
        {/* <div style={{width: 700}}> */}
            {/* <div className='debug flex flex-col w-full items-center gap-8 m-20'> */}
            <div className='debug flex flex-col w-full gap-8 m-20'>

              <div className='flex flex-col debug'>
                <span className='font-bold text-xl text-[var(--green-dark)]'>ANÁLISIS DE DATOS</span>
                <div className='flex gap-4 items-center'>
                    <span className='font-bold text-3xl text-[var(--grey-dark)]'>{countData}</span>
                    <span className='text-[var(--grey-light)]'>Videos e Imagenes</span>
                </div>
              </div>
              
                <div style={{width:600, height:300}} className='debug items-center'>
                  <ChartData charData={userLabelData}/>
                </div>
            </div>
        </Layout>
    </>
  )
}

export default ProfesionalChart