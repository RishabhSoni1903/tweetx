import React, { useEffect, useState } from 'react';
import axios from '../axios'
import Post from './Post';

const MyPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const myPosts = JSON.parse(localStorage.getItem('posts'));
        setPosts(myPosts);
    }, [])

    return (
        <div className='w-full px-5 mx-auto'>
            {posts.length > 0 ? posts.map((post) => <Post key={post._id} data={post} />) :
                <div className='text-center text-2xl text-[#707070] my-16'>You are following no one yet!</div>
            }
        </div>
    )
}

export default MyPosts
