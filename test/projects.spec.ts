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

it(`获取项目成员列表`, async () => {
  const meResponse = await onionkit.me()
  const myProjectsResponse = await onionkit.projects.listByUser({
    UserId: meResponse.Response.User.Id,
  })
  const projectMembersResponse = await onionkit.projects.listMembers({
    ProjectId: myProjectsResponse.Response.ProjectList[0].Id,
  })
  expect(projectMembersResponse.Response).toBeDefined()
}, {
  timeout: 10000,
})
