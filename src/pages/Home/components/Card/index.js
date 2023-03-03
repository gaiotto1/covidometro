import React, { useState } from 'react'

import { useCasesCovid } from '../../hooks/useCasesCovid'

import { Loading } from '../../../../components/Loading'
import { ContainerCard, Box, ContainerList, ContainerError } from './styles'

export const Card = ({ title, totalCases, deaths, fatality, slug }) => {
  const [enabled, setEnabled] = useState(false)
  const { totalCasesLastDays, loading, error, getTotalCasesLastDays } =
    useCasesCovid()

  async function handleGetTotalCasesLastDays(open) {
    setEnabled(!enabled)

    if (!open) {
      await getTotalCasesLastDays(slug)
    }
  }

  async function handleUpdateTotalCasesLastDays() {
    await getTotalCasesLastDays(slug)
  }

  return (
    <ContainerCard>
      <button onClick={() => handleGetTotalCasesLastDays(enabled)}>
        {title}
      </button>

      <Box>
        Total de casos
        <span>{totalCases}</span>
      </Box>

      <Box>
        Mortes
        <span>{deaths}</span>
      </Box>

      <Box style={{ border: 'none' }}>
        Fatalidade
        <span>{fatality}%</span>
      </Box>

      <ContainerList enabled={enabled}>
        <h1>Total de casos dos últimos 5 dias:</h1>

        {loading && <Loading />}

        {error && !loading && (
          <ContainerError>
            <p>{error}</p>
            <button onClick={() => handleUpdateTotalCasesLastDays()}>
              Atualizar
            </button>
          </ContainerError>
        )}

        {!loading &&
          !error &&
          totalCasesLastDays.map((item, index) => (
            <li key={index}>
              <span>{item.date}</span>
              <p>{item.totalCases}</p>
            </li>
          ))}
      </ContainerList>
    </ContainerCard>
  )
}
