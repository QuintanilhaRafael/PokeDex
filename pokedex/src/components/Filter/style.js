import styled from "styled-components";

export const FilterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

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
        padding: 5px;
        border-radius: 6px;
        width: 100%;
    }
    select {
        border: 1px solid #000;
        padding: 5px;
        border-radius: 6px;
        width: 100%;
    }
`

