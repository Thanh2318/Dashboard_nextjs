import React from 'react'
import Statistic from './Statistic'
import PurityDashboard from './PurityDashboard'
import BasicBars from './chart';

const Dashboard = () => {
  return (
    <>
      <Statistic/>
      <PurityDashboard/>
      <BasicBars />
    </>
  )
}

export default Dashboard