import { calculateFatalityRate } from '../../utils/fatalityRate'

describe('calculateFatalityRate', () => {
  it('returns the correct fatality rate', () => {
    const totalDeaths = 500
    const totalConfirmed = 10000
    const expectedFatalityRate = '5.00'
    expect(calculateFatalityRate(totalDeaths, totalConfirmed)).toBe(
      expectedFatalityRate,
    )
  })

  it('handles a totalConfirmed of zero', () => {
    const totalDeaths = 0
    const totalConfirmed = 0
    const expectedFatalityRate = 'NaN'
    expect(calculateFatalityRate(totalDeaths, totalConfirmed)).toBe(
      expectedFatalityRate,
    )
  })
})
