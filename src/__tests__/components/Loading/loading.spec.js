import React from 'react'
import { render } from '@testing-library/react'
import { Loading } from '../../../components/Loading'

describe('Loading component', () => {
  it('renders loading component', () => {
    const { getByTestId } = render(<Loading />)
    expect(getByTestId('linewave')).toBeInTheDocument()
  })
})
