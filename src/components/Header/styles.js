import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 2px 7px -1px ${({ theme }) => theme['gray-100']};
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1210px;
  margin: 0 auto;
  height: 70px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
