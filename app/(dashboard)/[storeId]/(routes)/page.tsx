import React from 'react'

import { UserButton } from '@clerk/nextjs'

const DashboardPage = () => {
  return (
    <>
      <UserButton afterSignOutUrl="/" />
      <div>DashboardPage</div>
    </>
  )
}

export default DashboardPage