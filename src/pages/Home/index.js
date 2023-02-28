import React from 'react'
import { Header } from '../../components/Header'
import { Card } from './components/Card'

import {
  Container,
  ContainerTitle,
  WrapperTitleHome,
  ContainerCards,
} from './styles'

import doctorsSvg from '../../assets/doctors.svg'

export function Home() {
  const data = [
    {
      title: 'Brasil',
      totalCases: '1.000.000',
      deaths: '100.000',
      fatality: '10',
    },
    {
      title: 'Brasil',
      totalCases: '1.000.000',
      deaths: '100.000',
      fatality: '10',
    },
    {
      title: 'Brasil',
      totalCases: '1.000.000',
      deaths: '100.000',
      fatality: '10',
    },
  ]

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

      <ContainerCards>
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            totalCases={item.totalCases}
            deaths={item.deaths}
            fatality={item.fatality}
          />
        ))}
      </ContainerCards>
    </Container>
  )
}
