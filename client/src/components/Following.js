import React, { useEffect, useState } from 'react';
import axios from '../axios';
import User from './User';

const Following = () => {

    const [following, setFollowing] = useState([]);

    const getFollowing = async () => {
        try {
            const id = JSON.parse(localStorage.getItem('user'))._id;
            const token = localStorage.getItem('jwt_token')
            const response = await axios.get(`user/${id}/following`, { headers: { 'Authorization': `Bearer ${token}` } })
            setFollowing(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFollowing();
    }, [])

    return (
        <div className='w-full px-5 mx-auto'>
            {following.length > 0 ? <div> {following.map((user) => <User key={user._id} data={user} />)}</div>
                : <div className='text-center text-2xl text-[#707070] my-16'>You are following no one yet!</div>}
        </div>
    )
}

export default Following
