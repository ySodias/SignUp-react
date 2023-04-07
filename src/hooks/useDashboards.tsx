import { useState, useCallback } from 'react';
import { ITreino } from '../interfaces/ITreino';
import { DashboardsService } from '../service/Dashboard';

export const useDashboards = () => {

  const [token, setToken] = useState<ITreino[]>();

  const getToken = useCallback(async() => {
    const { status, data } = await DashboardsService.postAzureLogin();
    if (status != 200) throw new Error();
    setToken(data);
    return data
  }, []);

  

  return {
    token,
    getToken
  }
}