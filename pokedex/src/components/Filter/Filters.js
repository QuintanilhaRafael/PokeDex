import React from "react";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { Field, FilterDiv } from "./style";

function Filters({ selected, setSelected }) {

  const { nameNumberQuery, setNameNumberQuery, typeQuery, setTypeQuery } = useContext(GlobalStateContext)

  return (
    <FilterDiv>
      <Field>
        <label htmlFor='name-number'>Filtro por nome ou número:</label>
        <input name='name-number' placeholder='Digite o nome ou número' type='text' value={nameNumberQuery} onChange={(e) => { setNameNumberQuery(e.target.value) }} />
      </Field>
      <Field>
        <label htmlFor='type'>Filtro por tipo:</label>
        <input name='type' placeholder='Digite o tipo' type='text' value={typeQuery} onChange={(e) => { setTypeQuery(e.target.value) }} />
      </Field>
      <Field>
        <label htmlFor='type'>Ordenar por:</label>
        <select value={selected} onChange={(e) => { setSelected(e.target.value) }} >
          <option value="number">Número</option>
          <option value="name">Nome</option>
        </select>
      </Field>
    </FilterDiv>
  );
}

export default Filters;
