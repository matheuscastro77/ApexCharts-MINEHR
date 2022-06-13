import styled from "styled-components"

export const Main = styled.main`
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
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
    width: 12.5%;
    display: flex;
    justify-content: space-between;
    align-items: center
`

export const Img = styled.img`
    width: 20%;

    :hover{
        cursor: pointer;
    }
`

