import React from 'react'

import { ContainerCard } from './styles'

export const Card = ({ title, totalCases, deaths, fatality }) => {
  return (
    <ContainerCard>
      <h1>{title}</h1>

      <div>
        Total de casos
        <span>{totalCases}</span>
      </div>

      <div>
        Mortes
        <span>{deaths}</span>
      </div>

      <div>
        Fatalidade
        <span>{fatality}%</span>
      </div>
    </ContainerCard>
  )
}
