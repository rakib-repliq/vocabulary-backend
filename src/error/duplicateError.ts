import { TErrorResponse } from '../interface/error'

export const handleDuplicateValidationError = (error: any): TErrorResponse => {
  const statusCode = 409
  const message = 'Duplicate Error'

  let extractKey = 'unknownKey'

  const keyMatch = error.message.match(/dup key: \{ (\w+):/)

  if (keyMatch && keyMatch.length > 1) {
    extractKey = keyMatch[1]
  }

  const errorMessage = `${extractKey} already exists!`

  return {
    statusCode,
    message,
    errorMessage,
    errorDetails: error,
    stack: error.stack,
  }
}
