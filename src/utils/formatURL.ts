export const formatURL = (url: string) => {
  const removeSpaces = url.replace(/( )+/g, '-')
  const convertLowercase = removeSpaces.toLowerCase()

  return convertLowercase
}
