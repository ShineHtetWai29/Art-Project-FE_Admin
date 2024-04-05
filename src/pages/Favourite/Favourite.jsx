import axios from 'axios';
import React, { useState } from 'react';
import AdminDashboard from '../AdminDashboard';

const Favourite = () => {
  const [favourites, setFavourites] = useState([]);

  const favouriteUrl = 'http://localhost:8080/favourites'
  axios
    .get(favouriteUrl)
    .then((response) => {
      setFavourites(response.data);
      console.log(response.data);
    })
  return (
    <>
    <AdminDashboard/>
      <div className=''>
        <section className='text-center'>
          <h1 className='text-2xl font-bold mt-2 mb-8'>Favourite List</h1>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-user">
            <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400 font-medium">
              <thead className="text-lg text-white uppercase bg-primary dark:bg-primary dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    CardId
                  </th>
                  <th scope="col" className="px-6 py-3">
                    UserName
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action In Row
                  </th>
                </tr>
              </thead>
              <tbody>
                {favourites.map((Favourites) => (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={cards.id}>
                    <td className="px-6 py-4">
                      {cards.id}
                    </td>
                    <td className="px-6 py-4">
                      {cards.image}
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

export default Favourite;
