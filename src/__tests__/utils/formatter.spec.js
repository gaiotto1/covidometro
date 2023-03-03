import { numberFormatter, dateFormatter } from '../../utils/formatter'

describe('numberFormatter', () => {
  it('formats a positive integer', () => {
    const value = '123456789'
    const expectedOutput = '123,456,789'
    expect(numberFormatter(value)).toBe(expectedOutput)
  })

  it('formats NaN as "NaN"', () => {
    const value = 'not a number'
    const expectedOutput = 'NaN'
    expect(numberFormatter(value)).toBe(expectedOutput)
  })
})

describe('dateFormatter', () => {
  it('formats a date in the correct format', () => {
    const value = '2023-03-02T21:55:21.771Z'
    const expectedOutput = '02/03/2023'
    expect(dateFormatter(value)).toBe(expectedOutput)
  })

  it('handles an invalid date', () => {
    const value = 'not a date'
    const expectedOutput = 'Invalid Date'
    expect(dateFormatter(value)).toBe(expectedOutput)
  })
})
