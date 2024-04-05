import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminDashboard from '../AdminDashboard';

const Picture = () => {
  const [cards, setCards] = useState ([]);

  const cardsUrl = 'http://localhost:8080/cards';
  useEffect(() => {
    axios
     .get(cardsUrl)
     .then((response) => {
        setCards(response.data);
        console.log(response.data);
      })
     .catch((error) => {
        console.log(error);
      });
  },[])
  const deleteHandler = (deleteId) =>{
    const apiUrl1 = `http://localhost:8080/cards?id=${deleteId}`
    console.log(deleteId)
    axios
     .delete(apiUrl1)
     .then((response) => {
        setCards(response.data)
        console.log(response.data)
      })
  }

  return (
    <>
    <AdminDashboard/>
    <div className=''>
                <section className='text-center'>
                    <h1 className='text-2xl font-bold mt-2 mb-8'>Card List</h1>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-user">
                        <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400 font-medium">
                            <thead className="text-lg text-white uppercase bg-primary dark:bg-primary dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Card ID
                                    </th>
                                    <th scope="col" className="px-6  py-3">
                                        Image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Image Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action In Row
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cards.map((cards) => (
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={cards.id}>
                                        <td className="px-6 py-4">
                                            {cards.id}
                                        </td>
                                        <td className="px-6 py-4" style={{ width: '150px' }}>
                                            <img src={cards.image} alt={cards.imageTitle} className="max-w-full h-auto" />
                                        </td>
                                        <td className="px-6 py-4">
                                            {cards.imageTitle}
                                        </td>
                                        <td className="px-6 py-4">
                                            {cards.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            {cards.description}
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>deleteHandler(cards.id)}>Delete</a>
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

export default Picture;
