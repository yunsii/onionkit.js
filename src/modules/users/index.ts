import type { FetchApi } from '@/helpers/fetch'
import type { CodingResponse } from '@/types'

export interface Me {
  Id: number
  Status: 0 | 1
  Email: string
  GlobalKey: string
  Avatar: string
  Gravatar: string
  Name: string
  NamePinYin: string
  Phone: string
  /** 推测 1 为已验证，0 为未验证 */
  PhoneValidation: 0 | 1
  /** 推测 1 为已验证，0 为未验证 */
  EmailValidation: 0 | 1
  /** 形如 '+86' */
  PhoneRegionCode: string
  Region: string
  TeamId: number
  WeComId: string
}

export function fetchMe(fetch: FetchApi) {
  return fetch.run<CodingResponse<{ User: Me }>>({
    body: {
      Action: 'DescribeCodingCurrentUser',
    },
  })
}
