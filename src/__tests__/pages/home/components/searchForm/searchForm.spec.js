import { render } from '@testing-library/react'
import { SearchForm } from '../../../../../pages/Home/components/SearchForm'

describe('SearchForm', () => {
  it('render input search and button', () => {
    const handleSearchCasesCovidMock = jest.fn()
    const { getByTestId } = render(
      <SearchForm handleSearchCasesCovid={() => handleSearchCasesCovidMock} />,
    )
    const input = getByTestId('input-search')
    const button = getByTestId('button-search')

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('renders the magnifying glass icon', () => {
    const { getByTestId } = render(
      <SearchForm handleSearchCasesCovid={() => {}} />,
    )
    const magnifyingGlass = getByTestId('magnifying-glass')

    expect(magnifyingGlass).toBeInTheDocument()
  })
})
