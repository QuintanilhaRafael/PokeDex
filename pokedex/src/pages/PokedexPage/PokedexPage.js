import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import Filters from "../../components/Filter/Filters";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import pokeball from "../../img/pokeball.svg"
import { goToHomePage } from "../../routes/Coordinator";
import { Header, Main, PageNav, PageTitle } from "../../style";
import { CardsSection, LoadingGif } from "../HomePage/style";

function PokedexPage() {

  const navigate = useNavigate();

  const { nameNumberQuery, isLoading, error, typeQuery, selected, pokedexArray } = useContext(GlobalStateContext)


    // RENDER POKEDEX

    const pokedexList = pokedexArray && pokedexArray
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
    <div>

      <Header>
        <PageTitle>
          <img onClick={() => goToHomePage(navigate)} src={pokeball} alt="pokeball" />
          <h1>Pokédex</h1>
        </PageTitle>
        <PageNav>
          <button onClick={() => goToHomePage(navigate)}>Voltar para a lista de Pokémons</button>
        </PageNav>
      </Header>

      <Main>

        <Filters />

        <CardsSection>
          {pokedexList}
        </CardsSection>

      </Main>

    </div>
  );
}

export default PokedexPage;