import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'

import { ContainerForm, Wrapper, ContainerInput } from './styles'

export const SearchForm = () => {
  return (
    <ContainerForm>
      <Wrapper>
        <h1>Filtrar dados sobre um país</h1>

        <ContainerInput>
          <input
            type="text"
            id="country"
            placeholder="Digite o nome de um país"
          />

          <button type="submit">
            <MagnifyingGlass size={18} color="#EE6261" />
          </button>
        </ContainerInput>
      </Wrapper>
    </ContainerForm>
  )
}
