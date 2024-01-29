import React from 'react'
import Post from './Post'

const PostsList = ({ data }) => {
    return (
        <div className='w-full px-5 mx-auto *:my-8'>
            {data ?
                data.map((post) => <Post data={post} key={post._id} />) :
                <div className='text-center text-2xl text-[#707070] my-16'>No post in the feed to show!</div>}
        </div>
    )
}

export default PostsList
