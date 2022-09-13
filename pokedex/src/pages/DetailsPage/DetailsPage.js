import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/constants";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import pokeball from "../../img/pokeball.svg"
import { goBack, goToHomePage, goToPokedexPage } from "../../routes/Coordinator";
import { Header, LoadingGif, Main, PageContainer, PageNav, PageTitle } from "../../style";
import { ComputerImgDiv, ComputerTypeDiv, DetailsDiv, DetailsSection, ImgDiv, InfoDiv, MobileImgDiv, MobileTypeDiv, MoveDiv, MoveItem, MoveTypeDiv, StatItem, StatsDiv, TypeDiv, TypeSpan } from "./style";

function DetailsPage() {

  const navigate = useNavigate();

  const pathParams = useParams();

  const { isLoading, error, pokemonDetails, setPokemonDetails, setIsLoading, setError, detailButton, addPokedex, removePokedex, pokemonArray, setPokemonArray, playAPress, reRenderAdd } = useContext(GlobalStateContext)

  // REQUEST

  useEffect(() => {
    getPokemonDetails()
  }, [])

  const getPokemonDetails = () => {
    setIsLoading(true);

    axios.get(`${BASE_URL}/${pathParams.id}`)
      .then((response) => {
        setTimeout(() => {
          setIsLoading(false)
          setPokemonArray(response)
          setPokemonDetails([response.data])
        }, 1000)
      }).catch((err) => {
        setIsLoading(false)
        setError(err)
      })
  }


  // RENDER BUTTON

  let buttonRender;
  if (detailButton === 'home') {
    buttonRender = <button onClick={() => { addPokedex(pathParams.id, pokemonArray); goToPokedexPage(navigate); reRenderAdd(); }} >Adicionar à Pokédex</button>
  } else {
    buttonRender = <button onClick={() => { removePokedex(pathParams.id); goToPokedexPage(navigate); }} >Remover da Pokédex</button>
  }


  // RENDER DETAILS

  const detailsList = pokemonDetails && pokemonDetails.map(pokemon => {
    // RENDER TYPES
    let firstPokemonType
    let secondPokemonType
    if (pokemon.types[1]) {
      firstPokemonType = pokemon.types[0].type.name
      secondPokemonType = pokemon.types[1].type.name
    } else {
      firstPokemonType = pokemon.types[0].type.name
    }

    // RENDER NUMBER

    let number
    if (pokemon.id < 10) {
      number = `#00${pokemon.id}`
    } else if (pokemon.id >= 10 && pokemon.id < 100) {
      number = `#0${pokemon.id}`
    } else {
      number = `#${pokemon.id}`
    }

    return (
      <DetailsDiv key={pokemon.id}>
        <h1><span>{number}</span>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <InfoDiv>
          <MobileImgDiv>
            <img src={pokemon.sprites.versions['generation-v']['black-white']['animated']['front_default']} alt={pokemon.name} />
            <img src={pokemon.sprites.versions['generation-v']['black-white']['animated']['back_default']} alt={pokemon.name} />
          </MobileImgDiv>
          <MobileTypeDiv>
              <div>
                <TypeSpan key={pokemon.id} className={`${firstPokemonType}`}>{firstPokemonType}</TypeSpan>
                {pokemon.types[1] && <TypeSpan className={`${secondPokemonType}`}>{secondPokemonType}</TypeSpan>}
              </div>
            </MobileTypeDiv>
          <StatsDiv>
            <h2>Estatísticas</h2>
            {pokemon.stats && pokemon.stats
              .map(stat => {
                return (
                  <StatItem key={stat.name}>
                    <span><b>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: </b></span>
                    <span>{stat.base_stat}</span>
                  </StatItem>
                )
              })}
          </StatsDiv>
          <ComputerImgDiv>
            <img src={pokemon.sprites.versions['generation-v']['black-white']['animated']['front_default']} alt={pokemon.name} />
            <img src={pokemon.sprites.versions['generation-v']['black-white']['animated']['back_default']} alt={pokemon.name} />
          </ComputerImgDiv>
          <MoveTypeDiv>
            <ComputerTypeDiv>
              <div>
                <TypeSpan key={pokemon.id} className={`${firstPokemonType}`}>{firstPokemonType}</TypeSpan>
                {pokemon.types[1] && <TypeSpan className={`${secondPokemonType}`}>{secondPokemonType}</TypeSpan>}
              </div>
            </ComputerTypeDiv>
            <MoveDiv>
              <h2>Movimentos</h2>
              {pokemon.moves && pokemon.moves
                .map(move => {
                  return (
                    <MoveItem key={move.name}>
                      <span>{move.move.name}</span>
                    </MoveItem>
                  )
                })}
            </MoveDiv>
          </MoveTypeDiv>
        </InfoDiv>
      </DetailsDiv>
    )
  })

  return (
    <PageContainer>

      <Header>
        <PageTitle>
          <img onClick={() => { goToHomePage(navigate); playAPress(); }} src={pokeball} alt="pokeball" />
          <h1>Detalhes do Pokémon</h1>
        </PageTitle>
        <PageNav>
          <button onClick={() => { goBack(navigate); playAPress(); }}>Voltar</button>
          {buttonRender}
        </PageNav>
      </Header>

      <Main>
        <DetailsSection>
          {isLoading && <LoadingGif src="https://thumbs.gfycat.com/DampSpanishCleanerwrasse-max-1mb.gif" />}
          {!isLoading && pokemonDetails && detailsList}
          {!isLoading && !pokemonDetails && error}
        </DetailsSection>
      </Main>

    </PageContainer>
  );
}

export default DetailsPage;