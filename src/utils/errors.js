export const NetworkErrorMessage = 'Network Error'

export const getErrorMessage = error => (
  error?.toString?.() ||
  'Network Error'
)
