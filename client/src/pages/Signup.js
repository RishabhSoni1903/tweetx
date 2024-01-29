import React, { useState } from 'react';
import illustration from '../assets/illustration.svg';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [isPwVisible, setIsPwVisible] = useState(false);
    const navigate = useNavigate();


    const formData = { name, email, password };

    const signup = async (data) => {
        try {
            const response = await axios.post("/register", data);
            setName(''); setEmail(''); setPassword(''); setConfPassword('');
            navigate('/login')
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.password !== confPassword) {
            alert("Password mismatch!")
        }
        signup(formData)
    }

    const togglePwVisibility = () => {
        setIsPwVisible(!isPwVisible)
    }

    return (
        <>
            <div className='px-16 mx-16 mt-10'><p className="font-semibold text-[#FE748D] text-4xl">TweetX</p></div>
            <div className='flex w-full'>
                <div className='w-1/2 px-16 m-16'>
                    <button onClick={() => navigate('/login')} className='border border-[#6F6F6F] hover:bg-[#6F6F6F] hover:text-white py-3 w-52 rounded-xl text-lg text-[#1F252B] font-semibold'>Login</button>
                    <h1 className='text-4xl font-bold text-[#707070] my-20'>Create Account</h1>
                    <div className='w-3/4 relative'>
                        <form onSubmit={handleSubmit}>
                            <input required type="text" placeholder='Name' className='focus:outline focus:outline-[#707070] focus:outline-2 text-xl block p-4 rounded-lg w-full my-8' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                            <input required type="email" placeholder='Email' className='focus:outline focus:outline-[#707070] focus:outline-2 text-xl block p-4 rounded-lg w-full my-8' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input required type="password" placeholder='Password' className='focus:outline focus:outline-[#707070] focus:outline-2 text-xl block p-4 rounded-lg w-full my-8' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input required type="password" placeholder='Confirm Password' className='focus:outline focus:outline-[#707070] focus:outline-2 text-xl block p-4 rounded-lg w-full my-8' name='confPassword' value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                            <button type='submit' className='absolute right-0 w-36 shadow-md rounded-lg py-4 text-white font-semibold text-lg bg-[#FE748D] hover:bg-[#FF5B79]'>Signup</button>
                        </form>
                    </div>
                </div>
                <div className='w-1/2'><img src={illustration} alt="illustration" /></div>
            </div>
        </>
    )
}

export default Signup
