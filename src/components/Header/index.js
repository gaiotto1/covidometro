import React from 'react'
import { HeaderContainer, HeaderContent, HeaderEmpty } from './styles'

import logoImg from '../../assets/logo.png'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="" />
        </HeaderContent>
      </HeaderContainer>
      <HeaderEmpty />
    </>
  )
}
