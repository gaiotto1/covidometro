import { useState } from 'react'

export const useCasesCovid = () => {
  const [casesCovid, setCasesCovid] = useState([])
  const [casesCovidData, setCasesCovidData] = useState([])
  const [loading, setLoading] = useState(false)

  function loadInformationsCovid() {
    try {
      setCasesCovid([])
      setCasesCovidData([])
      setLoading(true)

      fetch('https://api.covid19api.com/summary', { cache: 'no-store' })
        .then((response) => response.json())
        .then((data) => {
          console.log('dataaa', data)

          if (!data?.Countries?.length) {
            return
          }

          data?.Countries?.sort((a, b) => {
            return b.TotalConfirmed - a.TotalConfirmed
          })
          setCasesCovid(data.Countries)
          setCasesCovidData(data.Countries)
        })
    } catch (error) {
      console.log('error', error)
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

  return { casesCovid, loading, loadInformationsCovid, searchCasesCovid }
}
