import React from 'react'
import User from './User'

const UsersList = ({ data }) => {
  const arr = [1, 2, 3, 4]
  return (
    <div className='w-full px-5 mx-auto *:my-8'>
      {data ?
        data.map((user) => <User />) :
        <div className='text-center text-2xl text-[#707070] my-16'>No users to show!</div>}
      <User />
      <User />
    </div>
  )
}

export default UsersList
