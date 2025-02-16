import { FetchApi } from './helpers/fetch'
import { Depots } from './modules/depots'
import { Projects } from './modules/projects'
import { fetchMe } from './modules/users'

export interface OnionkitInit {
  /** 个人访问令牌，值得注意的是 CODING 的个人访问令牌与团队是绑定关系 */
  token: string
}

export class Onionkit {
  fetchApi: FetchApi

  projects: Projects

  depots: Depots

  constructor(options: OnionkitInit) {
    this.fetchApi = new FetchApi(options.token)
    this.projects = new Projects(this.fetchApi)
    this.depots = new Depots(this.fetchApi)
  }

  me() {
    return fetchMe(this.fetchApi)
  }
}
