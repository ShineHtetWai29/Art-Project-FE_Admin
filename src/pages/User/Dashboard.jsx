import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { LuPaintBucket } from "react-icons/lu";
import User from './User';
import { RiAdminFill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { RiPictureInPictureLine } from "react-icons/ri";
import AdminDashboard from '../AdminDashboard';
import axios from 'axios';

const Dashboard = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [data,setData] = useState();
    const [categoryData,setCategoryData] = useState();
    const [userData,setUserData] = useState();
    const dropdownRef = useRef(null);

    const countUrl = 'http://localhost:8080/cards/count'
    axios
    .get(countUrl)
    .then((response) => {
        setData(response.data);
        console.log(response.data);
    })

    const categoryCountUrl = 'http://localhost:8080/categories/count'
    axios
    .get(categoryCountUrl)
    .then((response) => {
        setCategoryData(response.data)
        console.log(response.data)
    })

    const userCountUrl = 'http://localhost:8080/users/count'
    axios
    .get(userCountUrl)
    .then((response) => {
        setUserData(response.data)
        console.log(response.data)
    })

    // Close dropdown when user clicks outside the dropdown menu
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
        <AdminDashboard/>
            <div className='font-robotoSlap'>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-between mb-5 '>
                        {/* <form className="flex max-w-sm ">
                            <label for="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ........" required />
                            </div>
                            <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </form> */}
                    </div>

                    {/* <Link to='/adminprofile' className=''> 
                    <img data-modal-target="select-modal" data-modal-toggle="select-modal" className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png" alt="Bordered avatar" />
                    </Link>  */}
                    <div class="relative inline-block text-left mb-5">
                        <div>
                        
                            <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="false" aria-haspopup="false">
                            <RiAdminFill className='w-6 h-6' />My Profile
                                <svg className={"-mr-1 h-5 w-5${isDropdownOpen ? 'transform rotate-180':''} text-gray-400"} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        {isDropdownOpen && (
                            <div ref={dropdownRef} className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div class="py-1" role="none">

                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                                    <Link to='/adminprofile' className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Profile</Link>
                                    
                                    <form method="POST" action="#" role="none">
                                        <Link to="/" type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</Link>
                                    </form>
                                </div>
                            </div>
                        )}


                    </div>

                </div>

                <div className=''>
                    <div className='grid grid-cols-3 gap-4'>

                        <div className='col-span-1 p-10 text-center rounded-3xl shadow-2xl bg-card '>
                            <LuPaintBucket className='w-14 h-14 rounded-full ' />
                            <h2 className=''>Card</h2>
                            <p>count: {data}</p>

                        </div>
                        <div className='col-span-1 rounded-3xl shadow-2xl p-12 text-center '>
                            <RiPictureInPictureLine className='w-14 h-14 rounded-full' />
                            <h2 className=''>Category</h2>
                            <p>Count: {categoryData}</p>

                        </div>
                        <div className='col-span-1 rounded-3xl shadow-2xl p-12 text-center '>
                            <CiUser className='w-14 h-14 rounded-full' />
                            <h2 className=''>User</h2>
                            <p>Count: {userData}</p>

                        </div>
                        <div className="col-span-3">
                            <User />

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}


export default Dashboard;
