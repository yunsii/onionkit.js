import { makeApiPath } from '@/helpers/api'

import type { FetchApi } from '@/helpers/fetch'

export interface Me {
  id: number
  avatar: string
  /** 单位 ms */
  created_at: number
  global_key: string
  name: string
  email: string
  name_pinyin: string
  /** 单位 ms */
  updated_at: number
  path: string
  team: string
  /** 推测 1 为已验证，0 为未验证 */
  email_validation: 0 | 1
}

export function fetchMe(fetch: FetchApi) {
  return fetch.run<Me>(makeApiPath('/api/me'))
}
