import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { IoLinkOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
const distributors = [
  {
    name: "Agarwal Pharma",
    percentage: "15%",
    icon: "/images/google.png",
    dotColor: "bg-blue-500",
  },
  {
    name: "Jyoty Pharma",
    percentage: "35%",
    icon: "/images/tradecorp.png",
    dotColor: "bg-green-500",
  },
  {
    name: "Jyoty Pharma",
    percentage: "35%",
    icon: "/images/tradecorp.png",
    dotColor: "bg-green-500",
  },
  {
    name: "Rama Dealers",
    percentage: "50%",
    icon: "/images/multipill.png",
    dotColor: "bg-black",
  },
  {
    name: "Rama Dealers",
    percentage: "50%",
    icon: "/images/multipill.png",
    dotColor: "bg-black",
  },
  {
    name: "Rama Dealers",
    percentage: "50%",
    icon: "/images/multipill.png",
    dotColor: "bg-black",
  },
  {
    name: "Rama Dealers",
    percentage: "50%",
    icon: "/images/multipill.png",
    dotColor: "bg-black",
  },
  {
    name: "Rama Dealers",
    percentage: "50%",
    icon: "/images/multipill.png",
    dotColor: "bg-black",
  },
  {
    name: "Rama Dealers",
    percentage: "50%",
    icon: "/images/multipill.png",
    dotColor: "bg-black",
  },
  {
    name: "Rama Dealers",
    percentage: "50%",
    icon: "/images/multipill.png",
    dotColor: "bg-black",
  },
];
function Right() {
  return (
    <>
      <aside className="w-80 ml-6">
        <div className="space-y-3">
          <div className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-full space-x-3 w-fit shadow-md">
            <div className="bg-blue-600 rounded-full p-2 flex items-center justify-center">
              <IoEyeSharp className="text-white w-6 h-6" />
            </div>

            <h3 className="text-lg font-semibold">270+</h3>
            <span className="text-gray-400 text-sm">PO received today</span>
          </div>

          <div className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded-full shadow-md w-fit">
            <div className="flex items-center space-x-2">
              <IoLinkOutline className="text-gray-600 w-5 h-5" />
              <span className="text-gray-800 font-medium">Your Business</span>
              <button className="text-blue-600 text-sm font-semibold">
                Copy Link
              </button>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-blue-400 pl-3">
              <IoShareSocialOutline className="text-gray-700 w-6 h-6" />
              <span className="text-xs text-gray-600">Share Link</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md mt-8 overflow-hidden w-[320px]">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Top 10 Distributors</h3>
            <button className="text-gray-500 text-lg">⋮</button>
          </div>
          <p className="text-gray-400 text-xs">Based on order Qty</p>

          <div className="flex space-x-2 mt-2">
            <div className="w-1/4 h-1 bg-blue-500 rounded-full"></div>
            <div className="w-1/4 h-1 bg-green-500 rounded-full"></div>
            <div className="w-1/4 h-1 bg-black rounded-full"></div>
            <div className="w-1/12 h-1 bg-gray-400 rounded-full"></div>
          </div>

          <div className="mt-3 max-h-96 overflow-y-auto custom-scrollbar">
            {distributors.map((distributor, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b last:border-none"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={distributor.icon}
                    alt="icon"
                    className="w-6 h-6 rounded-full"
                  />
                  <div
                    className={`w-2 h-2 rounded-full ${distributor.dotColor}`}
                  ></div>
                  <span className="text-gray-800 text-sm">
                    {distributor.name}
                  </span>
                </div>

                <div className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full font-semibold">
                  {distributor.percentage}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6  rounded-lg shadow-md mt-8 overflow-hidden">
          <h3 className="text-lg font-semibold">Stocks Running Low</h3>

          <div className="mt-4 max-h-48 overflow-y-auto space-y-3">
            {[
              { name: "Dolo", quantity: "10 Packet" },
              { name: "Paracetamol", quantity: "15 Packet" },
              { name: "Betadin", quantity: "15 Packet" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 bg-gray-100 rounded-lg"
              >
                <div>
                  <p className="text-gray-800 font-semibold">{item.name}</p>
                  <p className="text-gray-500 text-xs">
                    Remaining Quantity: {item.quantity}
                  </p>
                </div>

                <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full font-semibold">
                  Low
                </span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
export default Right;
