import type { ReleasesListParams } from './types'
import type { FetchApi } from '@/helpers/fetch'

export class Releases {
  fetchApi: FetchApi

  constructor(fetch: FetchApi) {
    this.fetchApi = fetch
  }

  /** ref: https://coding.net/help/openapi#d694155f94040f644e171c5a1ae29bba */
  list(params: ReleasesListParams) {
    const mergedParams = {
      ...params,
    } satisfies ReleasesListParams

    return this.fetchApi.run({
      body: { Action: 'DescribeGitReleases', ...mergedParams },
    })
  }
}
