import React, { useContext } from "react";
import Chart from 'react-apexcharts'
import GlobalStateContext from "../../context/GlobalStateContext";
import { Main, P, Img, Container } from "./styled";
import info from '../../assets/info.png'
import MenuIcon from '@mui/icons-material/Menu';

const BarraSimples = () => {

  const { optionsBarra, seriesBarra } = useContext(GlobalStateContext);

  return (

    <Main>
      <Container>
      <P>Barras <Img src={info}/></P>  <MenuIcon sx={{ color: '#5D405C', fontSize: '35px' }} />
      </Container>
      <Chart options={optionsBarra} series={seriesBarra} type="bar" height={400} width={775} />
    </Main>

  )
}
export default BarraSimples;

