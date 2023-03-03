import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: ${(props) => props.theme['white-300']};
  overflow: hidden;
`

export const ContainerTitle = styled.div`
  width: 100%;
  height: auto;
`

export const WrapperTitleHome = styled.div`
  width: 100%;
  max-width: 1210px;
  padding: 20px 20px 0px 20px;
  height: 412px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 100%;
  }

  h1 {
    font-size: 3rem;
    line-height: 3rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-200']};

    @media (max-width: 400px) {
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  p {
    width: 100%;
    max-width: 590px;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 10px;
    color: ${(props) => props.theme['gray-200']};
  }

  img {
    width: 37%;
    max-width: 433px;
    margin-top: 60px;
    margin-left: 20px;
  }

  @media (max-width: 320px) {
    height: auto;
    padding: 30px 20px;
  }
`

export const ContainerCards = styled.div`
  width: 100%;
  max-width: 826px;
  height: auto;
  margin: 0 auto;
  padding: 0px 20px;
`

export const ContainerMessageAlert = styled.div`
  width: 100%;
  max-width: 786px;
  height: auto;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 2px 7px -1px ${({ theme }) => theme['gray-100']};

  p {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${(props) => props.theme['red-100']};
  }
`
