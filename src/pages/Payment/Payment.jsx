import React, { useEffect, useState } from "react";
import AdminDashboard from "../AdminDashboard";
import axios from "axios";

const Payment = () => {
  const [payment, setPayment] = useState([]);
  const apiUrl = "http://localhost:8080/payment";
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setPayment(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  return (
    <>
      <AdminDashboard />
      <div className="">
        <section className="text-center">
          <h1 className="text-2xl font-bold mt-2 mb-8">Payment</h1>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-user">
            <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400 font-medium">
              <thead className="text-lg text-white uppercase bg-primary dark:bg-primary dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Card Photo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Buyer
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action In Row
                  </th>
                </tr>
              </thead>
              <tbody>
                {payment.map((payment) => (
                  <tr
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    key={payment.id}
                  >
                    <td className="px-6 py-4">{payment.id}</td>
                    <td className="px-6 py-4" style={{ width: "150px" }}>
                      <img
                        src={payment.card.image}
                        alt={payment.card.imageTitle}
                        className="max-w-full h-auto"
                      />
                    </td>
                    <td className="px-6 py-4">{payment.user.userName}</td>
                    <td className="px-6 py-4">{payment.amount}</td>

                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => deleteHandler(payment.id)}
                      >
                        Delete
                      </a>
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
};

export default Payment;
