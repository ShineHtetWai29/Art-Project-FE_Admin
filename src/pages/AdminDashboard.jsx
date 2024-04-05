import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { AiFillPicture } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import art from "../images/art.png";

const AdminDashboard = () => {
  return (
    <div>
      <div id="docs-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-72 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">
        <div className="w-44">
          <img src={art} className='w-[100px] mx-auto' alt="" />
        {/* <h1 className="font-inter text-5xl font-black text-primary">ART</h1> */}
        </div>
        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
          <ul className="space-y-1.5">
            <li>
              <Link to="/dashboard" className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                <FaHome className="w-5 h-5" />
                <p className='text-lg font-normal'>Dashboard</p>
              </Link>
            </li>
            <li className="hs-accordion" id="users-accordion">
              <Link to="/user" className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <FaUser className="w-5 h-5" />
                <p className='text-lg font-normal'>Users</p>
              </Link>
            </li>
            <li className="hs-accordion" id="users-accordion">
              <Link to="/category" className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <BiSolidCategory className="w-5 h-5" />
                <p className='text-lg font-normal'>Categories</p>
              </Link>
            </li>
            <li className="hs-accordion" id="users-accordion">
              <Link to="/card" className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <AiFillPicture className="w-5 h-5" />
                <p className='text-lg font-normal'>Cards</p>
              </Link>
            </li>
            <li className="hs-accordion" id="users-accordion">
              <Link to="/favourite" className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <MdFavorite className="w-5 h-5" />
                <p className='text-lg font-normal'>Favourite</p>
              </Link>
            </li>
            <li className="hs-accordion" id="users-accordion">
              <Link to="/feedback" className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <VscFeedback className="w-5 h-5" />
                <p className='text-lg font-normal'>Feedback</p>
              </Link>
            </li>
            <li className="hs-accordion" id="users-accordion">
              <Link to="/payment" className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <AiFillDollarCircle className="w-5 h-5" />
                <p className='text-lg font-normal'>Payment</p>
              </Link>
            </li>
            <li className="hs-accordion" id="users-accordion">
              <Link to="/" className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <CiLogout  className="w-5 h-5"/>
                <p className='text-lg font-normal'>Logout</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AdminDashboard;
