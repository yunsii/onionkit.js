import { expect, it } from 'vitest'

import { Onionkit } from '../src'

const onionkit = new Onionkit({
  token: import.meta.env.VITE_ONIONKIT_TOKEN,
})

it.skip(`获取所有项目列表`, async () => {
  const result = await onionkit.projects.listAll()
  expect(result.Response).haveOwnProperty('Data')
})

it.skip(`根据项目名称获取项目详情`, async () => {
  const result = await onionkit.projects.listAll({
    ProjectName: 'onionkit.js',
  })
  expect(result.Response).haveOwnProperty('Data')
})
