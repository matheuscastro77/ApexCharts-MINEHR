import React from 'react'
import BarraSimples from '../../components/BarraSimples/BarraSimples'
import Header from '../../components/Header/Header'
import Scatter from '../../components/Scatter/Scatter'
import { Main, Body, Container, Tittles, H1, H2, Button, Grafics } from './styled'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Dashboard = () => {
  return (
    <Main>
    <Header />
    <Body>
    <Container>
    <Tittles>
    <H1>Dashboard</H1>
    <H2>Desafio Técnico Frontend</H2>
    </Tittles>
    <Button> <FilterAltIcon /> Filtrar</Button>
    </Container>
    <Grafics>
    <BarraSimples />
    <Scatter />
    </Grafics>
    </Body>
    </Main>
  )
}

export default Dashboard
