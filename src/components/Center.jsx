import React from "react";
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    title: "Orders Received",
    subtitle: "Last 30 Days",
    value: "23",
    bgColor: "bg-[#FBE9C6]",
    textColor: "text-[#6B4F00]",
  },
  {
    title: "Total Products",
    subtitle: "In Portfolio",
    value: "101",
    bgColor: "bg-[#DCE7FF]",
    textColor: "text-[#2A3B7D]",
  },
  {
    title: "Distributor Approved",
    subtitle: "by You",
    value: "39",
    bgColor: "bg-[#E5E5E5]",
    textColor: "text-[#4D4D4D]",
  },
];

function Center() {
  return (
    <>
      <div className="flex-1 px-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Hello,</h2>
          <div className="flex items-center space-x-4"></div>
        </div>

        <p className="text-gray-600 mt-2">
          We have all the stats ready for you!
        </p>

        <div className="flex gap-2 justify-center mt-6">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <div
                className={`relative ${stat.bgColor} p-6 shadow-md ${stat.textColor}`}
                style={{
                  width: "180px",
                  height: "140px",
                  borderRadius: "20px",
                  borderTopRightRadius: "60px",
                  borderBottomRightRadius: "60px",
                  position: "relative",
                }}
              >
                <h3 className="text-sm font-semibold">{stat.title}</h3>
                <p className="text-xs text-gray-500">{stat.subtitle}</p>
                <p className="text-4xl font-bold mt-2">{stat.value}</p>
              </div>

              <div className="absolute -bottom-4 right-4 bg-black text-white p-2 rounded-full flex items-center justify-center shadow-lg">
                <ArrowUpRight size={16} />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <div className="grid grid-cols-12 items-center w-full gap-2 border-b">
            <div className="col-span-6 ">
              <h3 className="">
                Distributor Requests
                <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                  42 Pending
                </span>
              </h3>
              <p className="text-gray-500 text-xs leading-tight">
                <span className="font-semibold">You have got orders! </span>
                Approve the dealers and start processing orders.
              </p>
            </div>

            <div className="col-span-2 flex items-center bg-gray-200 rounded-full p-1 w-fit space-x-1">
              {["All", "Pending", "Approved"].map((tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                    tab === "Approved"
                      ? "bg-green-500 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <table className="w-full mt-2">
            <thead>
              <tr className="text-left text-gray-500 ">
                <th className="py-2">Distributor Name</th>
                <th className="py-2">Status</th>
                <th className="py-2">Contact No.</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  status: "Pending",
                  color: "bg-blue-100 text-blue-600",
                  badge: "Pending",
                  days: "1 day ago",
                },
                {
                  status: "Pending",
                  color: "bg-blue-100 text-blue-600",
                  badge: "Pending",
                  days: "1 day ago",
                },
                {
                  status: "Rejected",
                  color: "bg-red-100 text-red-600",
                  badge: "Rejected",
                  days: "1 day ago",
                },
                {
                  status: "Approved",
                  color: "bg-green-100 text-green-600",
                  badge: "Approved",
                  days: "18 days ago",
                },
              ].map((item, index) => (
                <tr key={index} className="">
                  <td className="py-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src={`https://picsum.photos/50/50?random=${index}`}
                        alt="Distributor"
                        className="w-10 h-10 rounded-md"
                      />

                      <div>
                        <p className="font-semibold">Aparna Pharmacy</p>
                        <p className="text-xs text-gray-500">
                          License No. 1238966
                        </p>
                        <p className="text-xs text-gray-500">
                          38 Sitapura Ind Area Jaipur • {item.days}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="py-3">
                    <span
                      className={`px-3 py-1 text-sm font-semibold rounded-full ${item.color}`}
                    >
                      {item.badge}
                    </span>
                  </td>

                  <td className="py-3 text-gray-600">+91 8899228863</td>

                  <td className="py-3 text-blue-500 text-xl font-bold cursor-pointer">
                    ➜
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-2 rounded-lg shadow-md mt-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">
              Top Products
            </h3>
            <span className="text-gray-500 text-sm">Past 30 Days</span>
          </div>

          <div className="overflow-y-auto max-h-60 mt-2">
            <table className="w-full">
              <thead>
                <tr className="text-gray-500 text-sm border-b">
                  <th className="py-2 text-left w-8">#</th>
                  <th className="py-2 text-left">Name</th>
                  <th className="py-2 text-left">Popularity</th>
                  <th className="py-4 text-left">Sales</th>
                </tr>
              </thead>

              <tbody>
                {[
                  {
                    name: "Paracetamol",
                    color: "bg-blue-500",
                    textColor: "text-blue-600",
                    popularity: "45%",
                  },
                  {
                    name: "Dolo",
                    color: "bg-green-500",
                    textColor: "text-green-600",
                    popularity: "29%",
                  },
                  {
                    name: "Aspirin",
                    color: "bg-purple-500",
                    textColor: "text-purple-600",
                    popularity: "18%",
                  },
                  {
                    name: "Caltabs",
                    color: "bg-orange-500",
                    textColor: "text-orange-600",
                    popularity: "25%",
                  },
                ].map((product, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 text-gray-600 font-medium">{`0${
                      index + 1
                    }`}</td>

                    <td className="py-3 font-semibold text-gray-700">
                      {product.name}
                    </td>

                    <td className="py-3">
                      <div className="w-full bg-gray-200 rounded-md h-2 relative">
                        <div
                          className={`${product.color} h-2 rounded-md`}
                          style={{ width: product.popularity }}
                        ></div>
                      </div>
                    </td>

                    <td className="py-3">
                      <span
                        className={`px-6 mx-4 py-1 text-xs font-semibold rounded-full bg-opacity-20 ${product.color} ${product.textColor}`}
                      >
                        {product.popularity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Center;
