import React, { useContext } from "react";
import Chart from 'react-apexcharts'
import GlobalStateContext from "../../context/GlobalStateContext";


const BarraSimples = () => {

  const { optionsBarra, seriesBarra } = useContext(GlobalStateContext);

    return (
      <Chart options={optionsBarra} series={seriesBarra} type="bar" height={350} width={500}/>
    )
  }
export default BarraSimples;

