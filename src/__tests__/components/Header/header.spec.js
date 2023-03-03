import React from 'react'
import { render } from '@testing-library/react'
import { Header } from '../../../components/Header'

describe('Header component', () => {
  it('renders HeaderContainer and HeaderEmpty components', () => {
    const { getByTestId } = render(<Header />)
    expect(getByTestId('header-container')).toBeInTheDocument()
    expect(getByTestId('header-empty')).toBeInTheDocument()
  })
})
