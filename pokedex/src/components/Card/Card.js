import React from 'react'
import { useContext } from 'react';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import { CardDiv, ImgDiv, TypesDiv, TypeSpan, InfosDiv, ButtonsDiv } from './style';

export default function Card({ id, name, img, types, pokemon }) {

    const { addPokedex } = useContext(GlobalStateContext)

    let firstPokemonType
    let secondPokemonType
    if (types[1]) {
        firstPokemonType = types[0].type.name
        secondPokemonType = types[1].type.name
    } else {
        firstPokemonType = types[0].type.name
    }

    let number
    if (id < 10) {
        number = `#00${id}`
    } else if (id >= 10 && id < 100) {
        number = `#0${id}`
    } else {
        number = `#${id}`
    }


    return (

        <CardDiv>
            <ImgDiv>
                <img src={img} alt={name} />
            </ImgDiv>
            <p>{number}</p>
            <InfosDiv>
                <span className='nameSpan'>{name}</span>
                <TypesDiv>
                    <TypeSpan className={`${firstPokemonType}`}>{firstPokemonType}</TypeSpan>
                    {types[1] && <TypeSpan className={`${secondPokemonType}`}>{secondPokemonType}</TypeSpan>}
                </TypesDiv>
            </InfosDiv>
            <ButtonsDiv>
                <button onClick={() => addPokedex(id, pokemon)} className='green'>Adicionar</button>
                <button  className='yellow'>Detalhes</button>
            </ButtonsDiv>
        </CardDiv>
    )
}
