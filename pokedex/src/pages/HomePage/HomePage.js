import React from "react";
import { useNavigate } from "react-router-dom";
import pokeball from "../../img/pokeball.svg"
import { goToDetailsPage, goToHomePage, goToPokedexPage } from "../../routes/Coordinator";
import { Header, PageNav, PageTitle } from "../../style";

function HomePage() {

  const navigate = useNavigate();

  return (
    <div>

      <Header>
        <PageTitle>
          <img onClick={() => goToHomePage(navigate) } src={pokeball} alt="pokeball" />
          <h1>Lista de Pokémons</h1>
        </PageTitle>
        <PageNav>
          <button onClick={() => goToPokedexPage(navigate) }>Ir para Pokédex</button>
        </PageNav>
      </Header>

    </div>
  );
}

export default HomePage;