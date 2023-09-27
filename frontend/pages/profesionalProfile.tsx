import { ConfigProfile } from '@/components/config-profile/ConfigProfile'
import Layout from '@/layouts/Layout'
import React from 'react'

const ProfesionalProfile = () => {
  return (
    <Layout>
        <div className='flex w-full h-full justify-center'> 
            <ConfigProfile/>
        </div>
    </Layout>
  )
}

export default ProfesionalProfile