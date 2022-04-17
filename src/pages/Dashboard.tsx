import { PowerBIEmbed } from 'powerbi-client-react';
import React from 'react';
import { models } from 'powerbi-client';

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
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvY2Y3MmUyYmQtN2EyYi00NzgzLWJkZWItMzlkNTdiMDdmNzZmLyIsImlhdCI6MTY0OTYwMzg1MSwibmJmIjoxNjQ5NjAzODUxLCJleHAiOjE2NDk2MDc4NjYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJFMlpnWURod2VPM1NVMVkzSENzN0tsdVpmbFk5VG92cWtqaHJaUnF4Vm5tUDM5Rm5UY2NBIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6ImIxNDJkNGM2LTBmNzQtNDExNC04N2RiLTg3NTA3OTg5M2UyNiIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiU09BUkVTIiwiZ2l2ZW5fbmFtZSI6IllVUkkiLCJpcGFkZHIiOiIxODYuMjQ5LjE0NC4xODkiLCJuYW1lIjoiWVVSSSBESUFTIFNPQVJFUyIsIm9pZCI6IjVhNGU2NDI0LWIxM2ItNDBjZC05Y2FiLWNiNzk1YTYzZDhiNyIsInB1aWQiOiIxMDAzMjAwMEQ4RkYyRENBIiwicmgiOiIwLkFUUUF2ZUp5enl0NmcwZTk2em5WZXdmM2J3a0FBQUFBQUFBQXdBQUFBQUFBQUFBMEFMQS4iLCJzY3AiOiJBcHAuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZFdyaXRlLkFsbCBDb250ZW50LkNyZWF0ZSBEYXNoYm9hcmQuUmVhZC5BbGwgRGFzaGJvYXJkLlJlYWRXcml0ZS5BbGwgRGF0YWZsb3cuUmVhZC5BbGwgRGF0YWZsb3cuUmVhZFdyaXRlLkFsbCBEYXRhc2V0LlJlYWQuQWxsIERhdGFzZXQuUmVhZFdyaXRlLkFsbCBHYXRld2F5LlJlYWQuQWxsIEdhdGV3YXkuUmVhZFdyaXRlLkFsbCBSZXBvcnQuUmVhZC5BbGwgUmVwb3J0LlJlYWRXcml0ZS5BbGwgU3RvcmFnZUFjY291bnQuUmVhZC5BbGwgU3RvcmFnZUFjY291bnQuUmVhZFdyaXRlLkFsbCBXb3Jrc3BhY2UuUmVhZC5BbGwgV29ya3NwYWNlLlJlYWRXcml0ZS5BbGwiLCJzdWIiOiJkanpFc1ZtQVVOYmt1RGNSS2t4WUVDWV9NR1VJNXpyUTlEU3Btd3RHX19rIiwidGlkIjoiY2Y3MmUyYmQtN2EyYi00NzgzLWJkZWItMzlkNTdiMDdmNzZmIiwidW5pcXVlX25hbWUiOiJ5dXJpLnNvYXJlczJAZmF0ZWMuc3AuZ292LmJyIiwidXBuIjoieXVyaS5zb2FyZXMyQGZhdGVjLnNwLmdvdi5iciIsInV0aSI6ImRSNV8wZ1NDaGtHa3RBOWI5NzAwQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.lSCSDIzDgDd7vTW3oOPLfUsSDHIU_X_y9BiNzGeAnvORxVQnUc5mde8ap_fn6V9fmlXcuc4FNqS02edWSu0WX1peNZREWn0WRfeV_GC2YmR01l_YIr-s5V8N9v5fLy73HCrufZkwdBzwGHPi8TJQbpKV7QRcrEtxSCo6CBjTpZ8qQpo2sLJQERPMr4HVnlw1xorpuGxzLtxBv5huC7jcRH4f7_urmSH-WD64FgzA_NFlwTHxPW5_uAt15VElKnbJ56k02DQqta2qxRoeGBD_6Yb3CGqWejBIoItAmtvDk1WjwTo7rLVOwchJQGoO0teMUIbF9YeBo0TPLZBF7jZUgw',
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