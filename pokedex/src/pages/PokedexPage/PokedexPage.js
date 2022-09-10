import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import Filters from "../../components/Filter/Filters";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import pokeball from "../../img/pokeball.svg"
import { goToHomePage } from "../../routes/Coordinator";
import { Header, Main, PageNav, PageTitle } from "../../style";
import { CardsSection } from "../HomePage/style";

function PokedexPage() {

  const navigate = useNavigate();

  const { nameNumberQuery, typeQuery, selected, pokedexArray, playPcOff } = useContext(GlobalStateContext)



  // RENDER POKEDEX

  const pokedexList = pokedexArray && pokedexArray
    .filter(pokemon => {
      let number
      if (pokemon.data.id < 10) {
        number = `#00${pokemon.data.id}`
      } else if (pokemon.data.id >= 10 && pokemon.data.id < 100) {
        number = `#0${pokemon.data.id}`
      } else {
        number = `#${pokemon.data.id}`
      }
      return pokemon.data.name.toLowerCase().includes(nameNumberQuery.toLowerCase()) || number.includes(nameNumberQuery)
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
          buttonType={'remove'}
          detailType={'pokedex'}
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
          <button onClick={() => { goToHomePage(navigate); playPcOff(); }}>Voltar para a lista de Pokémons</button>
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