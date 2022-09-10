import styled from "styled-components";

export const DetailsSection = styled.div`
    display: flex;
    justify-content: center;
    min-height: 60vh;
`

export const DetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    
    h1 {
        align-self: center;
        margin-top: 10px;
    }

`

export const InfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 50px;
`
export const ImgDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    justify-content: center;

    img {
        margin: 50px 0;
        transform: scale(1.5);
    }
`

export const StatsDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 20px;
    height: 500px;
    width: 300px;

    h2 {
        text-align: center;
    }
`

export const StatItem = styled.div`
    margin-top: 40px;
`

export const MoveTypeDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 300px;

`

export const TypeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 20px;

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

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export const TypeSpan = styled.span`
    margin: 0px 15px;
    border-radius: 2px;
    width: 75px;
    text-align: center;

`

export const MoveDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 20px;
    margin-top: 15px;
    height: 100%;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: #999;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-button {
        display: none;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #bbb;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: #ccc;
    }

    h2 {
        text-align: center;
    }

`

export const MoveItem = styled.div`
    margin-top: 30px;
`

