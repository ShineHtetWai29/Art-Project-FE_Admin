import React, { useState } from 'react';
import AdminDashboard from '../AdminDashboard';

const Payment = () => {
  const [payment,setPayment] = useState([]);

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
                {payment.map((payment) => (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={payment.id}>
                    <td className="px-6 py-4">
                      {payment.id}
                    </td>
                    <td className="px-6 py-4">
                      {payment.cardId}
                    </td>
                    <td className="px-6 py-4">
                      {payment.username}
                    </td>
                    
                    <td className="px-6 py-4">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => deleteHandler(payment.id)}>Delete</a>
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

export default Payment;
