import { useState } from 'react'

import { dateFormatter, numberFormatter } from '../../../utils/formatter'

export const useCasesCovid = () => {
  const [casesCovid, setCasesCovid] = useState([])
  const [casesCovidData, setCasesCovidData] = useState([])
  const [totalCasesLastDays, setTotalCasesLastDays] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  async function loadInformationsCovid() {
    try {
      setCasesCovid([])
      setCasesCovidData([])
      setLoading(true)

      await fetch('https://api.covid19api.com/summary')
        .then((response) => response.json())
        .then((data) => {
          if (!data?.Countries?.length) {
            setError(data?.Message)
            return
          }

          const newDataCountries = data?.Countries?.sort((a, b) => {
            return b.TotalConfirmed - a.TotalConfirmed
          })

          setCasesCovid(newDataCountries)
          setCasesCovidData(newDataCountries)

          setError(false)
        })
    } catch (error) {
      setError('Ocorreu um erro ao carregar os dados.')
    } finally {
      setLoading(false)
    }
  }

  function searchCasesCovid(country) {
    try {
      if (country.trim() === '') {
        loadInformationsCovid()
        return
      }

      const data = casesCovidData.filter((item) => {
        return item.Country.toLowerCase().includes(country.toLowerCase())
      })
      setCasesCovid(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  async function getTotalCasesLastDays(country) {
    const messageError =
      'Ocorreu um erro ao carregar os dados. Tente novamente em alguns minutos.'

    try {
      setLoading(true)

      await fetch(
        `https://api.covid19api.com/total/dayone/country/${country}/status/confirmed`,
      )
        .then((response) => response.json())
        .then((data) => {
          if (!data?.length) {
            setError(messageError)
            return
          }

          const lastFiveDays = data.slice(-5)
          const totalCasesLastDays = lastFiveDays.map((item) => {
            return {
              date: dateFormatter(item.Date),
              totalCases: numberFormatter(item.Cases),
            }
          })

          setTotalCasesLastDays(totalCasesLastDays)
          setError(false)
        })
    } catch (error) {
      setError(messageError)
    } finally {
      setLoading(false)
    }
  }

  return {
    casesCovid,
    loading,
    error,
    loadInformationsCovid,
    searchCasesCovid,
    getTotalCasesLastDays,
    totalCasesLastDays,
  }
}
