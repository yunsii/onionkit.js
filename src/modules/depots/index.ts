import type { FetchApi } from '../../helpers/fetch'
import type { CodingResponse } from '../../types'
import type { DepotCommitsDifferentBetweenParams, DepotCommitsDifferentBetweenResponse, DepotCommitsParams, DepotCommitsResponse, DepotCreateReleaseParams, DepotDeleteReleaseParams, DepotDetailParams, DepotDetailResponse, DepotListParams, DepotListReleasesParams, DepotListReleasesResponse, DepotListResponse, DepotTagsParams, DepotTagsResponse } from './types'

export class Depots {
  fetchApi: FetchApi

  constructor(fetch: FetchApi) {
    this.fetchApi = fetch
  }

  /** ref: https://coding.net/help/openapi#/operations/DescribeProjectDepotInfoList#Request */
  list(params: DepotListParams) {
    const mergedParams = {
      ...params,
    } satisfies DepotListParams

    return this.fetchApi.run<DepotListResponse>({
      body: { Action: 'DescribeProjectDepotInfoList', ...mergedParams },
    })
  }

  /** ref: https://coding.net/help/openapi#/operations/DescribeGitDepot#Request */
  detail(params: DepotDetailParams) {
    const mergedParams = {
      ...params,
    } satisfies DepotDetailParams

    return this.fetchApi.run<DepotDetailResponse>({
      body: { Action: 'DescribeGitDepot', ...mergedParams },
    })
  }

  /**
   * ref: https://coding.net/help/openapi#/operations/DescribeProjectDepotTags#Request
   *
   * 按创建时间倒序排列
   */
  tags(params: DepotTagsParams) {
    const mergedParams = {
      ...params,
    } satisfies DepotTagsParams

    return this.fetchApi.run<DepotTagsResponse>({
      body: { Action: 'DescribeGitTags', ...mergedParams },
    })
  }

  /**
   * ref: https://coding.net/help/openapi#/operations/DescribeGitCommitsInPage#Request
   *
   * 按创建时间倒序排列
   */
  commits(params: DepotCommitsParams) {
    const mergedParams = {
      ...params,
    } satisfies DepotCommitsParams

    return this.fetchApi.run<DepotCommitsResponse>({
      body: { Action: 'DescribeGitCommitsInPage', ...mergedParams },
    })
  }

  /**
   * ref: https://coding.net/help/openapi#/operations/DescribeCommitsBetweenCommitAndCommit#Request
   *
   * 按创建时间倒序排列
   */
  commitsDifferentBetween(params: DepotCommitsDifferentBetweenParams) {
    const mergedParams = {
      ...params,
    } satisfies DepotCommitsDifferentBetweenParams

    return this.fetchApi.run<DepotCommitsDifferentBetweenResponse>({
      body: { Action: 'DescribeCommitsBetweenCommitAndCommit', ...mergedParams },
    })
  }

  /**
   * ref: https://coding.net/help/openapi#/operations/DescribeGitReleases#Request
   *
   * 按创建时间倒序排列
   */
  listReleases(params: DepotListReleasesParams) {
    const mergedParams = {
      ...params,
    } satisfies DepotListReleasesParams

    return this.fetchApi.run<DepotListReleasesResponse>({
      body: { Action: 'DescribeGitReleases', ...mergedParams },
    })
  }

  /**
   * ref: https://coding.net/help/openapi#/operations/CreateGitRelease#Request
   */
  createRelease(params: DepotCreateReleaseParams) {
    const mergedParams = {
      ...params,
    } satisfies DepotCreateReleaseParams

    return this.fetchApi.run<CodingResponse>({
      body: { Action: 'CreateGitRelease', ...mergedParams },
    })
  }

  /**
   * ref: https://coding.net/help/openapi#/operations/DeleteGitRelease#Request
   */
  deleteRelease(params: DepotDeleteReleaseParams) {
    const mergedParams = {
      ...params,
    } satisfies DepotDeleteReleaseParams

    return this.fetchApi.run<CodingResponse>({
      body: { Action: 'DeleteGitRelease', ...mergedParams },
    })
  }
}
