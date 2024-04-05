import React, { useState } from 'react';
import AdminDashboard from '../AdminDashboard';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { BiCategory } from "react-icons/bi";
const CategoryForm = () => {
  const [inputData, setInputData] = useState({
    name: ""
  })
  const navigate = useNavigate()
  const inputHandler = (e) => {
    const categoryName = e.target.value
    setInputData({
      ...inputData,
      name: categoryName
    })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (!inputData.name) {
      alert('Please fill category name')
    } else {
      const apiUrl = 'http://localhost:8080/categories'
      axios
        .post(apiUrl, { name: inputData.name })
        .then((res) => {
          console.log(res)
        })
      navigate('/category')
      window.location.reload()
    }
  }
  return (
    <>
      <AdminDashboard />
      <div className='font-inter ' >
        <h2 className='float-left font-bold text-2xl mb-4'>Category Form</h2>
        <div className='font-muli '>

          <section className='text-xl'>
            <div className=' m-auto ]'>
              {/* <label className=' text-left text-2xl font-medium'>Category</label> */}
              {/* <div className="flex mt-4"> */}
              {/* <div className="mb-6  w-[900px]">

</div> */}

              <div className="relative mb-6 w-[900px]">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <BiCategory className='w-5 h-5 mt-11' />
                </div>
                <input type="text" id="input-group-1" className="bg-gray-50 border p-4 border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full ps-10   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CategoryName"
                 onChange={inputHandler} />

              </div>
              <div className="m-0 flex">
                <button type="submit" className="bg-primary text-white w-[890px] rounded-lg p-1.5" onClick={submitHandler}>
                  Submit
                </button>
              </div>
            </div>
            {/* </div> */}
          </section>
        </div>
      </div>

    </>
  );
}

export default CategoryForm;
