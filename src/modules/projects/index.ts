import { fetchMe } from '../users'

import type { FetchApi } from '../../helpers/fetch'
import type { ProjectListResponse, ProjectsListAllParams, ProjectsListByUserParams, ProjectsListByUserResponse } from './types'

export class Projects {
  fetchApi: FetchApi

  constructor(fetch: FetchApi) {
    this.fetchApi = fetch
  }

  /**
   * 获取所有项目，需要注意是否有权限
   *
   * ref: https://coding.net/help/openapi#/operations/DescribeCodingProjects#Request
   */
  listAll(params: ProjectsListAllParams = {}) {
    const mergedParams = {
      PageNumber: 1,
      PageSize: 10,
      ...params,
    } satisfies ProjectsListAllParams

    return this.fetchApi.run<ProjectListResponse>({
      body: { Action: 'DescribeCodingProjects', ...mergedParams },
    })
  }

  listByUser(params: ProjectsListByUserParams) {
    const mergedParams = {
      ...params,
    } satisfies ProjectsListByUserParams

    return this.fetchApi.run<ProjectsListByUserResponse>({
      body: { Action: 'DescribeUserProjects', ...mergedParams },
    })
  }

  async list() {
    const me = await fetchMe(this.fetchApi)
    return this.listByUser({ UserId: me.Response.User.Id })
  }
}
