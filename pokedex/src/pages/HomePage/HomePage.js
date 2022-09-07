import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Filters from "../../components/Filter/Filters";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import pokeball from "../../img/pokeball.svg"
import { goToHomePage, goToPokedexPage } from "../../routes/Coordinator";
import { Header, Main, PageNav, PageTitle } from "../../style";

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
        pokemonType = pokemon.data.types[0].type.name + " | " + pokemon.data.types[1].type.name
      } else {
        pokemonType = pokemon.data.types[0].type.name
      }
      return pokemonType.includes(typeQuery)
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
      let pokemonType
      if (pokemon.data.types[1]) {
        pokemonType = pokemon.data.types[0].type.name + " | " + pokemon.data.types[1].type.name
      } else {
        pokemonType = pokemon.data.types[0].type.name
      }
      return (
        <div key={pokemon.data.id}>
          <span>{pokemon.data.name}</span>
          <span>{pokemon.data.id}</span>
          <span>{pokemonType}</span>
        </div>
      )
    })

  return (
    <div>

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

        {isLoading && <span>Carregando...</span>}
        {!isLoading && pokemonsData && pokemonsList}
        {!isLoading && !pokemonsData && error}

      </Main>

    </div>
  );
}

export default HomePage;