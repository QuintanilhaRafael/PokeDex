import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/constants";
import { GlobalStateContext } from "./GlobalStateContext";
import gotcha from '../sounds/Gotcha.mp3'
import pcOn from '../sounds/pcon.mp3'
import pcOff from '../sounds/pcoff.mp3'
import run from '../sounds/run.mp3'
import apress from '../sounds/apress.mp3'

function GlobalState(props) {

    // States

    const [nameNumberQuery, setNameNumberQuery] = useState('')
    const [typeQuery, setTypeQuery] = useState('')
    const [selected, setSelected] = useState('number')
    const [pokedexArray, setPokedexArray] = useState([])
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [pokemonsData, setPokemonsData] = useState([])
    const [isLoading, setIsLoading] = useState(undefined)
    const [error, setError] = useState(undefined)
    const didMount = useRef(false)

    // Effects

    useEffect(() => {
        getPokemons()
    }, []
    )

    useEffect(() => {
        if (didMount.current) {
            var storedDex = JSON.parse(localStorage.getItem('pokedex'))
            if (storedDex) {
                for (let i = 0; i < pokedexArray.length; i++) {
                    var newDex = [...storedDex, pokedexArray[i]]
                }
                localStorage.setItem('pokedex', JSON.stringify(newDex))
            } else {
                localStorage.setItem('pokedex', JSON.stringify(pokedexArray))
            }
            didMount.current = false
        }
    }, [pokedexArray]
    )

    // Requests

    const getPokemons = () => {
        axios.get(`${BASE_URL}/?offset=0&limit=151`)
            .then((response) => {
                getPokemonsInfo(response.data.results)
            }).catch((err) => {
                setError(err)
            })
    }

    const getPokemonsInfo = (res) => {
        setIsLoading(true);
        axios.all(res.map((pokemon) => axios.get(pokemon.url)))
            .then((response) => {
                setTimeout(() => {
                    setIsLoading(false)
                    setPokemonsData(response)
                }, 1000)
            }).catch((err) => {
                setIsLoading(false)
                setError(err)
            })
    }

    // SOUNDS

    const playGotcha = () => {
        new Audio(gotcha).play();
    }

    const playPcOn = () => {
        new Audio(pcOn).play();
    }

    const playPcOff = () => {
        new Audio(pcOff).play();
    }

    const playRun = () => {
        new Audio(run).play();
    }

    const playAPress = () => {
        new Audio(apress).play();
    }


    


    return (
        <GlobalStateContext.Provider
            value={
                {
                    nameNumberQuery,
                    setNameNumberQuery,
                    typeQuery,
                    setTypeQuery,
                    selected,
                    setSelected,
                    isLoading,
                    setIsLoading,
                    error,
                    pokemonsData,
                    setPokemonsData,
                    pokedexArray,
                    setPokedexArray,
                    pokemonDetails,
                    setPokemonDetails,
                    didMount,
                    playGotcha,
                    playPcOn,
                    playPcOff,
                    playRun,
                    playAPress
                }
            } >
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState;