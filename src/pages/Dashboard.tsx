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
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f3b53f52-b83a-4e60-9082-f1e6f193906f&groupId=559ec357-a1d1-459d-9f38-4881c333ae9c&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJhbmd1bGFyT25seVJlcG9ydEVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsInNraXBab25lUGF0Y2giOnRydWV9fQ%3d%3d",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvY2Y3MmUyYmQtN2EyYi00NzgzLWJkZWItMzlkNTdiMDdmNzZmLyIsImlhdCI6MTY0OTU1OTc3MCwibmJmIjoxNjQ5NTU5NzcwLCJleHAiOjE2NDk1NjM5MTksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84VEFBQUFyVGpFOEZpOWt6WVdYY0FTRGZWOGdabm9Wdm5ETU9hbzQ1OGNXL2pWVmRBPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiJiMTQyZDRjNi0wZjc0LTQxMTQtODdkYi04NzUwNzk4OTNlMjYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlNPQVJFUyIsImdpdmVuX25hbWUiOiJZVVJJIiwiaXBhZGRyIjoiMTg2LjI0OS4xNDQuMTg5IiwibmFtZSI6IllVUkkgRElBUyBTT0FSRVMiLCJvaWQiOiI1YTRlNjQyNC1iMTNiLTQwY2QtOWNhYi1jYjc5NWE2M2Q4YjciLCJwdWlkIjoiMTAwMzIwMDBEOEZGMkRDQSIsInJoIjoiMC5BVFFBdmVKeXp5dDZnMGU5NnpuVmV3ZjNid2tBQUFBQUFBQUF3QUFBQUFBQUFBQTBBTEEuIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgV29ya3NwYWNlLlJlYWQuQWxsIFdvcmtzcGFjZS5SZWFkV3JpdGUuQWxsIiwic3ViIjoiZGp6RXNWbUFVTmJrdURjUktreFlFQ1lfTUdVSTV6clE5RFNwbXd0R19fayIsInRpZCI6ImNmNzJlMmJkLTdhMmItNDc4My1iZGViLTM5ZDU3YjA3Zjc2ZiIsInVuaXF1ZV9uYW1lIjoieXVyaS5zb2FyZXMyQGZhdGVjLnNwLmdvdi5iciIsInVwbiI6Inl1cmkuc29hcmVzMkBmYXRlYy5zcC5nb3YuYnIiLCJ1dGkiOiJmbmRQbGs3TjdrTzBCQzAxZHJJbkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.C2ZuMT-6EafHGAI5-7nw9CPtEJiH4xgUPsD1Ge5FahgArMi5VnpLekW4y3N0wJRMzLUspXOUYdCCynU68IoQzrCwAQIM8ZI5W9q98ARKwmEITCmKwKiyqhffyH9q5IN6dAOM8jgdg8R_6IQZSQWQrKGqe60T_o3cKLkz-05RzaY305n-91DGCNqymYrx1TTsNNJxTCb823uBWvPWA7ux5gFJabMoBA9Qdg8IbxR-Qrhl23pAw9DaaNPi1wgOcHnRcOp-ihDu3KbovCJisOrNur1verRLSq4DmcUG5ktaviqlQFbHUA000j-sjcEjQae7OQgxukqE3zkGIcMOCDl1-A',
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