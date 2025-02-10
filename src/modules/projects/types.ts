import type { CodingResponse } from '@/types'

export interface ProjectsListAllParams {
  /**
   * 页数
   *
   * 自定义默认值 1
   */
  PageNumber?: number
  /**
   * 每页条数
   *
   * 自定义默认值 10
   */
  PageSize?: number
  /** 项目名称 */
  ProjectName?: string
}

export interface ProjectListAllItem {
  /** 项目 ID */
  Id: number
  /**
   * 创建时间
   *
   * 注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt: number
  /**
   * 更新时间
   *
   * 注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt: number
  /**
   * 状态
   *
   * 注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 类型
   *
   * 注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: number
  /**
   * 最大团员数
   *
   * 注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxMember: number
  /**
   * 名称
   *
   * 注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 显示名称
   *
   * 注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayName: string
  /**
   * 描述
   *
   * 注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
  /**
   * 图标
   *
   * 注意：此字段可能返回 null，表示取不到有效值。
   */
  Icon: string
  /**
   * 团队所有者 ID
   *
   * 注意：此字段可能返回 null，表示取不到有效值。
   */
  TeamOwnerId: number
  /**
   * 个人所有者 ID
   *
   * 注意：此字段可能返回 null，表示取不到有效值。
   */
  UserOwnerId: number
  /**
   * 项目开始时间
   *
   * 注意：此字段可能返回 null，表示取不到有效值。
   */
  StartDate: number
  /**
   * 项目结束时间
   *
   * 注意：此字段可能返回 null，表示取不到有效值。
   */
  EndDate: number
  /**
   * 团队 ID
   *
   * 注意：此字段可能返回 null，表示取不到有效值。
   */
  TeamId: number
  /**
   * 是否为模板项目
   *
   * 注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDemo: boolean
  /**
   * 是否归档
   *
   * 注意：此字段可能返回 null，表示取不到有效值。
   */
  Archived: boolean
}

export interface ProjectListResponse
  extends CodingResponse<{
    Data: {
      PageNumber: number
      PageSize: number
      TotalCount: number
      ProjectList: ProjectListAllItem[]
    }
  }> {}

export interface ProjectsListByUserParams {
  UserId: number
  /** 项目名称 */
  ProjectName?: string
}

export interface ProjectsListByUserItem {
  Name: string
  Id: number
  Type: number
  DisplayName: string
  Icon: string
  Description: string
  CreatedAt: number
  MaxMember: number
  TeamId: number
  UserOwnerId: number
  IsDemo: boolean
  Archived: boolean
  StartDate: number
  UpdatedAt: number
  TeamOwnerId: number
  EndDate: number
  Status: number
}

export interface ProjectsListByUserResponse
  extends CodingResponse<{
    ProjectList: ProjectsListByUserItem[]
  }> {}
