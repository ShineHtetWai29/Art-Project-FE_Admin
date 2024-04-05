import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import AdminDashboard from '../AdminDashboard';

const Profile = () => {
  return (
    <>
    <AdminDashboard/>
      <h2 className='mb-5 text-left text-3xl font-bold font-muli'>My Profile</h2>
      <div className=' w-[950px] flex gap-6 '>
        <div className='p-10 font-muli bg-primary w-[300px] h-[300px] rounded-2xl shadow-lg text-white'>

          <div className='flex flex-wrap'>
            <div className='w-[100px] mx-auto'>
              <img src="https://clipground.com/images/admin-png-17.png" className='rounded-full w-60 h-30' alt="" />
            </div>
            <div className=' mx-auto  text-center '>
              <h2 className='text-xl font-bold mb-3 text-center'>Kevin Anderson</h2>
              <p className='text-xl mb-3'>Admin</p>

              <div className='flex flex-wrap gap-5 items-center justify-center'>
                <FaFacebook className='w-6 h-6 ' />
                <FaTwitter className='w-6 h-6' />
                <FaInstagram className='w-6 h-6' />
              </div>

            </div>

          </div>






        </div>
        <div className='w-[700px] bg-primary rounded-lg text-white p-7'>
          <h2 className='text-left  font-muli text-2xl font-bold border-b-2 border-white mb-5 '>Overiew</h2>
          <h2 className='text-left text-xl mb-5'>About</h2>
          <p className='mb-7 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit pariatur nesciunt dignissimos error perspiciatis voluptatem nemo ipsam repellendus officiis delectus quis molestias quasi aspernatur, ex aperiam et, amet eius magni.</p>

          <h2 className='text-left text-xl mb-5'>Profile Details</h2>


          <div class="relative overflow-x-auto font-muli">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-secondary dark:bg-gray-700 dark:text-gray-400">

              </thead>
              <tbody>
                <tr class="bg-secondary border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Full Name
                  </th>
                  <td class="px-6 py-4">
                    Kevin Anderson
                  </td>

                </tr>
                <tr class="bg-secondary border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Company
                  </th>
                  <td class="px-6 py-4">

                    Lueilwitz, Wisoky and Leuschke
                  </td>

                </tr>
                <tr class="bg-secondary border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Job
                  </th>
                  <td class="px-6 py-4">
                    Admin
                  </td>

                </tr>
                <tr class="bg-secondary border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Country
                  </th>
                  <td class="px-6 py-4">
                  Myanmar
                  </td>

                </tr>
                <tr class="bg-secondary border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Address
                  </th>
                  <td class="px-6 py-4">
                    Yangon Myanmar
                  </td>

                </tr>
                <tr class="bg-secondary border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Phone
                  </th>
                  <td class="px-6 py-4">
                    09877676757
                  </td>

                </tr>
                <tr class="bg-secondary border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Email
                  </th>
                  <td class="px-6 py-4">
                    KevinAnderson@gmail.com
                  </td>

                </tr>
               
              </tbody>
            </table>
          </div>

        </div>
      </div>


    </>
  );
}

export default Profile;
