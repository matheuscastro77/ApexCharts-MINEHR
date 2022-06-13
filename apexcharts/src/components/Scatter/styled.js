import styled from "styled-components"

export const Main = styled.main`
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 43%;
    padding: 10px 35px 10px 35px;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 96%;
    justify-content: space-between;
`

export const P = styled.p`
    font-size: 1.3rem;
    color: #5D405C;
    font-weight: 700;
    width: 13%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1768px){
    font-size: 1.2rem;
    }

    @media screen and (max-width: 1768px){
    font-size: 1.1rem;
    }

    @media screen and (max-width: 1440px){
    font-size: 1rem;
    }

    @media screen and (max-width: 1366px){
    font-size: 0.9rem;
    }
`

export const Img = styled.img`
    width: 20%;

    :hover{
        cursor: pointer;
    }
`