import { PowerBIEmbed } from 'powerbi-client-react';
import React, { useEffect } from 'react';
import { models } from 'powerbi-client';
import { useDashboard } from '../hooks/useDashboard';

export interface IDashboardProps {}

let report: any = ''

const Dashboard: React.FC<IDashboardProps > = (props) => {

  return (
    <>
      <PowerBIEmbed
          embedConfig = {{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: "f3b53f52-b83a-4e60-9082-f1e6f193906f",
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f3b53f52-b83a-4e60-9082-f1e6f193906f&groupId=559ec357-a1d1-459d-9f38-4881c333ae9c&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJhbmd1bGFyT25seVJlcG9ydEVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsInNraXBab25lUGF0Y2giOnRydWV9fQ%3d%3d",
            accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvY2Y3MmUyYmQtN2EyYi00NzgzLWJkZWItMzlkNTdiMDdmNzZmLyIsImlhdCI6MTY1NTA4MzM3MSwibmJmIjoxNjU1MDgzMzcxLCJleHAiOjE2NTUwODgwMTEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84VEFBQUE2TS9Oc283YnVGbC9sbG5DNzlsSXNSbUdUYUoyK0Z1azg5OW5PL0lhb3lRPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiJiMTQyZDRjNi0wZjc0LTQxMTQtODdkYi04NzUwNzk4OTNlMjYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlNPQVJFUyIsImdpdmVuX25hbWUiOiJZVVJJIiwiaXBhZGRyIjoiMTc3LjEzMS44MC4yMDMiLCJuYW1lIjoiWVVSSSBESUFTIFNPQVJFUyIsIm9pZCI6IjVhNGU2NDI0LWIxM2ItNDBjZC05Y2FiLWNiNzk1YTYzZDhiNyIsInB1aWQiOiIxMDAzMjAwMEQ4RkYyRENBIiwicmgiOiIwLkFUUUF2ZUp5enl0NmcwZTk2em5WZXdmM2J3a0FBQUFBQUFBQXdBQUFBQUFBQUFBMEFMQS4iLCJzY3AiOiJBcHAuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZFdyaXRlLkFsbCBDb250ZW50LkNyZWF0ZSBEYXNoYm9hcmQuUmVhZC5BbGwgRGFzaGJvYXJkLlJlYWRXcml0ZS5BbGwgRGF0YWZsb3cuUmVhZC5BbGwgRGF0YWZsb3cuUmVhZFdyaXRlLkFsbCBEYXRhc2V0LlJlYWQuQWxsIERhdGFzZXQuUmVhZFdyaXRlLkFsbCBHYXRld2F5LlJlYWQuQWxsIEdhdGV3YXkuUmVhZFdyaXRlLkFsbCBSZXBvcnQuUmVhZC5BbGwgUmVwb3J0LlJlYWRXcml0ZS5BbGwgU3RvcmFnZUFjY291bnQuUmVhZC5BbGwgU3RvcmFnZUFjY291bnQuUmVhZFdyaXRlLkFsbCBXb3Jrc3BhY2UuUmVhZC5BbGwgV29ya3NwYWNlLlJlYWRXcml0ZS5BbGwiLCJzdWIiOiJkanpFc1ZtQVVOYmt1RGNSS2t4WUVDWV9NR1VJNXpyUTlEU3Btd3RHX19rIiwidGlkIjoiY2Y3MmUyYmQtN2EyYi00NzgzLWJkZWItMzlkNTdiMDdmNzZmIiwidW5pcXVlX25hbWUiOiJ5dXJpLnNvYXJlczJAZmF0ZWMuc3AuZ292LmJyIiwidXBuIjoieXVyaS5zb2FyZXMyQGZhdGVjLnNwLmdvdi5iciIsInV0aSI6ImwzT2d5MjNzU1VLNFhtNXNSTWZNQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.HYn3ot0czCgAGMFE3LjqxvyEZVTfLnIEaktqi-R5rVRZRlLbK1N9NwktCvJy0lEgOA74vq-gKpt6LWh1W1H2l_q0z25Cvr2l6zNhb8044R6PrK6XjSiOHVkYT9Z1oNCP8FDg8JHkriZnm9JTzxy7oeojkTpOpTXT4QpdxW9VLYtUYgu5CXwT4lX1wxmvUa8gj1l7JRoDKFBAQUpnVYqHB5FS9_24KDEC3gyIa5MQZ2uHEcB1ZpJHjZpsODHNyb08ftizkJKnQxpwlBuEhsBZ09dpOPIDbNUBb8kPjLr_H0b_o_8QdBgNeNT7Nk_SuniTJ-XUUbm6Rwh5pCI4BqshVA",
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

export default Dashboard