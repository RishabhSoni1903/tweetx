import React, { useEffect, useState } from 'react';
import axios from '../axios';

const User = ({ data }) => {

    const user = JSON.parse(localStorage.getItem('user'));

    const [isFollowing, setIsFollowing] = useState(user.following.includes(data._id))

    const handleFollow = async () => {
        console.log("Follow btn clicked")
        try {
            const token = localStorage.getItem('jwt_token');
            const response = await axios.patch(`user/${data._id}`, {}, { headers: { 'Authorization': `Bearer ${token}` } })
            const updatedUser = JSON.stringify(response.data);
            localStorage.setItem('user', updatedUser);
            setIsFollowing(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex items-center w-full px-5 mx-auto *:my-8'>
            <div className='w-1/5'>
                <div className='w-20 h-20 mx-auto rounded-full border border-solid border-[#9E9E9E]'></div>
            </div>
            <div className='w-4/5'>
                <div className='my-4 mx-2'>
                    <div className="text-2xl text-[#707070] capitalize">{data.name}</div>
                    <div className='text-[#9E9E9E] my-2'>Following: {data.following.length}</div>
                </div>
            </div>
            <div className='whitespace-nowrap'>
                {isFollowing ? <p className='w-32 text-center text-[#707070] font-semibold text-lg'>Following</p> : <button onClick={handleFollow} className='w-32 shadow-md rounded-lg py-2 text-white font-semibold text-lg bg-[#FE748D] hover:bg-[#FF5B79]'>Follow</button>}
            </div>
        </div>
    )
}

export default User
