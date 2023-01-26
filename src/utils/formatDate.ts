const dictionary = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

export const formatDate = (date: string) => {
  const [year, month, day] = date.split('-')

  const monthWord = dictionary[Number(month) - 1]

  const dayVerify = day ? `${day} de` : ''
  const monthVerify = monthWord ? `${monthWord} de` : ''

  return `${dayVerify} ${monthVerify} ${year}`
}
