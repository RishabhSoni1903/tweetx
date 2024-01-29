import React, { useState } from 'react';
import illustration from '../assets/illustration.svg';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPwVisible, setIsPwVisible] = useState(false);
    const navigate = useNavigate();

    const formdata = { email, password };

    const login = async (data) => {
        try {
            const response = await axios.post("/login", data);
            localStorage.setItem("jwt_token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("posts", JSON.stringify(response.data.posts));
            console.log(response.data)
            setEmail('');
            setPassword('');
            navigate('/')
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(formdata);
    }

    const togglePwVisibility = () => {
        setIsPwVisible(!isPwVisible)
    }

    return (
        <>
            <div className='px-16 mx-16 mt-10'><p className="font-semibold text-[#FE748D] text-4xl">TweetX</p></div>
            <div className='flex w-full'>
                <div className='w-1/2 px-16 m-16'>
                    <button onClick={() => navigate('/signup')} className='border border-[#6F6F6F] hover:bg-[#6F6F6F] hover:text-white py-3 w-52 rounded-xl text-lg text-[#1F252B] font-semibold'>Create Account</button>
                    <h1 className='text-4xl font-bold text-[#707070] my-20'>Login</h1>
                    <div className='w-3/4'>
                        <form onSubmit={handleSubmit}>
                            <input required type="email" placeholder='Email' className='text-xl block p-4 rounded-lg w-full my-8 focus:outline focus:outline-[#707070] focus:outline-2' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input required type={isPwVisible ? "text" : "password"} placeholder='Password' className='text-xl block p-4 rounded-lg w-full my-8 focus:outline focus:outline-[#707070] focus:outline-2' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            {/* <button onClick={togglePwVisibility}>Toggle password</button> */}
                            <div className='flex justify-between items-center'>
                                <div> <p className='cursor-pointer'>Forgot Password?</p></div>
                                <button type='submit' className='w-36 shadow-md rounded-lg py-4 text-white font-semibold text-lg bg-[#FE748D] hover:bg-[#FF5B79]'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-1/2'><img src={illustration} alt="illustration" /></div>
            </div>
        </>
    )
}

export default Login
