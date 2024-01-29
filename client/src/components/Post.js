import React from 'react'

const Post = ({ data }) => {

    const timeStamp = (timestamp) => {
        const currentTime = new Date();
        const postTime = new Date(timestamp);

        const timeDifference = currentTime - postTime;
        const seconds = Math.floor(timeDifference / 1000);

        let interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return `${interval} years ago`;
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return `${interval} months ago`;
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return `${interval} days ago`;
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return `${interval} hours ago`;
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return `${interval} minutes ago`;
        }

        return `${Math.floor(seconds)} seconds ago`;
    }

    return (
        <div className='flex w-full my-4 py-6 mx-auto '>
            <div className='w-1/5'>
                <div className='w-20 h-20 mx-auto rounded-full border border-solid border-[#9E9E9E]'></div>
            </div>
            <div className='w-4/5'>
                <div className='flex justify-between items-baseline my-4'>
                    <div className="text-2xl cursor-pointer text-[#707070] capitalize">{data.userName}</div>
                    <div className='text-[#9E9E9E]'>{timeStamp(data.createdAt)}</div>
                </div>
                <div className='my-4 text-[#9E9E9E]'>{data.content}</div>
            </div>
            <div className="ms-6 my-auto h-16 w-10 bg-[#FE748D] rounded-l-full"></div>
        </div>
    )
}

export default Post
