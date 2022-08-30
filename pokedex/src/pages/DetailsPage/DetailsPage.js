import React from "react";
import { useNavigate } from "react-router-dom";
import pokeball from "../../img/pokeball.svg"
import { goBack, goToHomePage } from "../../routes/Coordinator";
import { Header, PageNav, PageTitle } from "../../style";

function DetailsPage() {

  const navigate = useNavigate();

  return (
    <div>

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

    </div>
  );
}

export default DetailsPage;