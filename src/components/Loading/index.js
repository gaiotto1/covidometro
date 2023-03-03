import React from 'react'

import { LineWave } from 'react-loader-spinner'

import { ContainerLoading } from './styles'

export function Loading() {
  return (
    <ContainerLoading>
      <LineWave
        height="100"
        width="100"
        color="#EE6261"
        ariaLabel="line-wave"
        visible={true}
      />
    </ContainerLoading>
  )
}
