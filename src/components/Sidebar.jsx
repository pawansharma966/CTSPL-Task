import React from "react";
import {
  FiHome,
  FiBell,
  FiShoppingCart,
  FiUsers,
  FiClipboard,
  FiPackage,
  FiBarChart2,
  FiUser,
  FiLayers,
  FiPieChart,
  FiTrendingUp,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";

function Sidebar() {
  return (
    <>
      <aside className="w-64 bg-gray-50 p-4 shadow-md rounded-lg min-h-screen flex flex-col justify-between">
        <button className="w-full py-2 bg-blue-500 text-white rounded-lg flex items-center justify-center space-x-2">
          🚀 <span>AI Coming Soon</span>
        </button>

        <nav className="mt-4 flex-grow overflow-y-auto">
          <p className="text-gray-400 text-xs font-semibold mt-4">BUSINESS</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center space-x-2 font-semibold text-black mt-4">
              <FiHome /> <span>Overview</span>
            </li>
            <li className="flex items-center space-x-2  mt-2">
              <FiShoppingCart /> <span>Order Management</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiUsers /> <span>Distributor / CNF List</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiClipboard /> <span>Expiry Returns / Credit Note</span>
            </li>
          </ul>

          <p className="text-gray-400 text-xs font-semibold mt-6">PRODUCTS</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center space-x-2  mt-4">
              <FiPackage /> <span>Product Management</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiBarChart2 /> <span>Stock Management</span>
            </li>
          </ul>

          <p className="text-gray-400 text-xs font-semibold mt-6">
            ORGANIZATION MANAGEMENT
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center space-x-2  mt-4">
              <FiUser /> <span>Employee Management</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiLayers /> <span>Divisions Management</span>
            </li>
          </ul>

          <p className="text-gray-400 text-xs font-semibold mt-6">
            FINANCE & REPORTING
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center space-x-2  mt-4">
              <FiPieChart /> <span>Accounting</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiTrendingUp /> <span>Analytics & Reports</span>
            </li>
          </ul>

          <p className="text-gray-400 text-xs font-semibold mt-6">OTHER</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center space-x-2  mt-4">
              <FiSettings /> <span>Profile Settings</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiHelpCircle /> <span>Help!</span>
            </li>
          </ul>

          <div className="p-2 bg-white rounded-lg shadow-md  mt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FiUser className="text-gray-600" />
                <span className="text-gray-800 font-semibold  mt-2">
                  Profile
                </span>
              </div>
              <button className="text-xs px-2 py-1 bg-gray-200 rounded-full">
                Update
              </button>
            </div>

            <div className="mt-2 bg-gray-300 h-1 rounded-full w-full">
              <div className="bg-blue-500 h-1 rounded-full w-2/3"></div>
            </div>
            <p className="text-gray-400 text-xs mt-1">
              Complete your profile to enjoy more features!
            </p>
          </div>
          <p className="text-center text-gray-500 text-xs  mt-4">
            📱 Get JEE1 App! Coming Soon!
          </p>
        </nav>
      </aside>
    </>
  );
}
export default Sidebar;
