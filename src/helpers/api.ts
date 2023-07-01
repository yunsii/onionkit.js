import { BASE_API_URL } from '@/constants/api'

export function makeApiPath(path: string) {
  return `${BASE_API_URL}${path}`
}
