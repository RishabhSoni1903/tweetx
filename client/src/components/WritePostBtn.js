import React from 'react';
import axios from '../axios';

const WritePostBtn = () => {

    const addPost = async (content) => {
        try {
            const token = localStorage.getItem('jwt_token');
            const response = await axios.post('/post', { content }, { headers: { 'Authorization': `Bearer ${token}` } })
            const myPosts = JSON.parse(localStorage.getItem('posts'))
            myPosts.push(response.data)
            localStorage.setItem('posts', JSON.stringify(myPosts));
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = () => {
        console.log("Write post clicked")
        const content = prompt("What's on your mind...")
        console.log({ content })
        addPost(content);
    }

    return (
        <div>
            <button onClick={handleClick} className='w-36 shadow-md rounded-lg py-4 text-white font-semibold text-lg bg-[#FE748D] hover:bg-[#FF5B79]'>Write</button>
        </div>
    )
}

export default WritePostBtn
