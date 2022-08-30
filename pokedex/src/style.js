import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
`

export const PageTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    text-shadow: 2px 2px 4px black;
    background-color: #ff1c1c;
    padding: 5px 50px;
    letter-spacing: 3px;
    
    img {
        width: 80px;
        cursor: pointer;
    }

    h1 {
        width: 100%;
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

        :hover {
            cursor: pointer;
            text-decoration: underline;
        }   
    }
    


`
