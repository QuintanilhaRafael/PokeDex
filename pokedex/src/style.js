import styled, { createGlobalStyle } from "styled-components";
import pokemonFont from "./fonts/pokemon-solid.ttf"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;

        @font-face {
        font-family: 'Pokemon';
        src: local('Pokemon'),
        url(${pokemonFont}) format('truetype');
    }
}
`

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;

`

export const PageTitle = styled.div`
    display: flex;
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
        font-size: 2.3rem;
        text-align: center; 
        font-family: "Pokemon", sans-serif;
    }


    @media (max-width: 710px) {

        padding: 7px 50px;

        img {
            width: 65px;
        }
        
        h1 {
            font-size: 1.85rem;
            margin: 0;
            text-align: end;
        }
    }   

    @media (max-width: 545px) {

        padding: 5px 10px;
        letter-spacing: 2px;


        img {
            width: 40px;
        }        

        h1 {
            font-size: 1.3rem;
        }
        
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

    @media (max-width: 710px) {
        
        button {
            font-size: 1.1rem;
        }
        
    }    
    

    @media (max-width: 545px) {

        padding: 5px 15px;

        button {
            font-size: 0.8rem;
        }


    }   

  


`

export const Main = styled.main`
    display: flex;
    flex-direction: column;

    .paginationButtons {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 20px 0;
        height: 40px;
        font-size: 1.1em;
        top: 100%;
        position: sticky;

        i {
            font-size: 1.5em;
            margin: 0 10px;
            color: black;
        }
    }

    .paginationButtons a{
        margin: 8px;
        color:  #ff1c1c;
        cursor: pointer;
    }

    .paginationActive a{
        font-size: 1.1em;
        font-weight: 1000;
        color: black;
    }
`
export const CardsSection = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 65vh;

    h1 {
        align-self: center;
        font-family: "Pokemon", sans-serif;
        letter-spacing: 3px;
    }
    
`

export const LoadingGif = styled.img`
    width: 70px;
    align-self: center;

    @media (max-width: 545px) {
        width: 50px;
    }
`

export const GotEmAll = styled.div`
display: flex;
flex-direction: column;
align-self: center;
width: 40vw;

@media (max-width: 860px) {
        width: auto;
    }


`





