import React, { useEffect, useState } from 'react';
import axios from '../axios';
import User from './User';

const Followers = () => {

    const [followers, setFollowers] = useState([]);

    const getFollowers = async () => {
        try {
            const id = JSON.parse(localStorage.getItem('user'))._id;
            const token = localStorage.getItem('jwt_token')
            const response = await axios.get(`user/${id}/followers`, { headers: { 'Authorization': `Bearer ${token}` } })
            setFollowers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFollowers();
    }, [])

    return (
        <div className='w-full px-5 mx-auto *:my-8'>
            {followers.length > 0 ? followers.map((follower) => <User key={follower._id} data={follower} />)
                : <div className='text-center text-2xl text-[#707070] my-16'>No followers to show!</div>}
        </div>
    )
}

export default Followers
