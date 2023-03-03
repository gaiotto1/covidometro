import React from 'react'
import { render, screen } from '@testing-library/react'
import { Home } from '../../../pages/Home'

describe('Home Component', () => {
  it('renders header and introduction section', () => {
    render(<Home />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /conheça o covidômetro/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/fique atualizado com velocidade e transparência/i),
    ).toBeInTheDocument()
    expect(screen.getByAltText(/médicos/i)).toBeInTheDocument()
  })
})
