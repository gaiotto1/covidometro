import React, { useEffect } from 'react'
import { Header } from '../../components/Header'
import { Card } from './components/Card'
import { SearchForm } from './components/SearchForm'
import { Loading } from '../../components/Loading'
import { useCasesCovid } from './hooks/useCasesCovid'
import { numberFormatter } from '../../utils/formatter'

import {
  Container,
  ContainerTitle,
  WrapperTitleHome,
  ContainerCards,
  ContainerMessageAlert,
} from './styles'

import doctorsSvg from '../../assets/doctors.svg'

export function Home() {
  const {
    casesCovid,
    loading,
    error,
    loadInformationsCovid,
    searchCasesCovid,
  } = useCasesCovid()

  useEffect(() => {
    loadInformationsCovid()
  }, [])

  function handleSearchCasesCovid(country) {
    searchCasesCovid(country)
  }

  return (
    <Container>
      <Header />

      <ContainerTitle>
        <WrapperTitleHome>
          <div>
            <h1>Conheça o Covidômetro</h1>
            <p>
              Fique atualizado com velocidade e transparência. O Covidômetro é
              uma ferramentaque mostra para você em tempo real o número de casos
              e óbitos relacionados a pandemia da Covid-19 ao redor do mundo.
            </p>
          </div>

          <img src={doctorsSvg} alt="Médicos" />
        </WrapperTitleHome>
      </ContainerTitle>

      <SearchForm handleSearchCasesCovid={handleSearchCasesCovid} />

      <ContainerCards>
        {casesCovid?.map((item, index) => (
          <Card
            key={index}
            title={item.Country}
            totalCases={numberFormatter(item.TotalConfirmed)}
            deaths={numberFormatter(item.TotalDeaths)}
            slug={item.Slug}
            fatality={((item.TotalDeaths / item.TotalConfirmed) * 100).toFixed(
              2,
            )}
          />
        ))}
      </ContainerCards>

      {loading && <Loading />}

      {!loading && error && (
        <ContainerMessageAlert>
          <p>
            Falha ao carregar os dados... <br /> {error}
          </p>
        </ContainerMessageAlert>
      )}

      {!loading && !error && casesCovid?.length === 0 && (
        <ContainerMessageAlert>
          <p>Nenhum resultado encontrado...</p>
        </ContainerMessageAlert>
      )}
    </Container>
  )
}
