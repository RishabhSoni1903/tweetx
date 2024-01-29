import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const UserProfile = () => {

    const [totalPosts, setTotalPosts] = useState()
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        const totalPosts = JSON.parse(localStorage.getItem('posts')).length;
        const user = JSON.parse(localStorage.getItem('user'));
        setUserData(user);
        setTotalPosts(totalPosts);
    }, [])

    const path = useLocation();

    return (
        <>
            <div className='flex justify-between items-center w-2/5 my-4 py-2 mx-auto'>
                <div className='w-1/5'><div className='w-32 h-32 mx-auto rounded-full border border-solid border-[#9E9E9E]'></div></div>
                {userData ? <div className='w-3/4'>
                    <div className='text-3xl text-[#707070] capitalize'>{userData.name}</div>
                    <div className='text-lg flex gap-8 my-4 text-[#9E9E9E]'>
                        <div>Posts : {totalPosts}</div>
                        <div>Followers : {userData.followers.length}</div>
                        <div>Following : {userData.following.length}</div>
                    </div>
                </div> :
                    <div className='w-3/4 text-3xl text-[#707070]'>Login to see user details</div>
                }
            </div>
            {userData && <div><div className='text-lg text-center flex text-[#9E9E9E] w-2/5 mx-auto'>
                <Link to="/profile/posts" className={'w-1/3 py-6 border-t border-[#707070] ' + (path.pathname === '/profile/posts' ? 'text-[#707070] border-t-2 border-black' : '')}>Posts</Link>
                <Link to="/profile/followers" className={'w-1/3 py-6 border-t border-[#707070] ' + (path.pathname === '/profile/followers' ? 'text-[#707070] border-t-2 border-black' : '')}>Followers</Link>
                <Link to="/profile/following" className={'w-1/3 py-6 border-t border-[#707070] ' + (path.pathname === '/profile/following' ? 'text-[#707070] border-t-2 border-black' : '')}>Following</Link>
            </div>
                <div className='text-lg flex text-[#9E9E9E] w-2/5 mx-auto'>
                    <Outlet />
                </div></div>}
        </>
    )
}

export default UserProfile
