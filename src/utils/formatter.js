export const numberFormatter = (value) => parseFloat(value).toLocaleString()

export const dateFormatter = (value) =>
  new Date(value).toLocaleDateString('pt-BR')
