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

    const [pokemonsData, setPokemonsData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [error, setError] = useState(undefined)

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = () => {
        setIsLoading(true);

        axios.get(`${BASE_URL}`)
            .then((response) => {
                setTimeout(() => {
                    setIsLoading(false)
                    setPokemonsData(response.data.results)
                }, 1000)
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