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
      return pokemon.name.toLowerCase().includes(nameNumberQuery.toLowerCase())
    })
    .map(pokemon => {
      return (
        <div>
          <span>{pokemon.name}</span>
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