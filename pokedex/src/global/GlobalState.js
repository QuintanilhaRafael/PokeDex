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
    const [pokedexArray, setPokedexArray] = useState([])

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
                setTimeout(() => {
                    setIsLoading(false)
                    setPokemonsData(response)
                }, 1000)
            }).catch((err) => {
                setIsLoading(false)
                setError(err)
            })
    }

    // Buttons

    const addPokedex = (cardId, pokemon) => {
        const found = pokemonsData.find((pkm) => pkm.data.id === cardId)
        const newPokemonsData = [...pokemonsData]
        newPokemonsData.splice(found, 1)
        setPokemonsData(newPokemonsData)
        const newPokedexArray = [...pokedexArray]
        newPokedexArray.push(pokemon)
        setPokedexArray(newPokedexArray)
    }

    var storedDex = JSON.parse(localStorage.getItem('pokedex'))
    if ((storedDex) && (pokedexArray.length > 0)) {
        for (let i=0; i<pokedexArray.length; i ++) {
        var newDex = [...storedDex, pokedexArray[i]]
        localStorage.setItem('pokedex', JSON.stringify(newDex)) 
        }
    } else if (pokedexArray.length > 0) {
        localStorage.setItem('pokedex', JSON.stringify(pokedexArray))  
    }


    return (
        <GlobalStateContext.Provider value={{ nameNumberQuery, setNameNumberQuery, typeQuery, setTypeQuery, selected, setSelected, isLoading, error, pokemonsData, addPokedex, pokedexArray, setPokedexArray }} >
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState;