import type { CodingResponseError } from '../types'

export class CodingError extends Error {
  response: CodingResponseError

  constructor(response: CodingResponseError) {
    super(response.Response.Error.Message)
    this.name = 'CodingError'
    this.response = response
  }
}
