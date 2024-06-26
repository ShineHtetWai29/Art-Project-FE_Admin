import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminDashboard from '../AdminDashboard';


const User = () => {
    const [users, setUsers] = useState([])
    const apiUrl = 'http://localhost:8080/users'
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => {
                setUsers(response.data)
                console.log(response.data)
            })
    }, [])
    const deleteHandler = (deleteId) => {
        const apiUrl1 = `http://localhost:8080/users?id=${deleteId}`
        console.log(deleteId)
        axios
            .delete(apiUrl1)
            .then((response) => {
                setUsers(response.data)
                console.log(response.data)
            })
        // window.location.reload()
    }
    return (
        <>
        <AdminDashboard/>
            <div className='font-robotoSlap'>
                <section className='text-center'>
                    <h1 className='text-2xl font-bold mt-2 mb-8'>User List</h1>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-user">
                        <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 font-medium">
                            <thead className="text-sm text-white uppercase bg-primary dark:bg-primary dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        PhoneNumber
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Profile Image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action In Row
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={user.id}>
                                        <td className="px-6 py-4">
                                            {user.id}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.userName}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.mail}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.phoneNumber}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.profileImage}
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => deleteHandler(user.id)}>Delete</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </section>
            </div>
        </>
    );
}

export default User;
