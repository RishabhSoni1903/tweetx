import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {

    const path = useLocation();
    const navbarHidden = path.pathname === '/signup' || path.pathname === '/login' ? true : false;
    const navigate = useNavigate();

    return (
        <div className={"shadow-lg mb-12 " + (navbarHidden ? "hidden" : '')}>
            <div className="bg-white w-4/5 font-semibold m-auto py-5 flex justify-between">
                <p onClick={() => navigate('/')} className="text-[#FE748D] text-4xl cursor-pointer">TweetX</p>
                <div className='flex mr-24 *:cursor-pointer my-auto font-semibold text-[#E1E1E1] gap-16 text-2xl'>
                    <Link to="/" className={'hover:text-[#FE748D] ' + (path.pathname === '/' ? 'text-[#FE748D]' : '')}>Feed</Link>
                    <Link to="/users" className={'hover:text-[#FE748D] ' + (path.pathname === '/users' ? 'text-[#FE748D]' : '')}>Users</Link>
                    <Link to="/profile/posts" className={'hover:text-[#FE748D] ' + (path.pathname.includes('/profile') ? 'text-[#FE748D]' : '')}>Profile</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
