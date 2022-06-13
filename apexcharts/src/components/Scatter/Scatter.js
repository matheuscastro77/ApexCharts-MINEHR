import React, { useContext, useState } from "react";
import Chart from 'react-apexcharts'
import GlobalStateContext from "../../context/GlobalStateContext";
import { Main, P, Img, Container } from "./styled";
import info from '../../assets/info.png'
import MenuIcon from '@mui/icons-material/Menu';


const Scatter = () => {

    const { optionsScatter, seriesScatter } = useContext(GlobalStateContext);

    return (

        <Main>
            <Container>
                <P>Scatter <Img src={info} /></P> <MenuIcon sx={{
                    color: '#5D405C', fontSize: '35px', '&:hover': {
                        cursor: 'pointer'
                    }
                }} />
            </Container>
            <Chart options={optionsScatter} series={seriesScatter} type="scatter" height={350} style={{ width: '100%' }} />
        </Main>

    );

}

export default Scatter