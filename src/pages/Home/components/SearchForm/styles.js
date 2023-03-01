import styled from 'styled-components'

export const ContainerForm = styled.div`
  width: calc(100% - 40px);
  height: auto;
  margin: auto;
  margin-top: -62px;
  margin-bottom: 23px;
  position: relative;

  @media (max-width: 600px) {
    margin-top: 0px;
  }

  h1 {
    width: 100%;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.8rem;
    margin-bottom: 20px;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 786px;
  padding: 42px 20px 32px 20px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.white};
  border-radius: 6px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`

export const ContainerInput = styled.form`
  width: 100%;
  max-width: 579px;
  position: relative;

  input {
    width: 100%;
    height: 37px;
    border: none;
    padding: 0px 10px 0px 30px;
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme['gray-200']};
    border-bottom: 1px solid ${(props) => props.theme['red-100']};

    &::placeholder {
      color: ${(props) => props.theme['gray-100']};
    }

    &:focus {
      outline: none;
    }
  }

  button {
    width: 25px;
    height: 37px;
    border: none;
    background-color: transparent;
    position: absolute;
    left: 0px;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`
