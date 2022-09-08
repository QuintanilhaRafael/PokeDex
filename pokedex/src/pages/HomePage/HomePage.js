import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Filters from "../../components/Filter/Filters";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import pokeball from "../../img/pokeball.svg"
import { goToHomePage, goToPokedexPage } from "../../routes/Coordinator";
import { Header, Main, PageContainer, PageNav, PageTitle } from "../../style";
import Card from './../../components/Card/Card';
import { CardsSection, LoadingGif } from "./style";

function HomePage() {

  const navigate = useNavigate();

  const { nameNumberQuery, typeQuery, selected, isLoading, error, pokemonsData } = useContext(GlobalStateContext)

  // RENDER POKEMONS

  const pokemonsList = pokemonsData && pokemonsData
    .filter(pokemon => {
      return pokemon.data.name.toLowerCase().includes(nameNumberQuery.toLowerCase()) || `${pokemon.data.id}`.includes(nameNumberQuery)
    })
    .filter(pokemon => {
      let pokemonType
      if (pokemon.data.types[1]) {
        pokemonType = pokemon.data.types[0].type.name + pokemon.data.types[1].type.name
      } else {
        pokemonType = pokemon.data.types[0].type.name
      }
      return pokemonType.toLowerCase().includes(typeQuery.toLowerCase())
    })
    .sort((pokemon1, pokemon2) => {
      switch (selected) {
        case 'name':
          return pokemon1.data.name.localeCompare(pokemon2.data.name)
        default:
          return pokemon1.data.id - pokemon2.data.id
      }
    })
    .map(pokemon => {
      return (
        <Card
          key={pokemon.data.id}
          id={pokemon.data.id}
          name={pokemon.data.name}
          img={pokemon.data.sprites.versions['generation-v']['black-white']['animated']['front_default']}
          types={pokemon.data.types}
          pokemon={pokemon}
        />
      )
    })

  return (
    <PageContainer>

      <Header>
        <PageTitle>
          <img onClick={() => goToHomePage(navigate)} src={pokeball} alt="pokeball" />
          <h1>Lista de Pokémons</h1>
        </PageTitle>
        <PageNav>
          <button onClick={() => goToPokedexPage(navigate)}>Ir para Pokédex</button>
        </PageNav>
      </Header>

      <Main>

        <Filters />
        <CardsSection>
          {isLoading && <LoadingGif src="https://thumbs.gfycat.com/DampSpanishCleanerwrasse-max-1mb.gif" />}
          {!isLoading && pokemonsData && pokemonsList}
          {!isLoading && !pokemonsData && error}
        </CardsSection>
      </Main>

    </PageContainer>
  );
}

export default HomePage;