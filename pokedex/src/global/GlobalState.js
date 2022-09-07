import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../constants/constants";
import { GlobalStateContext } from "./GlobalStateContext";

function GlobalState(props) {

    // States

    const [nameNumberQuery, setNameNumberQuery] = useState('')
    const [typeQuery, setTypeQuery] = useState('')
    const [selected, setSelected] = useState('number')

    // Requests

    const [pokemonsData, setPokemonsData] = useState([])
    const [isLoading, setIsLoading] = useState(undefined)
    const [error, setError] = useState(undefined)
    const [pokemonInfo, setPokemonInfo] = useState([])

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = () => {
        axios.get(`${BASE_URL}`)
            .then((response) => {
                setPokemonsData(response.data.results)
            }).catch((err) => {
                setError(err)
            })
    }

    const getPokemonsInfo = () => {
        setIsLoading(true);
        axios.all(pokemonsData && pokemonsData.map((pokemon) => axios.get(pokemon.url)))
            .then((response) => {
                setIsLoading(false)
                console.log(response)
            }).catch((err) => {
                setIsLoading(false)
                setError(err)
            })
    }    

    getPokemonsInfo()




    return (
        <GlobalStateContext.Provider value={{ nameNumberQuery, setNameNumberQuery, typeQuery, setTypeQuery, selected, setSelected, isLoading, error, pokemonsData }} >
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState;