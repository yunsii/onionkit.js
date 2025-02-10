import { expect } from 'vitest'

import { Onionkit } from '../src'

const onionkit = new Onionkit({
  token: import.meta.env.VITE_ONIONKIT_TOKEN,
})

it(`获取个人信息`, async () => {
  const result = await onionkit.me()
  expect(result).haveOwnProperty('id')
  expect(result).haveOwnProperty('name')
})
