import { expect, it } from 'vitest'

import { Onionkit } from '../src'

const onionkit = new Onionkit({
  token: import.meta.env.VITE_ONIONKIT_TOKEN,
})

async function getDepotDetail() {
  return await onionkit.depots.detail({
    DepotPath: import.meta.env.VITE_DEPOT_PATH,
  })
}

it(`获取第一个项目下的仓库列表`, async () => {
  const projects = await onionkit.projects.list()
  const depotList = await onionkit.depots.list({
    ProjectId: projects.Response.ProjectList[0].Id,
  })
  expect(depotList.Response).haveOwnProperty('DepotData')
})

it(`根据仓库路径获取仓库信息`, async () => {
  const depotDetail = await getDepotDetail()
  expect(depotDetail.Response.Depot.Id).toBeDefined()
})

it(`获取仓库标签列表`, async () => {
  const depotDetail = await getDepotDetail()
  const tagsResponse = await onionkit.depots.tags({
    DepotType: depotDetail.Response.Depot.RepoType,
    Id: depotDetail.Response.Depot.Id,
    ProjectId: depotDetail.Response.Depot.ProjectId,
  })
  expect(tagsResponse.Response.Data.DepotDetailList).toBeDefined()
})

it(`获取仓库提交列表`, async () => {
  const depotDetail = await getDepotDetail()
  const commitsResponse = await onionkit.depots.commits({
    DepotId: depotDetail.Response.Depot.Id,
    Ref: 'master',
  })
  expect(commitsResponse.Response.Data.Commits).toBeDefined()
})

it(`获取仓库两个提交之间的提交列表`, async () => {
  const depotDetail = await getDepotDetail()
  const tagsResponse = await onionkit.depots.tags({
    DepotType: depotDetail.Response.Depot.RepoType,
    Id: depotDetail.Response.Depot.Id,
    ProjectId: depotDetail.Response.Depot.ProjectId,
  })
  const commitsResponse = await onionkit.depots.commits({
    DepotId: depotDetail.Response.Depot.Id,
    Ref: 'master',
  })
  const source = commitsResponse.Response.Data.Commits[0].Sha
  const target = tagsResponse.Response.Data.DepotDetailList[0].Sha
  const commitsBetweenResponse = await onionkit.depots.commitsDifferentBetween({
    DepotId: depotDetail.Response.Depot.Id,
    Source: source,
    Target: target,
  })
  expect(commitsBetweenResponse.Response.DifferentOfCommitDetail).toBeDefined()
})
