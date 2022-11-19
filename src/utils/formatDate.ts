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

  return `${day} de ${monthWord} de ${year}`
}
