import type { CodingResponse } from '@/types'

export interface DepotListParams {
  ProjectId: number
  PageNumber?: number
  PageSize?: number
}

export interface DepotListItem {
  CreatedAt: number
  DefaultBranch: string
  Description: string
  GroupId: number
  GroupName: string
  GroupType: string
  HttpsUrl: string
  Id: number
  LastPushAt: number
  Name: string
  ProjectId: number
  ProjectName: string
  RepoType: string
  SshUrl: string
  VcsType: string
  WebUrl: string
}

export interface DepotListResponse
  extends CodingResponse<{
    DepotData: {
      Depots: DepotListItem[]
      Page: {
        PageNumber: number
        PageSize: number
        TotalCount: number
        TotalRow: number
      }
    }
  }> {}

export type DepotDetailCoreParams = {
  DepotId: number
} | {
  /** `/<TeamName>/<ProjectName>/<DepotName>` */
  DepotPath: string
}

export type DepotDetailParams = DepotDetailCoreParams

export interface DepotDetailResponse
  extends CodingResponse<{
    Depot: {
      /** 时间戳，以毫秒记 */
      CreatedAt: number
      DefaultBranch: string
      Description: string
      GroupId: number
      GroupName: string
      GroupType: string
      HttpsUrl: string
      Id: number
      /** 时间戳，以毫秒记 */
      LastPushAt: number
      Name: string
      ProjectId: number
      ProjectName: string
      RepoType: 'git' | 'svn'
      SshUrl: string
      VcsType: string
      WebUrl: string
    }
  }> {}

export interface DepotTagsParams {
  DepotType: 'git' | 'svn'
  Id: number
  ProjectId: number
}

export interface DepotTagsResponse
  extends CodingResponse<{
    Data: {
      DepotDetailList: {
        Name: string
        Sha: string
      }[]
    }
  }> {}

export type DepotCommitsParams = (DepotDetailCoreParams) & {
  Ref: string
  StartDate?: string
  EndDate?: string
  KeyWord?: string
  PageNumber?: number
  PageSize?: number
  Path?: string
}

export interface CommitAuthor {
  Email: string
  Name: string
}

export interface DepotCommitItem {
  Author: CommitAuthor
  AuthorEmail: string
  AuthorName: string
  CommitDate: number
  Committer: CommitAuthor
  CreatedAt: number
  FullMessage: string
  Parents: string[]
  Sha: string
  ShortMessage: string
}

export interface DepotCommitsResponse
  extends CodingResponse<{
    Data: {
      Commits: {
        Name: string
        Sha: string
      }[]
    }
    Page: {
      PageNumber: number
      PageSize: number
      TotalPage: number
      TotalRow: number
    }
  }> {}

export type DepotCommitsDifferentBetweenParams = (DepotDetailCoreParams) & {
  Source: string
  Target: string
}

export interface DepotCommitDifferentBetweenItem {
  AuthorEmail: string
  AuthorName: string
  CommitDate: number
  Committer: CommitAuthor
  CreatedAt: number
  Parents: string[]
  Sha: string
  ShortMessage: string
}

export interface DepotCommitsDifferentBetweenResponse
  extends CodingResponse<{
    DifferentOfCommitDetail: {
      Commits: DepotCommitDifferentBetweenItem[]
      DifferentOfCommits: {
        Path: string
        Deletions: number
        Insertions: number
        Name: string
        // DELETE 暂不确定是否为正确的值
        ChangeType: 'MODIFY' | 'ADD' | 'DELETE'
      }[]
      Deletions: number
      Insertions: number
      UpdateFileNum: number
    }
  }> {}

export type DepotListReleasesParams = DepotDetailCoreParams & {
  /** 页数 */
  PageNumber?: number
  /** 每页条数 */
  PageSize?: number
  /** 搜索条件:起始日期 */
  FromDate?: string
  /** 搜索条件:终止日期 */
  ToDate?: string
  /** 搜索条件:标签名字 */
  TagName?: string
  /** 搜索条件:版本状态(0:全部 1:已发布 2:预发布) */
  Status?: number
}

export type DepotCreateReleaseParams = DepotDetailCoreParams & {
  CommitSha: string
  Description: string
  Pre: boolean
  TagName: string
  TargetCommitBranch: string
  Title: string
}

export type DepotDeleteReleaseParams = DepotDetailCoreParams & {
  TagName: string
}
