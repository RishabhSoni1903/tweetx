import React, { useEffect, useState } from 'react'
import User from '../components/User'
import axios from '../axios';

const Users = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('jwt_token');
            const response = await axios.get('/user/getAll', { headers: { 'Authorization': `Bearer ${token}` } })
            setUsers(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div className='w-2/5 my-4 py-2 mx-auto *:divide-y *:divide-[#707070]'>
            {users.length > 0 ? users.map((user) => <div><User key={user._id} data={user} /></div>) :
                <div className='text-center text-4xl text-[#707070] my-16'>No users to show!</div>}
        </div>
    )
}

export default Users
