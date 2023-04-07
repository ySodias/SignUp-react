import { Api } from '../providers'


const postAzureLogin = () => Api
  .post("dashboards")

export const DashboardsService = {
    postAzureLogin
}
