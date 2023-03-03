import React, { useEffect, useState } from 'react'
import { LineWave } from 'react-loader-spinner'

import { useCasesCovid } from '../../hooks/useCasesCovid'

import {
  ContainerCard,
  Box,
  ContainerList,
  ContainerLoading,
  ContainerError,
} from './styles'

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

  useEffect(() => {
    console.log('loading', loading)
  }, [loading])

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

        {loading && (
          <ContainerLoading>
            <LineWave
              height="100"
              width="100"
              color="#EE6261"
              ariaLabel="line-wave"
              visible={true}
            />
          </ContainerLoading>
        )}

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
