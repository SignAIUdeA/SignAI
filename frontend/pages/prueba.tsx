import React, { useState } from 'react'
import ChartData from '@/components/chart/ChartData'
import {labelsData} from '@/components/chart/Data';
import Layout from '@/layouts/Layout';

const Prueba = () => {

  const [userLabelData, setUserLabelData] = useState({
    labels: labelsData.map((data) => data.sign_desc),
    datasets: [{
      axis: 'y',
      label: "Count",
      data: labelsData.map((data) => data.count),
      backgroundColor: ["green"],
      // borderWidth: 2,
      // borderColor: "black",
      borderRadius: 5,
      barPercentage: 0.2,
      borderSkipped: false,
    }]
  })
  return (
    // <Layout>
      <div style={{width: 700}}>
        <ChartData charData={userLabelData}/>
      </div>

    // </Layout>
  )
};

export default Prueba;