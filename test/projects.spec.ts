import { expect } from 'vitest'

import { Onionkit } from '../src'

const onionkit = new Onionkit({
  token: import.meta.env.VITE_ONIONKIT_TOKEN,
})

it(`获取所有项目列表`, async () => {
  const result = await onionkit.projects.list()
  expect(result.Response).haveOwnProperty('Data')
})

it(`根据项目名称获取项目详情`, async () => {
  const result = await onionkit.projects.list({
    ProjectName: 'onionkit.js',
  })
  expect(result.Response).haveOwnProperty('Data')
})
