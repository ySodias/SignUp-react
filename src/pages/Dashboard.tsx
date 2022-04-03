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
            id: "624a5937-1970-4d4c-a0c8-dcbf2a41a928",
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=624a5937-1970-4d4c-a0c8-dcbf2a41a928&groupId=ecf6bb39-7dbf-460b-921a-6753fda0b67b&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJhbmd1bGFyT25seVJlcG9ydEVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsInNraXBab25lUGF0Y2giOnRydWV9fQ%3d%3d",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvY2Y3MmUyYmQtN2EyYi00NzgzLWJkZWItMzlkNTdiMDdmNzZmLyIsImlhdCI6MTY0ODk5MzI4MSwibmJmIjoxNjQ4OTkzMjgxLCJleHAiOjE2NDg5OTgwMzMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFVU3d3YWluVFhHUG5nYUF4dnF4dndXb0ZKRkJUbmVMbWU3MDVGRkFOamdUTVRUZTFFUy9TVjlpeGMzN252SDYyIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiU09BUkVTIiwiZ2l2ZW5fbmFtZSI6IllVUkkiLCJpcGFkZHIiOiIxODYuMjQ5LjE0NC4xODkiLCJuYW1lIjoiWVVSSSBESUFTIFNPQVJFUyIsIm9pZCI6IjVhNGU2NDI0LWIxM2ItNDBjZC05Y2FiLWNiNzk1YTYzZDhiNyIsInB1aWQiOiIxMDAzMjAwMEQ4RkYyRENBIiwicmgiOiIwLkFUUUF2ZUp5enl0NmcwZTk2em5WZXdmM2J3a0FBQUFBQUFBQXdBQUFBQUFBQUFBMEFMQS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJkanpFc1ZtQVVOYmt1RGNSS2t4WUVDWV9NR1VJNXpyUTlEU3Btd3RHX19rIiwidGlkIjoiY2Y3MmUyYmQtN2EyYi00NzgzLWJkZWItMzlkNTdiMDdmNzZmIiwidW5pcXVlX25hbWUiOiJ5dXJpLnNvYXJlczJAZmF0ZWMuc3AuZ292LmJyIiwidXBuIjoieXVyaS5zb2FyZXMyQGZhdGVjLnNwLmdvdi5iciIsInV0aSI6Il9TVDZaV3lEOFVTQ1BzOFpJcGU5QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.qsOYdXUHzDomROpM6ViFg85a-Q4MDbAT_Wm4x73l6Q65k0ES-UH44cf8h2D9ki7_7CxuHUntIZOPBKgAg_SatbkZ-KH02lDVjN8XydvZdeJtv6RpXwiecFKVV3ZJwyNZwHWdgFmtz5ECbfxDVsF1iOM8RuR6i2OMyJYFiBlVwE4wH38Fd340_i1cQ0hB1Q1qkY6Et7Lt-Q7AnrXdUDtjc8Xlk7iV3HGraHdwehpZtrVEYxGCCBTiVoCXL3Cfd-UVzK1GUjLu_Mk27Mj-Xht7ZmYdQZV0k5HETseR_2K_B8o5NVBYUmCROZJkHl4D3cgMLRhUooA-hTdEN2uHbcD9kw',
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