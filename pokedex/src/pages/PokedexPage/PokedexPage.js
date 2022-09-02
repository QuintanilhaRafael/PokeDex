import React from "react";
import { useNavigate } from "react-router-dom";
import Filters from "../../components/Filter/Filters";
import pokeball from "../../img/pokeball.svg"
import { goToHomePage } from "../../routes/Coordinator";
import { Header, Main, PageNav, PageTitle } from "../../style";

function PokedexPage() {

  const navigate = useNavigate();

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

      </Main>

    </div>
  );
}

export default PokedexPage;