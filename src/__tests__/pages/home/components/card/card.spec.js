import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { useCasesCovid } from '../../../../../pages/Home/hooks/useCasesCovid'
import { Card } from '../../../../../pages/Home/components/Card'

jest.mock('.../../../../../pages/Home/hooks/useCasesCovid')

describe('Card component', () => {
  const mockData = {
    title: 'Brazil',
    totalCases: 123456,
    deaths: 7890,
    fatality: 6.4,
    slug: 'brazil',
  }

  beforeEach(() => {
    useCasesCovid.mockReturnValue({
      totalCasesLastDays: [{ date: '2022-03-01', totalCases: 100 }],
      loading: false,
      error: null,
      getTotalCasesLastDays: jest.fn(),
    })
  })

  it('renders the card with initial data', () => {
    const { getByText } = render(<Card {...mockData} />)
    expect(getByText('Brazil')).toBeInTheDocument()
    expect(getByText('Total de casos')).toHaveTextContent('123456')
    expect(getByText('Mortes')).toHaveTextContent('7890')
    expect(getByText('Fatalidade')).toHaveTextContent('6.4%')
  })

  it('renders the loading component when loading data', () => {
    useCasesCovid.mockReturnValue({
      ...useCasesCovid(),
      loading: true,
    })

    const { getByTestId } = render(<Card {...mockData} />)
    expect(getByTestId('linewave')).toBeInTheDocument()
  })

  it('renders the error message when there is an error', async () => {
    useCasesCovid.mockReturnValue({
      ...useCasesCovid(),
      error: 'Error message',
    })

    const { getByText, getByTestId } = render(<Card {...mockData} />)
    fireEvent.click(getByText('Brazil'))

    await waitFor(() => {
      expect(getByText('Error message')).toBeInTheDocument()
      expect(getByTestId('button-update')).toBeInTheDocument()
    })
  })

  it('renders the list of total cases when the button is clicked', async () => {
    const { getByText } = render(<Card {...mockData} />)

    fireEvent.click(getByText('Brazil'))

    await waitFor(() => {
      expect(
        getByText('Total de casos dos últimos 5 dias:'),
      ).toBeInTheDocument()
      expect(getByText('2022-03-01')).toBeInTheDocument()
      expect(getByText('100')).toBeInTheDocument()
    })
  })
})
