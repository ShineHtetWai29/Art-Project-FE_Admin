import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";
// import Images from "../../Images/Images";
import { Link } from "react-router-dom";
import Visa from "../images/visa.png";
import Master from "../images/master.png";

function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState("visa");
  return (
    <div
      id="container"
      className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
    >
      <form className="w-[800px] bg-white rounded p-4">
        <div className="flex justify-between ">
          <h2 className="text-blue-800 text-[24px] font-bold underline">
            PREMIUM INFORMATION AND CHOOSE PAYMENT METHOD
          </h2>
          <GiCancel className="text-[25px] text-blue-800" />
        </div>

        <table className="w-full my-4">
          <tbody>
            <tr className="grid grid-cols-2 bg-[#0000004d] mb-1">
              <td className="px-4 py-1 text-[#333]">Insured For</td>
              <td className="px-4 py-1 text-[#333] font-bold"></td>
            </tr>
            <tr className="grid grid-cols-2 bg-[#0000004d] mb-1">
              <td className="px-4 py-1 text-[#333]">Premium Amount</td>
              <td className="px-4 py-1 text-[#333] font-bold"> USD</td>
            </tr>
            <tr className="grid grid-cols-2 bg-[#0000004d] mb-1">
              <td className="px-4 py-1 text-[#333]">Net Premium</td>
              <td className="px-4 py-1 text-[#333] font-bold"> USD</td>
            </tr>
            <tr className="grid grid-cols-2 bg-[#0000004d] mb-1">
              <td className="px-4 py-1 text-[#333]">Age (Year)</td>
              <td className="px-4 py-1 text-[#333] font-bold"></td>
            </tr>
            <tr className="grid grid-cols-2 bg-[#0000004d] mb-1">
              <td className="px-4 py-1 text-[#333]">Coverage Plan</td>
              <td className="px-4 py-1 text-[#333] font-bold"> Days</td>
            </tr>
            <tr className="grid grid-cols-2 bg-[#0000004d] mb-1">
              <td className="px-4 py-1 text-[#333]">Passport Number</td>
              <td className="px-4 py-1 text-[#333] font-bold"></td>
            </tr>
            <tr className="grid grid-cols-2 bg-[#0000004d] mb-1">
              <td className="px-4 py-1 text-[#333]">
                Name
                <br />
                (as per passport)
              </td>
              <td className="px-4 py-1 text-[#333] font-bold"></td>
            </tr>
            <tr className="grid grid-cols-2 bg-[#0000004d] mb-1">
              <td className="px-4 py-1 text-[#333]">Estimated Arrival Date</td>
              <td className="px-4 py-1 text-[#333] font-bold"></td>
            </tr>
          </tbody>
        </table>

        <h4 className="text-blue-800 text-[20px] font-bold">
          Close Payment Method
        </h4>

        <div className="w-full grid grid-cols-4 p-8 gap-4 border-[1px] border-gray-400 my-4">
          <div>
            <input
              type="radio"
              value="visa"
              checked={paymentMethod === "visa"}
              id="visa"
              hidden
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
            />
            <label htmlFor="visa" className="relative">
              <img
                src={Visa}
                className={`col-span-1 h-[110px] ${
                  paymentMethod === "visa" ? "bg-gray-400" : ""
                } p-4 border-[1px] border-gray-400`}
                alt="Visa Card"
              />
              {paymentMethod === "visa" && (
                <i className="fa-solid fa-circle-check absolute top-[-10px] right-[-10px] mt-0 mr-0 text-[30px] text-blue-800"></i>
              )}
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="master"
              value="master"
              hidden
              checked={paymentMethod === "master"}
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
            />
            <label htmlFor="master" className="relative">
              <img
                src={Master}
                className={`col-span-1 w-full p-4 h-[110px] ${
                  paymentMethod === "master" ? "bg-gray-400" : ""
                } border-[1px] border-gray-400`}
                alt="Mastercard"
              />
              {paymentMethod === "master" && (
                <i className="fa-solid fa-circle-check absolute top-[-10px] right-[-10px] mt-0 mr-0 text-[30px] text-blue-800"></i>
              )}
            </label>
          </div>
        </div>
        <Link
          to={"/checkinformation"}
          className="text-white text-[20px] font-bold bg-blue-800 text-center py-1 px-6 rounded "
        >
          NEXT
        </Link>
      </form>
    </div>
  );
}

export default PaymentMethod;
