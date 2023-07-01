export interface ReleasesListParams {
  /** 仓库 Id */
  DepotId: number
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
