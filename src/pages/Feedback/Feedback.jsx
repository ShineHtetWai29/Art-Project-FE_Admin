import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminDashboard from '../AdminDashboard';

const Feedback = () => {
    const [feedBack, setFeedBack] = useState([])

    const feedbackUrl = 'http://localhost:8080/feedback';
    useEffect(() => {
        axios
            .get(feedbackUrl)
            .then((response) => {
                setFeedBack(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching feedback:', error);
            });
    }, []);

    const deleteHandler = (deleteId) => {
        const apiUrl1 = `http://localhost:8080/feedback?id=${deleteId}`;
        console.log(deleteId);
        axios
        .delete(apiUrl1)
        .then((response) => {
            setFeedBack(response.data.data);
            console.log(response.data.data);
        })
    }


    return (
        <>
            <AdminDashboard />
            <div className='font-robotoSlap'>
                <div className='flex justify-between w-full'>
                    <h1 className='text-2xl font-bold mb-12 w-[300px]'>Feedback Page</h1>
                </div>

                <section className='text-center'>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-custom">
                        <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400 font-medium">
                            <thead className="text-lg text-white uppercase bg-primary dark:bg-primary dark:text-primary">
                                <tr>
                                    <th scope="col" className="px-6 py-3">ID</th>
                                    
                                    <th scope="col" className="px-6 py-3">Comment</th>
                                    <th scope="col" className="px-6 py-3">ActionInRow</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feedBack.map((result, index) => (
                                    <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <td className="px-6 py-4">{result.id}</td>
        
                                        <td className="px-6 py-4">{result.comment}</td>
                                        <td className="px-6 py-4">
                                            <a href="" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>deleteHandler(result.id)}>Delete</a>
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

export default Feedback;
