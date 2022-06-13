import React, { useContext, useState } from "react";
import Chart from 'react-apexcharts'
import GlobalStateContext from "../../context/GlobalStateContext";


const Scatter = () => {

    const { optionsScatter, seriesScatter } = useContext(GlobalStateContext);

          return (
            

      <div id="chart">
  <Chart options={optionsScatter} series={seriesScatter} type="scatter" height={350} width={500} />
</div>
    

          );

      }

      export default Scatter