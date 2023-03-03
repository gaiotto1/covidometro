import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'

import { ContainerForm, Wrapper, ContainerInput } from './styles'

export const SearchForm = ({ handleSearchCasesCovid }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const country = event.target.country.value
    handleSearchCasesCovid(country)
  }

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <Wrapper>
        <h1>Filtrar dados sobre um país</h1>

        <ContainerInput>
          <input
            type="text"
            id="country"
            placeholder="Digite o nome de um país"
            data-testid="input-search"
          />

          <button type="submit" data-testid="button-search">
            <MagnifyingGlass
              size={18}
              color="#EE6261"
              data-testid="magnifying-glass"
            />
          </button>
        </ContainerInput>
      </Wrapper>
    </ContainerForm>
  )
}
