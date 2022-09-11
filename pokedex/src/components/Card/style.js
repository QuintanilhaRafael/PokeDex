import styled from "styled-components";

export const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 280px;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    @keyframes pokehop {
        0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-.4rem);
    }
    }

    :hover {
        animation: pokehop .3s;
    }

    img {
        align-self: center;
        object-fit: contain;
        transform: scale(1.4);
    
    }

    p {
        color: gray;
        margin-left: 10px;
    }

    @media (max-width: 545px) {

        p {
            font-size: 0.85em;
        }
    }

    @media (max-width: 440px) {
        width: 60%;
    }



`

export const ImgDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10rem;
    background: whitesmoke;


`

export const InfosDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    .nameSpan {
        font-size: 1.4rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 7px;
    }

    @media (max-width: 545px) {
        .nameSpan {
            font-size: 1.2rem;
        }
    }
`

export const TypesDiv = styled.div`
    display: flex;
    justify-content: center;

    .normal {
        background-color: #a4acaf;
        color: #212121 !important;
    }

    .dragon {
        background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
        background-color: #53a4cf;
        color: #fff !important;
    }

    .grass {
    background-color: #9bcc50;
    color: #212121 !important;
    }

    .poison {
    background-color: #b97fc9;
    color: #fff !important;
    }

    .fire {
    background-color: #fd7d24;
    color: #fff !important;
    }

    .water {
    background-color: #4592c4;
    color: #fff !important;
    }

    .electric {
    background-color: #eed535;
    color: #212121 !important;
    }

    .bug {
    background-color: #729f3f;
    color: #fff !important;
    }

    .flying {
    background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background-color: #3dc7ef;
    color: #212121 !important;
    }

    .fairy {
    background-color: #fdb9e9;
    color: #212121 !important;
    }

    .psychic {
    background-color: #f366b9;
    color: #fff !important;
    }

    .rock {
    background-color: #a38c21;
    color: #fff !important;
    }

    .ice {
    background-color: #51c4e7;
    color: #212121 !important;
    }

    .ghost {
    background-color: #7b62a3;
    color: #fff !important;
    }

    .steel {
    background-color: #9eb7b8;
    color: #212121 !important;
    }

    .fighting {
    background-color: #d56723;
    color: #fff !important;
    }

    .ground {
    background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background-color: #f7de3f;
    color: #212121 !important;
    }
`

export const TypeSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    width: 75px;
    margin: 0px 2px;
    border-radius: 2px;

    @media (max-width: 545px) {
        font-size: 11px;
    }

`

export const ButtonsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        background: black;
        color: white;
        width: 44%;
        height: 30px;
        border-radius: 5px;
        margin: 0px 6px 10px 6px;
    }

    .green {
        :hover {
            cursor: pointer;
            color: white;
            box-shadow: 0 5px 35px forestgreen;
            background: forestgreen;
            border: solid 2px forestgreen;      
        }
    }

    .yellow {
        :hover {
            cursor: pointer;
            color: black;
            box-shadow: 0 5px 35px gold;
            background: gold;
            border: solid 2px gold;    
        }
    }

    .red {
        :hover {
            cursor: pointer;
            color: white;
            box-shadow: 0 5px 35px #ff1c1c;
            background: #ff1c1c;
            border: solid 2px #ff1c1c;      
        }
    }

    @media (max-width: 545px) {
        button {
            font-size: 0.8em;
            height: 25px;
            margin: 0px 4px 8px 4px;
        }
    }
`