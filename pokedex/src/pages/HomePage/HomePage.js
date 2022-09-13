import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Filters from "../../components/Filter/Filters";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import pokeball from "../../img/pokeball.svg"
import { goToHomePage, goToPokedexPage } from "../../routes/Coordinator";
import { CardsSection, Header, LoadingGif, Main, PageContainer, PageNav, PageTitle } from "../../style";
import Card from './../../components/Card/Card';
import ReactPaginate from "react-paginate";
import ReactPlayer from 'react-player'
import { GotEmAll } from './../../style';

function HomePage() {

  const navigate = useNavigate();

  const { nameNumberQuery, typeQuery, selected, isLoading, error, pokemonsData, playPcOn, playAPress, listPageNumber, setListPageNumber, playCompletedDex, storedDex, catchOrReleaseAllOfThem } = useContext(GlobalStateContext)

  // Effects

  useEffect(() => {
    setListPageNumber(0)
  }, []
  )

  // PAGINATION

  const cardsPerPage = 16
  const pagesVisited = listPageNumber * cardsPerPage

  // RENDER POKEMONS

  const pokemonsList = pokemonsData && pokemonsData
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

  var displayCards = pokemonsList && pokemonsList
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
          buttonType={'add'}
          detailType={'home'}
        />
      )
    })

    //pagination

  const pageCount = Math.ceil(pokemonsList.length / cardsPerPage)

  const changePage = ({ selected }) => {
    setListPageNumber(selected)
  }

  // Pokedex completed changes

  const pkdexCompleted = () => {
    if (storedDex.current.length < 151) {
      playPcOn();
    } else {
      playCompletedDex()
    }
  }  

  if (displayCards.length === 0) {
    displayCards = <GotEmAll><h1>You Got 'Em All!</h1><h1>(Desmuta o som!!!)</h1> <ReactPlayer width='auto' playing={true} muted={true} controls url='https://www.youtube.com/watch?v=atqKPe8lOpE'/></GotEmAll>
  }

  return (
    <PageContainer>

      <Header>
        <PageTitle>
          <img onClick={() => { goToHomePage(navigate); playAPress(); catchOrReleaseAllOfThem()}} src={pokeball} alt="pokeball" />
          <h1>Lista de Pokémons</h1>
        </PageTitle>
        <PageNav>
          <button onClick={() => { goToPokedexPage(navigate); pkdexCompleted()}}>Ir para Pokédex</button>
        </PageNav>
      </Header>

      <Main>

        <Filters />
        <CardsSection>
          {isLoading && <LoadingGif src="https://thumbs.gfycat.com/DampSpanishCleanerwrasse-max-1mb.gif" />}
          {!isLoading && pokemonsData && displayCards}
          {!isLoading && !pokemonsData && error}
        </CardsSection>

        {pokemonsList.length !== 0
          &&
          <ReactPaginate
            previousLabel={<i class="fa fa-angle-left"></i>}
            nextLabel={<i class="fa fa-angle-right"></i>}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />}

      </Main>

    </PageContainer>
  );
}

export default HomePage;
