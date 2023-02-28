import React from 'react'
import { Header } from '../../components/Header'

import { Container, ContainerTitle, WrapperTitleHome } from './styles'

import doctorsSvg from '../../assets/doctors.svg'

export function Home() {
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
    </Container>
  )
}
