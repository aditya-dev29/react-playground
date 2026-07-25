import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-10 pt-5 flex gap-10 h-[90vh] items-center px-18'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content