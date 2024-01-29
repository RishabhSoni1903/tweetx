import React, { useEffect, useState } from 'react';
import WritePostBtn from '../components/WritePostBtn'
import Post from '../components/Post';
import axios from '../axios';

const Feed = () => {

    const [feedPosts, setFeedPosts] = useState([])

    const jwt = localStorage.getItem("jwt_token");
    const getFeed = async () => {
        try {
            const response = await axios.get('/post/feed', { headers: { 'Authorization': `Bearer ${jwt}` } })
            setFeedPosts(response.data);
        } catch (error) {
            console.warn(error.message)
            setFeedPosts([]);
        }
    }
    useEffect(() => {
        getFeed();
    }, [])

    return (
        <div className='w-2/5 my-4 py-2 mx-auto'>
            <WritePostBtn />
            {feedPosts.length > 0 ?
                feedPosts.map((post) => <Post data={post} key={post._id} />) :
                <div className='text-center text-4xl text-[#707070] my-16'>No post in the feed to show!</div>}
        </div>
    )
}

export default Feed
