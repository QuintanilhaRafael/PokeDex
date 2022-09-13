import React, { useEffect } from "react";
import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import Filters from "../../components/Filter/Filters";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import pokeball from "../../img/pokeball.svg"
import { goToHomePage } from "../../routes/Coordinator";
import { CardsSection, EmptyPokedex, Header, Main, PageNav, PageTitle } from "../../style";

function PokedexPage() {

  const navigate = useNavigate();

  const { nameNumberQuery, typeQuery, selectedPokedex, setSelectedPokedex, playPcOff, storedDex, pokedexPageNumber, setPokedexPageNumber, pokemonsData } = useContext(GlobalStateContext)

  // Effects

  useEffect(() => {
    setPokedexPageNumber(0)
  }, []
  )

  // PAGINATION

  const cardsPerPage = 16
  const pagesVisited = pokedexPageNumber * cardsPerPage

  // RENDER POKEDEX

  const pokedexList = storedDex.current && storedDex.current
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
      switch (selectedPokedex) {
        case 'name':
          return pokemon1.data.name.localeCompare(pokemon2.data.name)
        default:
          return pokemon1.data.id - pokemon2.data.id
      }
    })

  const displayCards = pokedexList && pokedexList
    .slice(pagesVisited, pagesVisited + cardsPerPage)
    .map(pokemon => {
      return (
        <Card
          key={pokemon.data.id}
          id={pokemon.data.id}
          name={pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.slice(1)}
          img={pokemon.data.sprites.versions['generation-v']['black-white']['animated']['front_default']}
          types={pokemon.data.types}
          pokemon={pokemon}
          buttonType={'remove'}
          detailType={'pokedex'}
        />
      )
    })


  var pokedexLength
  if (pokedexList === null) {
    pokedexLength = 0
  } else {
    pokedexLength = pokedexList.length
  }

  const pageCount = Math.ceil(pokedexLength / cardsPerPage)

  const changePage = ({ selected }) => {
    setPokedexPageNumber(selected)
  }

  return (
    <div>

      <Header>
        <PageTitle>
          <img onClick={() => { goToHomePage(navigate); playPcOff(); }} src={pokeball} alt="pokeball" />
          <h1>Pokédex</h1>
        </PageTitle>
        <PageNav>
          <button onClick={() => { goToHomePage(navigate); playPcOff(); }}>Voltar para a lista de Pokémons</button>
        </PageNav>
      </Header>

      <Main>

        {pokemonsData.length === 151 ?
          <EmptyPokedex><h2>A Pokédex está vazia!</h2><h2>Capture algum Pokémon!</h2></EmptyPokedex> :
          <>
            <Filters selected={selectedPokedex} setSelected={setSelectedPokedex} />
            <CardsSection>
              {displayCards}
            </CardsSection>
          </>}


        {pokedexLength !== 0
          &&
          <ReactPaginate
            previousLabel={<i className="fa fa-angle-left"></i>}
            nextLabel={<i className="fa fa-angle-right"></i>}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />}

      </Main>

    </div>
  );
}

export default PokedexPage;