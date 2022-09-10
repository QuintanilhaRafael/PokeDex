import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/constants";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import pokeball from "../../img/pokeball.svg"
import { goBack, goToHomePage } from "../../routes/Coordinator";
import { Header, Main, PageContainer, PageNav, PageTitle } from "../../style";
import { LoadingGif } from "../HomePage/style";
import { DetailsDiv, DetailsSection, ImgDiv, InfoDiv, MoveDiv, MoveItem, MoveTypeDiv, StatItem, StatsDiv, TypeDiv, TypeSpan } from "./style";

function DetailsPage() {

  const navigate = useNavigate();

  const pathParams = useParams();

  const { isLoading, error, pokemonDetails, setPokemonDetails, setIsLoading, setError, detailButton, addPokedex, removePokedex, pokemonArray, setPokemonArray } = useContext(GlobalStateContext)

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
    buttonRender = <button onClick={() => addPokedex(pathParams.id, pokemonArray)} >Adicionar à Pokédex</button>
  } else {
    buttonRender = <button onClick={() => removePokedex(pathParams.id)} >Remover da Pokédex</button>
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

    return (
      <DetailsDiv key={pokemon.id}>
        <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <InfoDiv>
          <ImgDiv>
            <img src={pokemon.sprites.versions['generation-v']['black-white']['animated']['front_default']} alt={pokemon.name} />
            <img src={pokemon.sprites.versions['generation-v']['black-white']['animated']['back_default']} alt={pokemon.name} />
          </ImgDiv>
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
          <MoveTypeDiv>
            <TypeDiv>
              <div>
                <TypeSpan className={`${firstPokemonType}`}>{firstPokemonType}</TypeSpan>
                {pokemon.types[1] && <TypeSpan className={`${secondPokemonType}`}>{secondPokemonType}</TypeSpan>}
              </div>
            </TypeDiv>
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
          <img onClick={() => goToHomePage(navigate)} src={pokeball} alt="pokeball" />
          <h1>Detalhes do Pokémon</h1>
        </PageTitle>
        <PageNav>
          <button onClick={() => goBack(navigate)}>Voltar</button>
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