import React, { useEffect, useState } from 'react';
import AdminDashboard from '../AdminDashboard';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Category = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

   


    const newCategoryHandler = (e) => {
        e.preventDefault()
        navigate('/categoryForm')
    }
    const apiUrl = 'http://localhost:8080/categories'
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => {
                setCategories(response.data)
                console.log(response.data)
            })
    }, [])
    const deleteHandler = (deleteId) => {
        const apiUrl1 = `http://localhost:8080/categories?id=${deleteId}`
        console.log(deleteId)
        axios
            .delete(apiUrl1)
            .then((response) => {
                setCategories(response.data)
                console.log(response.data)
            })
    }
    return (
        <>
        <AdminDashboard/>
            <div className='font-muli'>
                <div className='flex justify-between w-full'>
                    <h1 className='text-2xl font-bold mb-12 w-[300px]'>Category Page</h1>

                    <div className='w-full'>
                        <button type='submit' className='text-lg bg-primary text-white rounded-lg h-10 w-36 mb-4 float-end' onClick={newCategoryHandler}>
                            New Category+
                        </button>
                    </div>
                </div>
                <section className='text-center'>

                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-custom">
                        <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400 font-medium">
                            <thead className="text-lg text-white uppercase bg-primary dark:bg-primary dark:text-primary">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Category ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ActionInRow
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category) => (
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={category.id}>
                                        <td className="px-6 py-4">
                                            {category.id}
                                        </td>
                                        <td className="px-6 py-4">
                                            {category.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => deleteHandler(category.id)}>Delete</a>
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

export default Category;
