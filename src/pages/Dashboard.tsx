import { PowerBIEmbed } from 'powerbi-client-react';
import React, { useEffect, useState } from 'react';
import { models } from 'powerbi-client';
import { useNavigate } from 'react-router-dom';
import { cookies } from '../providers';
import { useDashboards } from '../hooks/useDashboards';
import { Row } from 'react-bootstrap';
import CSS from 'csstype';

const rowStyle: CSS.Properties = {
  height: '80vh'
}

export interface IDashboardProps {}

let report: any = ''

const Dashboard: React.FC<IDashboardProps > = (props) => {
  const navigate = useNavigate();
  
  const { getToken } = useDashboards();

  const [token, setToken] = useState();

  async function getAzureToken() {
    const response = await getToken();
    return response;
  }

  useEffect(()=> {
    const isLogin = cookies.get('token')
    if (isLogin === null || isLogin === undefined) {
      navigate('/Login')
    }
    getAzureToken().
    then(response => {
      setToken(response);
    })
    handlerForm()
  }, [])
  function handlerForm() {
    if (token !== undefined) {
     return (
        <>
          <PowerBIEmbed
              embedConfig = {{
                type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                id: "f3b53f52-b83a-4e60-9082-f1e6f193906f",
                embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f3b53f52-b83a-4e60-9082-f1e6f193906f&groupId=559ec357-a1d1-459d-9f38-4881c333ae9c&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJhbmd1bGFyT25seVJlcG9ydEVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsInNraXBab25lUGF0Y2giOnRydWV9fQ%3d%3d",
                accessToken: token.token,
                tokenType: models.TokenType.Aad,
                settings: {
                  panes: {
                    filters: {
                      expanded: false,
                      visible: false
                    }
                  },
                  background: models.BackgroundType.Transparent,
                }
              }}
    
              eventHandlers = { 
                new Map([
                  ['loaded', function () {console.log('Report loaded');}],
                  ['rendered', function () {console.log('Report rendered');}],
                  ['error', function (event) {console.log(event.detail);}]
                ])
              }
                
              cssClassName = { "report-style-class" }
    
              getEmbeddedComponent = { (embeddedReport) => {
                report = embeddedReport;
              }}
            />
        </>
      )
    }
}
return (
    <>
            {token === undefined ? <Row style={rowStyle}></Row> : <></>}
            {handlerForm()}
    </>
)
}

export default Dashboard