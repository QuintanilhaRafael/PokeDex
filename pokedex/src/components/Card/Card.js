import React from 'react'
import { useRef } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import { goToDetailsPage } from '../../routes/Coordinator';
import { CardDiv, ImgDiv, TypesDiv, TypeSpan, InfosDiv, ButtonsDiv } from './style';

export default function Card({ id, name, img, types, pokemon, buttonType }) {

    const { pokemonsData, setPokemonsData, pokedexArray, setPokedexArray, didMount, playGotcha, playRun } = useContext(GlobalStateContext)

    const navigate = useNavigate();


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

    // BUTTONS FUNCTIONS

    const addPokedex = (cardId, pokemon) => {
        const found = pokemonsData.findIndex((pkm) => pkm.data.id === cardId)
        const newPokemonsData = [...pokemonsData]
        newPokemonsData.splice(found, 1)
        setPokemonsData(newPokemonsData)
        const newPokedexArray = [...pokedexArray]
        newPokedexArray.push(pokemon)
        setPokedexArray(newPokedexArray)
        didMount.current = true
        playGotcha()
    }

    const removePokedex = (cardId) => {
        const found = pokedexArray.findIndex((pkm) => pkm.data.id === cardId)
        const newPokedexArray = [...pokedexArray]
        newPokedexArray.splice(found, 1)
        setPokedexArray(newPokedexArray)
        playRun()
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
                <button onClick={() => goToDetailsPage(navigate, id)} className='yellow'>Detalhes</button>
            </ButtonsDiv>
        </CardDiv>
    )
}
