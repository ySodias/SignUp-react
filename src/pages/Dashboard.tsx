import { PowerBIEmbed } from 'powerbi-client-react';
import React, { useEffect } from 'react';
import { models } from 'powerbi-client';
import { useNavigate } from 'react-router-dom';
import { cookies } from '../providers';

export interface IDashboardProps {}

let report: any = ''

const Dashboard: React.FC<IDashboardProps > = (props) => {
  const navigate = useNavigate();
  
  useEffect(()=> {
    const isLogin = cookies.get('token')
    if (isLogin === null || isLogin === undefined) {
      navigate('/Login')
    }
  }, [])

  return (
    <>
      <PowerBIEmbed
          embedConfig = {{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: "f3b53f52-b83a-4e60-9082-f1e6f193906f",
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f3b53f52-b83a-4e60-9082-f1e6f193906f&groupId=559ec357-a1d1-459d-9f38-4881c333ae9c&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJhbmd1bGFyT25seVJlcG9ydEVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsInNraXBab25lUGF0Y2giOnRydWV9fQ%3d%3d",
            accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvY2Y3MmUyYmQtN2EyYi00NzgzLWJkZWItMzlkNTdiMDdmNzZmLyIsImlhdCI6MTY1NTc2NzUyMywibmJmIjoxNjU1NzY3NTIzLCJleHAiOjE2NTU3NzI1MjEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJFMlpnWUxCYWxjS2o5Ryt1OGxiK0E3WkhFMS9HRkZpbEN0NHEzcWZxT1hIQ1BlRWtIek1BIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6ImIxNDJkNGM2LTBmNzQtNDExNC04N2RiLTg3NTA3OTg5M2UyNiIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiU09BUkVTIiwiZ2l2ZW5fbmFtZSI6IllVUkkiLCJpcGFkZHIiOiIxNzcuMTMxLjgxLjIwOCIsIm5hbWUiOiJZVVJJIERJQVMgU09BUkVTIiwib2lkIjoiNWE0ZTY0MjQtYjEzYi00MGNkLTljYWItY2I3OTVhNjNkOGI3IiwicHVpZCI6IjEwMDMyMDAwRDhGRjJEQ0EiLCJyaCI6IjAuQVRRQXZlSnl6eXQ2ZzBlOTZ6blZld2YzYndrQUFBQUFBQUFBd0FBQUFBQUFBQUEwQUxBLiIsInNjcCI6IkFwcC5SZWFkLkFsbCBDYXBhY2l0eS5SZWFkLkFsbCBDYXBhY2l0eS5SZWFkV3JpdGUuQWxsIENvbnRlbnQuQ3JlYXRlIERhc2hib2FyZC5SZWFkLkFsbCBEYXNoYm9hcmQuUmVhZFdyaXRlLkFsbCBEYXRhZmxvdy5SZWFkLkFsbCBEYXRhZmxvdy5SZWFkV3JpdGUuQWxsIERhdGFzZXQuUmVhZC5BbGwgRGF0YXNldC5SZWFkV3JpdGUuQWxsIEdhdGV3YXkuUmVhZC5BbGwgR2F0ZXdheS5SZWFkV3JpdGUuQWxsIFJlcG9ydC5SZWFkLkFsbCBSZXBvcnQuUmVhZFdyaXRlLkFsbCBTdG9yYWdlQWNjb3VudC5SZWFkLkFsbCBTdG9yYWdlQWNjb3VudC5SZWFkV3JpdGUuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZFdyaXRlLkFsbCIsInN1YiI6ImRqekVzVm1BVU5ia3VEY1JLa3hZRUNZX01HVUk1enJROURTcG13dEdfX2siLCJ0aWQiOiJjZjcyZTJiZC03YTJiLTQ3ODMtYmRlYi0zOWQ1N2IwN2Y3NmYiLCJ1bmlxdWVfbmFtZSI6Inl1cmkuc29hcmVzMkBmYXRlYy5zcC5nb3YuYnIiLCJ1cG4iOiJ5dXJpLnNvYXJlczJAZmF0ZWMuc3AuZ292LmJyIiwidXRpIjoiM29VN08zOXl3RXV6VTBkdWM1NEpBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.iHdHyj4mVlfklTrzT2Od0ImVosUE_3sWSADtN81fKPTqcD65OFJ7w_0C6aMlZe7fnBfXDJ9zLtJHEUjewoxpShvoeuN_oN7-QWU2bzrnu8A2xTTOgL9Y-mQ4124SCMcd64HnsTQvOV9hQ6Iop_8NuLJ4SIQaSF9YC-GmLwMem3lJBIP2bGQJSutQYSOxNxPWbhxS47z7VmwGX3cYZSX8cqXP0cDkAJDYhz7cQw4eVOMkITvDoNmDUPHE3UbhTbodENp12AfLdE7v44RPyx2huF1niS2HfWZgwQaYHBQpOFh9HgmDmCSyNQxdnoN-kfZFFIdxbn34TkbE8JX4H4TrMQ",
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