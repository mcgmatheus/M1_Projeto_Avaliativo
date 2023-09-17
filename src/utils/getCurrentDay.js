export function getCurrentDay(value) {
  const dayOptions = [
    { value: 'segunda', number: 1 },
    { value: 'terca', number: 2 },
    { value: 'quarta', number: 3 },
    { value: 'quinta', number: 4 },
    { value: 'sexta', number: 5 },
    { value: 'sabado', number: 6 },
    { value: 'domingo', number: 0 }
  ]

  const dayOfWeek = dayOptions.find((item) => item.number === value)
  return dayOfWeek.value
}
