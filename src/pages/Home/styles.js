import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
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
  padding: 20px 20px;
  height: auto;
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
    margin-top: 20px;
    margin-left: 20px;
  }
`

export const ContainerCards = styled.div`
  width: 100%;
  max-width: 788px;
  height: auto;
  margin: 0 auto;
  padding: 20px 20px;
`
