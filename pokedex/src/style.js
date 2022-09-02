import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
`

export const PageTitle = styled.div`
    display: flex;
    align-items: center;
    color: white;
    text-shadow: 2px 2px 4px black;
    background-color: #ff1c1c;
    letter-spacing: 3px;
    padding: 10px 50px;
    
    img {
        width: 80px;
        cursor: pointer;

        :hover {
            transform: scale(0.9);
        }
    }

    h1 {
        width: 100%;
        margin-right: 80px;
        font-size: 2.4rem;
        font-family: 'Pokemon', sans-serif;
        text-align: center;
    }

`
export const PageNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: black;
    padding: 10px 50px;

    button {
        border: none !important;
        background-color: transparent;
        font-size: 1.2rem;
        font-weight: 600;
        color: white;
        background-image: linear-gradient(#fff,#fff);
        background-size: 0 100%;
        background-repeat: no-repeat;
        transition: .3s ease-in-out;
        padding: 1px;

        :hover {
            cursor: pointer;
            color: black;
            background-size: 100% 100%;
        }   
        
    }  


`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
`
