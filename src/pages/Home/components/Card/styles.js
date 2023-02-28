import styled from 'styled-components'

export const ContainerCard = styled.div`
  width: 100%;
  min-height: 179px;
  height: auto;
  background-color: ${(props) => props.theme.white};
  border-radius: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px 20px;
  margin-bottom: 23px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  h1 {
    width: 100%;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.8rem;
  }

  div {
    width: 33.3333%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 1.1rem;
    font-weight: 500;
    border-right: 1.5px solid ${(props) => props.theme['white-200']};

    &:last-child {
      border-right: none;
    }

    span {
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
      line-height: 1.5rem;
      margin-top: 8px;
      font-weight: 700;
      color: ${(props) => props.theme['red-100']};

      @media (max-width: 600px) {
        margin-top: 0px;
      }
    }

    @media (max-width: 600px) {
      width: 100%;
      border-right: none;
      margin-top: 10px;
    }
  }
`
