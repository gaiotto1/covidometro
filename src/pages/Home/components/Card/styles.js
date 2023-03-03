import styled from 'styled-components'

export const ContainerCard = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.white};
  border-radius: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 36px 20px;
  margin-bottom: 23px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;

  button {
    width: 100%;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.8rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
    color: ${(props) => props.theme['gray-200']};
  }
`

export const Box = styled.div`
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
`

export const ContainerList = styled.ul`
  width: 100%;
  display: ${(props) => (props.enabled ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 25px;
  padding-top: 23px;
  border-top: 1px solid ${(props) => props.theme['white-200']};

  h1 {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    color: ${(props) => props.theme['gray-200']};
    margin-bottom: 20px;
  }

  li {
    width: calc(20% - 4px);
    list-style: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius: 6px;
    padding: 10px 0px;
    margin: 0px 2px;
    background-color: ${(props) => props.theme['white-100']};
    color: ${(props) => props.theme['gray-200']};

    span {
      width: 100%;
      font-size: 1.1rem;
      font-weight: 700;
    }

    p {
      width: 100%;
      font-size: 1rem;
      font-weight: 500;
      color: ${(props) => props.theme['red-100']};
    }

    @media (max-width: 700px) {
      width: 33.3333%;
      margin-bottom: 10px;
    }

    @media (max-width: 500px) {
      width: 100%;
    }
  }
`

export const ContainerError = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  p {
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme['red-100']};
  }

  button {
    width: 150px;
    height: 40px;
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme['gray-200']};
    border: 1px solid ${(props) => props.theme['gray-100']};
    border-radius: 6px;
    margin-top: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme['gray-200']};
      color: ${(props) => props.theme['white-100']};
    }
  }
`
