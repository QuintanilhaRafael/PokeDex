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

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = () => {
        axios.get(`${BASE_URL}`)
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
                setIsLoading(false)
                setPokemonsData(response)
            }).catch((err) => {
                setIsLoading(false)
                setError(err)
            })
    }


    return (
        <GlobalStateContext.Provider value={{ nameNumberQuery, setNameNumberQuery, typeQuery, setTypeQuery, selected, setSelected, isLoading, error, pokemonsData }} >
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState;