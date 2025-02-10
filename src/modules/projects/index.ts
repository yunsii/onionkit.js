import type { FetchApi } from '@/helpers/fetch'

import type { ProjectListResponse, ProjectsListParams } from './types'

export class Projects {
  fetchApi: FetchApi

  constructor(fetch: FetchApi) {
    this.fetchApi = fetch
  }

  /**
   * 如果获取所有项目，需要注意是否有权限
   *
   * ref: https://coding.net/help/openapi#add1b386a4ce6a8ddc07fb10fff254e8
   */
  list(params: ProjectsListParams = {}) {
    const mergedParams = {
      PageNumber: 1,
      PageSize: 10,
      ...params,
    } satisfies ProjectsListParams

    return this.fetchApi.run<ProjectListResponse>({
      body: { Action: 'DescribeCodingProjects', ...mergedParams },
    })
  }
}
