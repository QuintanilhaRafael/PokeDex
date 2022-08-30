import React from "react";
import { useNavigate } from "react-router-dom";
import pokeball from "../../img/pokeball.svg"
import { goToDetailsPage, goToHomePage } from "../../routes/Coordinator";
import { Header, PageNav, PageTitle } from "../../style";

function PokedexPage() {

  const navigate = useNavigate();

  return (
    <div>

      <Header>
        <PageTitle>
          <img onClick={() => goToHomePage(navigate) } src={pokeball} alt="pokeball" />
          <h1>Pokédex</h1>
        </PageTitle>
        <PageNav>
          <button onClick={() => goToHomePage(navigate)}>Voltar para a lista de Pokémons</button>
        </PageNav>
      </Header>

    </div>
  );
}

export default PokedexPage;