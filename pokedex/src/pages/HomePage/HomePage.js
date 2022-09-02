import React from "react";
import { useNavigate } from "react-router-dom";
import Filters from "../../components/Filter/Filters";
import pokeball from "../../img/pokeball.svg"
import { goToHomePage, goToPokedexPage } from "../../routes/Coordinator";
import { Header, Main, PageNav, PageTitle } from "../../style";

function HomePage() {

  const navigate = useNavigate();

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
        
      </Main>

    </div>
  );
}

export default HomePage;