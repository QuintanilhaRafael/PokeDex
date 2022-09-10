import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { BASE_URL } from "../constants/constants";
import { GlobalStateContext } from "./GlobalStateContext";
import gotcha from '../sounds/Gotcha.mp3'
import pcOn from '../sounds/pcon.mp3'
import pcOff from '../sounds/pcoff.mp3'
import run from '../sounds/run.mp3'
import apress from '../sounds/apress.mp3'
import { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41, p42, p43, p44, p45, p46, p47, p48, p49, p50, p51, p52, p53, p54, p55, p56, p57, p58, p59, p60, p61, p62, p63, p64, p65, p66, p67, p68, p69, p70, p71, p72, p73, p74, p75, p76, p77, p78, p79, p80, p81, p82, p83, p84, p85, p86, p87, p88, p89, p90, p91, p92, p93, p94, p95, p96, p97, p98, p99, p100, p101, p102, p103, p104, p105, p106, p107, p108, p109, p110, p111, p112, p113, p114, p115, p116, p117, p118, p119, p120, p121, p122, p123, p124, p125, p126, p127, p128, p129, p130, p131, p132, p133, p134, p135, p136, p137, p138, p139, p140, p141, p142, p143, p144, p145, p146, p147, p148, p149, p150, p151 } from '../components/imports'


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
    const storedDex = useRef([])
    const [detailButton, setDetailButton] = useState('')
    const [pokemonArray, setPokemonArray] = useState([])

    // Effects

    useEffect(() => {
        getPokemons()
        storedDex.current = JSON.parse(localStorage.getItem('pokedex'))
    }, []
    )

    useEffect(() => {
        if (didMount.current) {
            storedDex.current = JSON.parse(localStorage.getItem('pokedex'))
            if (storedDex.current) {
                for (let i = 0; i < pokedexArray.length; i++) {
                    var newDex = [...storedDex.current, pokedexArray[i]]
                }
                localStorage.setItem('pokedex', JSON.stringify(newDex))
            } else {
                localStorage.setItem('pokedex', JSON.stringify(pokedexArray))
            }
            storedDex.current = JSON.parse(localStorage.getItem('pokedex'))
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

    const playPokeSound = (id) => {
        let pokesound
        switch (id) {
            case 1:
                pokesound = p1;
                break;
            case 2:
                pokesound = p2;
                break;
            case 3:
                pokesound = p3;
                break;
            case 4:
                pokesound = p4;
                break;
            case 5:
                pokesound = p5;
                break;
            case 6:
                pokesound = p6;
                break;
            case 7:
                pokesound = p7;
                break;
            case 8:
                pokesound = p8;
                break;
            case 9:
                pokesound = p9;
                break;
            case 10:
                pokesound = p10;
                break;
            case 11:
                pokesound = p11;
                break;
            case 12:
                pokesound = p12;
                break;
            case 13:
                pokesound = p13;
                break;
            case 14:
                pokesound = p14;
                break;
            case 15:
                pokesound = p15;
                break;
            case 16:
                pokesound = p16;
                break;
            case 17:
                pokesound = p17;
                break;
            case 18:
                pokesound = p18;
                break;
            case 19:
                pokesound = p19;
                break;
            case 20:
                pokesound = p20;
                break;
            case 21:
                pokesound = p21;
                break;
            case 22:
                pokesound = p22;
                break;
            case 23:
                pokesound = p23;
                break;
            case 24:
                pokesound = p24;
                break;
            case 25:
                pokesound = p25;
                break;
            case 26:
                pokesound = p26;
                break;
            case 27:
                pokesound = p27;
                break;
            case 28:
                pokesound = p28;
                break;
            case 29:
                pokesound = p29;
                break;
            case 30:
                pokesound = p30;
                break;
            case 31:
                pokesound = p31;
                break;
            case 32:
                pokesound = p32;
                break;
            case 33:
                pokesound = p33;
                break;
            case 34:
                pokesound = p34;
                break;
            case 35:
                pokesound = p35;
                break;
            case 36:
                pokesound = p36;
                break;
            case 37:
                pokesound = p37;
                break;
            case 38:
                pokesound = p38;
                break;
            case 39:
                pokesound = p39;
                break;
            case 40:
                pokesound = p40;
                break;
            case 41:
                pokesound = p41;
                break;
            case 42:
                pokesound = p42;
                break;
            case 43:
                pokesound = p43;
                break;
            case 44:
                pokesound = p44;
                break;
            case 45:
                pokesound = p45;
                break;
            case 46:
                pokesound = p46;
                break;
            case 47:
                pokesound = p47;
                break;
            case 48:
                pokesound = p48;
                break;
            case 49:
                pokesound = p49;
                break;
            case 50:
                pokesound = p50;
                break;
            case 51:
                pokesound = p51;
                break;
            case 52:
                pokesound = p52;
                break;
            case 53:
                pokesound = p53;
                break;
            case 54:
                pokesound = p54;
                break;
            case 55:
                pokesound = p55;
                break;
            case 56:
                pokesound = p56;
                break;
            case 57:
                pokesound = p57;
                break;
            case 58:
                pokesound = p58;
                break;
            case 59:
                pokesound = p59;
                break;
            case 60:
                pokesound = p60;
                break;
            case 61:
                pokesound = p61;
                break;
            case 62:
                pokesound = p62;
                break;
            case 63:
                pokesound = p63;
                break;
            case 64:
                pokesound = p64;
                break;
            case 65:
                pokesound = p65;
                break;
            case 66:
                pokesound = p66;
                break;
            case 67:
                pokesound = p67;
                break;
            case 68:
                pokesound = p68;
                break;
            case 69:
                pokesound = p69;
                break;
            case 70:
                pokesound = p70;
                break;
            case 71:
                pokesound = p71;
                break;
            case 72:
                pokesound = p72;
                break;
            case 73:
                pokesound = p73;
                break;
            case 74:
                pokesound = p74;
                break;
            case 75:
                pokesound = p75;
                break;
            case 76:
                pokesound = p76;
                break;
            case 77:
                pokesound = p77;
                break;
            case 78:
                pokesound = p78;
                break;
            case 79:
                pokesound = p79;
                break;
            case 80:
                pokesound = p80;
                break;
            case 81:
                pokesound = p81;
                break;
            case 82:
                pokesound = p82;
                break;
            case 83:
                pokesound = p83;
                break;
            case 84:
                pokesound = p84;
                break;
            case 85:
                pokesound = p85;
                break;
            case 86:
                pokesound = p86;
                break;
            case 87:
                pokesound = p87;
                break;
            case 88:
                pokesound = p88;
                break;
            case 89:
                pokesound = p89;
                break;
            case 90:
                pokesound = p90;
                break;
            case 91:
                pokesound = p91;
                break;
            case 92:
                pokesound = p92;
                break;
            case 93:
                pokesound = p93;
                break;
            case 94:
                pokesound = p94;
                break;
            case 95:
                pokesound = p95;
                break;
            case 96:
                pokesound = p96;
                break;
            case 97:
                pokesound = p97;
                break;
            case 98:
                pokesound = p98;
                break;
            case 99:
                pokesound = p99;
                break;
            case 100:
                pokesound = p100;
                break;
            case 101:
                pokesound = p101;
                break;
            case 102:
                pokesound = p102;
                break;
            case 103:
                pokesound = p103;
                break;
            case 104:
                pokesound = p104;
                break;
            case 105:
                pokesound = p105;
                break;
            case 106:
                pokesound = p106;
                break;
            case 107:
                pokesound = p107;
                break;
            case 108:
                pokesound = p108;
                break;
            case 109:
                pokesound = p109;
                break;
            case 110:
                pokesound = p110;
                break;
            case 111:
                pokesound = p111;
                break;
            case 112:
                pokesound = p112;
                break;
            case 113:
                pokesound = p113;
                break;
            case 114:
                pokesound = p114;
                break;
            case 115:
                pokesound = p115;
                break;
            case 116:
                pokesound = p116;
                break;
            case 117:
                pokesound = p117;
                break;
            case 118:
                pokesound = p118;
                break;
            case 119:
                pokesound = p119;
                break;
            case 120:
                pokesound = p120;
                break;
            case 121:
                pokesound = p121;
                break;
            case 122:
                pokesound = p122;
                break;
            case 123:
                pokesound = p123;
                break;
            case 124:
                pokesound = p124;
                break;
            case 125:
                pokesound = p125;
                break;
            case 126:
                pokesound = p126;
                break;
            case 127:
                pokesound = p127;
                break;
            case 128:
                pokesound = p128;
                break;
            case 129:
                pokesound = p129;
                break;
            case 130:
                pokesound = p130;
                break;
            case 131:
                pokesound = p131;
                break;
            case 132:
                pokesound = p132;
                break;
            case 133:
                pokesound = p133;
                break;
            case 134:
                pokesound = p134;
                break;
            case 135:
                pokesound = p135;
                break;
            case 136:
                pokesound = p136;
                break;
            case 137:
                pokesound = p137;
                break;
            case 138:
                pokesound = p138;
                break;
            case 139:
                pokesound = p139;
                break;
            case 140:
                pokesound = p140;
                break;
            case 141:
                pokesound = p141;
                break;
            case 142:
                pokesound = p142;
                break;
            case 143:
                pokesound = p143;
                break;
            case 144:
                pokesound = p144;
                break;
            case 145:
                pokesound = p145;
                break;
            case 146:
                pokesound = p146;
                break;
            case 147:
                pokesound = p147;
                break;
            case 148:
                pokesound = p148;
                break;
            case 149:
                pokesound = p149;
                break;
            case 150:
                pokesound = p150;
                break;
            case 151:
                pokesound = p151;
                break;
        }
        var audio = new Audio(pokesound)
        audio.play();
    }

    // BUTTONS FUNCTIONS

    const addPokedex = (id, pokemon) => {
        const found = pokemonsData.findIndex((pkm) => pkm.data.id === id)
        const newPokemonsData = [...pokemonsData]
        newPokemonsData.splice(found, 1)
        setPokemonsData(newPokemonsData)
        const newPokedexArray = [...pokedexArray]
        newPokedexArray.push(pokemon)
        setPokedexArray(newPokedexArray)
        didMount.current = true
        playGotcha()

    }

    const removePokedex = (id) => {
        storedDex.current = JSON.parse(localStorage.getItem('pokedex'))
        const found = storedDex.current.findIndex((pkm) => pkm.data.id == id)
        const newPokedexArray = [...storedDex.current]
        newPokedexArray.splice(found, 1)
        localStorage.setItem('pokedex', JSON.stringify(newPokedexArray))
        playRun()
        storedDex.current = JSON.parse(localStorage.getItem('pokedex'))
        getPokemons()

    }

    const reRenderAdd = () => {
        storedDex.current = JSON.parse(localStorage.getItem('pokedex'))
        getPokemons()
    }

    if (storedDex.current) {
        var found = []
        for (let i = 0; i < storedDex.current.length; i++) {
            found = pokemonsData.findIndex((pkm) => pkm.data.id === storedDex.current[i].data.id)
            if (found > -1) {
                const newPokemonsData = [...pokemonsData]
                newPokemonsData.splice(found, 1)
                setPokemonsData(newPokemonsData)
            }
        }
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
                    playPokeSound,
                    playAPress,
                    detailButton,
                    setDetailButton,
                    addPokedex,
                    removePokedex,
                    pokemonArray,
                    setPokemonArray,
                    storedDex,
                    reRenderAdd
                }
            } >
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState;