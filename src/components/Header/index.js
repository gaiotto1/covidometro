import React from 'react'
import { HeaderContainer, HeaderContent, HeaderEmpty } from './styles'

import logoImg from '../../assets/logo.png'

export function Header() {
  return (
    <>
      <HeaderContainer data-testid="header-container">
        <HeaderContent>
          <img src={logoImg} alt="" />
        </HeaderContent>
      </HeaderContainer>
      <HeaderEmpty data-testid="header-empty" />
    </>
  )
}
