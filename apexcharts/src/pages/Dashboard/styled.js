import styled from "styled-components";

export const Main = styled.main`
    background-color: #F6F6F6;
    height: 100vh;
`

export const Body = styled.body`
    margin: 0% 3%;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Tittles = styled.div`
    margin-bottom: 1.5%;
`

export const H1 = styled.h1`
    color: #5D405C;

    @media screen and (max-width: 1366px){
    font-size: 1.5rem;
    }
`

export const H2 = styled.h2`
    color: #828282;
    font-weight: 600;
    font-size: 1rem;

    @media screen and (max-width: 1366px){
    font-size: 0.9rem;
    }
`

export const Button = styled.button`
    background-color: #5D405C;
    color: white;
    width: 6%;
    height: 4vh;
    border: 0px;
    border-radius: 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 1366px){
    font-size: 0.9rem;
    }

    :hover{
    cursor: pointer;
    } 
`

export const Grafics = styled.div`
    display: flex;
    justify-content: space-between;
`


