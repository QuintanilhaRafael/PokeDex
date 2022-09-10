import React from 'react'
import { useRef } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import { goToDetailsPage } from '../../routes/Coordinator';
import { CardDiv, ImgDiv, TypesDiv, TypeSpan, InfosDiv, ButtonsDiv } from './style';

export default function Card({ id, name, img, types, pokemon, buttonType, detailType }) {

    const { playAPress, setDetailButton, addPokedex, removePokedex } = useContext(GlobalStateContext)

    const navigate = useNavigate();

    console.log(pokemon)


    // RENDER TYPES

    let firstPokemonType
    let secondPokemonType
    if (types[1]) {
        firstPokemonType = types[0].type.name
        secondPokemonType = types[1].type.name
    } else {
        firstPokemonType = types[0].type.name
    }

    // RENDER POKEMON NUMBER

    let number
    if (id < 10) {
        number = `#00${id}`
    } else if (id >= 10 && id < 100) {
        number = `#0${id}`
    } else {
        number = `#${id}`
    }

    // RENDER BUTTON

    let buttonRender
    if (buttonType === 'remove') {
        buttonRender = <button onClick={() => removePokedex(id)} className='red'>Remover</button>
    } else {
        buttonRender = <button onClick={() => addPokedex(id, pokemon)} className='green'>Adicionar</button>
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
                {buttonRender}
                <button onClick={() => {goToDetailsPage(navigate, id); playAPress(); setDetailButton(detailType)}} className='yellow'>Detalhes</button>
            </ButtonsDiv>
        </CardDiv>
    )
}
