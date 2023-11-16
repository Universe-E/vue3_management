//get time: morning | afternoon | night
export const getTime = () => {
  let message = ''
  const hours = new Date().getHours()
  if (hours <= 12) {
    message = 'Morning'
  } else if (hours <= 18) {
    message = 'Afternoon'
  } else {
    message = 'Night'
  }
  return message
}
