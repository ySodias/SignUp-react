// @ts-nocheck
import { PowerBIEmbed } from 'powerbi-client-react';
import React, { useEffect, useState } from 'react';
import { models } from 'powerbi-client';
import { useNavigate } from 'react-router-dom';
import { useDashboards } from '../hooks/useDashboards';
import { Container, Row } from 'react-bootstrap';
import CSS from 'csstype';

const rowStyle: CSS.Properties = {
  width: '100%',
  height: '80vh'
}

export interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps > = (props) => {
  const navigate = useNavigate();

  useEffect(()=> {
    const isLogin = sessionStorage.getItem('token')
    if (isLogin === null || isLogin === undefined) {
      navigate('/Login')
    }
  }, [])
  return (
        <>
        <iframe title="dashboard-signup" 
        style={rowStyle}
        src="https://app.powerbi.com/reportEmbed?reportId=bbda0a9f-aeb5-4c46-a55e-3b784f0fcb5d&autoAuth=true&ctid=cf72e2bd-7a2b-4783-bdeb-39d57b07f76f" 
        frameborder="0" allowFullScreen="true"></iframe> 
    </>
)
}

export default Dashboard