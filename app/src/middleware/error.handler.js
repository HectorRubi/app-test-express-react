export const errorHandler = (error) => {
  if (error.response.status >= 500) {
    return 'Something went wrong. Data could not be saved.<br>Try again later.'
  }

  if (error.response.status >= 400 && error.response.status < 499) {
    return 'Something went wrong. Data have incorrect format.<br>Try again.'
  }

  return 'Something went wrong.'
}
