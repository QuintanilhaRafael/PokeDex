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

function DetailsPage() {

  const navigate = useNavigate();

  const pathParams = useParams();

  const { isLoading, error, pokemonDetails, setPokemonDetails, setIsLoading, setError } = useContext(GlobalStateContext)

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
          setPokemonDetails([response.data])
        }, 1000)
      }).catch((err) => {
        setIsLoading(false)
        setError(err)
      })
  }

  // RENDER DETAILS

  const detailsList = pokemonDetails && pokemonDetails.map(pokemon => {
    return (
      <div key={pokemon.id}>
        <span>{pokemon.name}</span>
      </div>
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
          <button >Adicionar/Remover da Pokedéx</button>
        </PageNav>
      </Header>

      <Main>
        {isLoading && <LoadingGif src="https://thumbs.gfycat.com/DampSpanishCleanerwrasse-max-1mb.gif" />}
        {!isLoading && pokemonDetails && detailsList}
        {!isLoading && !pokemonDetails && error}
      </Main>

    </PageContainer>
  );
}

export default DetailsPage;