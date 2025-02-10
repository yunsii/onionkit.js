import crossFetch from 'cross-fetch'

import { makeApiPath } from './api'
import { CodingError } from './errors'

import type { CodingResponseError } from '../types'

export function isRequestInfo(obj: any): obj is RequestInfo | URL {
  return typeof obj === 'string' || (typeof Request !== 'undefined' && obj instanceof Request) || obj instanceof URL
}

export function transformInit(init?: CustomRequestInit): RequestInit {
  if (init?.body) {
    return {
      ...init,
      body: JSON.stringify(init.body),
    }
  }
  return init as RequestInit
}

export interface CustomRequestInit extends Omit<RequestInit, 'body'> {
  body?: Record<string, any>
}

export function isObject(obj: unknown): obj is Record<string, unknown> {
  return typeof obj === 'object' && obj !== null
}

export function isCodingErrorResponse(response: unknown): response is CodingResponseError {
  return !!(isObject(response) && 'Response' in response && isObject(response.Response) && 'Error' in response.Response)
}

export class FetchApi {
  private token: string

  constructor(token: string) {
    if (!token) {
      throw new Error('😶‍🌫️ 请先配置个人访问令牌')
    }
    this.token = token
  }

  async run<T = unknown>(
    input: RequestInfo | URL,
    init?: CustomRequestInit,
  ): Promise<T>
  async run<T = unknown>(init: CustomRequestInit): Promise<T>
  async run<T = unknown>(
    inputOrInit: RequestInfo | URL | CustomRequestInit,
    init?: CustomRequestInit,
  ) {
    const mergedInput = isRequestInfo(inputOrInit)
      ? inputOrInit
      : makeApiPath('/open-api')
    let mergedInit = isRequestInfo(inputOrInit) ? transformInit(init) : transformInit(inputOrInit)

    const defaultInit = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `token ${this.token}`,
      },
    } satisfies RequestInit

    mergedInit = {
      ...defaultInit,
      ...mergedInit,
      headers: {
        ...defaultInit.headers,
        ...mergedInit?.headers,
      },
    }

    const response = await crossFetch(mergedInput, mergedInit)

    const result: T = await response.json()

    if (isCodingErrorResponse(result)) {
      throw new CodingError(result)
    }

    return result
  }
}
