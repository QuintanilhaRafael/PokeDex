import styled from "styled-components";

export const FilterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (max-width: 710px) {
        flex-direction: column;
    }

    @media (max-width: 545px) {
        margin-top: 0;
    }

`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    margin: 0 50px;

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: 700;
    }
    input {
        border: 1px solid #000;
        padding: 6px;
        border-radius: 6px;
        width: 100%;
    }
    select {
        border: 1px solid #000;
        padding: 6px;
        border-radius: 6px;
        width: 100%;
    }

    @media (max-width: 950px) {
        margin: 0 10px;
    }

    @media (max-width: 710px) {
        margin-top: 10px;
        width: 85%;
    }


    @media (max-width: 545px) {
        font-size: 0.8rem;

        input {
            padding: 2px 6px;
            font-size: 0.7rem;
        }

        select {
            padding: 2px 6px;
            font-size: 0.7rem;
        }
    }

`

