import React, { useEffect, useState } from "react";
import Currency from "@/components/dashboard/currency";
import DataPicker from "@/components/dashboard/datapicker";
import PieChart from "@/components/dashboard/pie";
import TableData from "@/components/dashboard/table";

const dashboard = () => {
  const [table, setTable] = useState("project");

  return (
    <div className="md:pt-0 pt-12 w-full flex justify-end  px-5 drop-shadow-xl">
      <div className="text-black bg-transparent md:w-4/5 w-full">
        <div className="bg-stone-50 drop-shadow-2xl py-8 mb-12">
          <div className="flex md:flex-row flex-col items-center justify-between px-6 mb-6">
            <DataPicker />
            <Currency />
          </div>
          <div className="bg-white py-5 border-b border-gray-200">
            <div className="px-8 border-l-4 border-sky-500 text-lg">
              Invoice Overview
            </div>
          </div>
          {/* graph sector */}
          <div className="w-full bg-white px-4 py-3 flex md:flex-row flex-col items-center justify-center">
            <div className="bar md:w-1/2 w-full">
              <div className="bg-gradient-to-r from-sky-600/60 to-green-500/60 px-6 py-3 mb-2 text-white">
                <h2 className="text-lg">Total Amount</h2>
                <p className="text-md">12,959.335</p>
              </div>
              <div className="bg-gradient-to-r from-violet-700/60 to-blue-500/60 px-6 py-3 mb-2 text-white">
                <h2 className="text-lg">Total Paid</h2>
                <p className="text-md">11,651.110</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-400/40 px-6 py-3 mb-2 text-white">
                <h2 className="text-lg">Total Due</h2>
                <p className="text-md">11,651.110</p>
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-500/60 px-6 py-3 text-white">
                <h2 className="text-lg">Over Due</h2>
                <p className="text-md">11,651.110</p>
              </div>
            </div>
            <div className="pie w-1/2 flex items-center justify-center">
              <PieChart />
            </div>
          </div>
          {/* 3 page in one section */}
          <div className="w-full bg-white px-4 py-3 mt-5">
            <div className="flex items-center">
              <button
                onClick={() => setTable("project")}
                type="button"
                className={`px-7 py-3  ml-1 rounded ${
                  table === "project"
                    ? "bg-sky-600 text-white"
                    : "bg-white text-black"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setTable("task")}
                type="button"
                className={`px-7 py-3  ml-1 rounded ${
                  table === "task"
                    ? "bg-sky-600 text-white"
                    : "bg-white text-black"
                }`}
              >
                Tasks
              </button>
              <button
                onClick={() => setTable("ticket")}
                type="button"
                className={`px-7 py-3  ml-1 rounded ${
                  table === "ticket"
                    ? "bg-sky-600 text-white"
                    : "bg-white text-black"
                }`}
              >
                Tickets
              </button>
            </div>
            <div className="mt-8">
              <TableData role={table} />
            </div>
          </div>
          {/* 2 graph sector */}
          <div className="flex md:flex-row flex-col items-center justify-center w-full mt-5">
            <div className="quatation bg-white md:mr-5 md:mb-0 mb-4 w-full">
              <h3 className="my-5 border-l-4 border-sky-500 pl-6 ">
                Quatation Overview
              </h3>
              <div className="flex items-center justify-center w-full border-t border-gray-200 pb-2">
                <PieChart />
              </div>
            </div>
            <div className="lead bg-white w-full">
              <h3 className="my-5 border-l-4 border-sky-500 pl-6 ">Leads</h3>
              <div className="flex items-center justify-center w-full border-t border-gray-200 pb-2">
                <PieChart />
              </div>
            </div>
          </div>
          {/* income vs expense */}
          <div className="bg-white mt-5">
            <div className="py-3 border-b border-gray-200">
              <h3 className="my-4 border-l-4 border-sky-500 pl-6">
                Income vs Expense
              </h3>
            </div>
            <div className="w-full px-5">
              <table className="w-full border text-center mt-3 text-gray-500 md:text-lg text-small">
                <thead>
                  <tr>
                    <th className="border border-gray-200 py-2">Type</th>
                    <th className="border border-gray-200 py-2" colSpan={2}>
                      Category
                    </th>
                    <th className="border border-gray-200 py-2">
                      Category Total
                    </th>
                    <th className="border border-gray-200 py-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 py-2" rowSpan={6}>
                      Expenses
                    </td>
                    <td className="border border-gray-200 py-2" colSpan={2}>
                      IT and Internet Expenses
                    </td>
                    <td className="border border-gray-200 py-2">100.000</td>
                    <td className="border border-gray-200 py-2" rowSpan={6}>
                      200,368.928
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2" colSpan={2}>
                      Telephone
                    </td>
                    <td className="border border-gray-200 py-2">50.000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2" colSpan={2}>
                      Insurance
                    </td>
                    <td className="border border-gray-200 py-2">250.000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2" colSpan={2}>
                      Rent
                    </td>
                    <td className="border border-gray-200 py-2">500.000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2" colSpan={2}>
                      Foods & Meals
                    </td>
                    <td className="border border-gray-200 py-2">500.000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2" colSpan={2}>
                      Purchase
                    </td>
                    <td className="border border-gray-200 py-2">198,968.928</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2" rowSpan={3}>
                      Incomes
                    </td>
                    <td className="border border-gray-200 py-2" rowSpan={2}>
                      Invoice
                    </td>
                    <td className="border border-gray-200 py-2">
                      Sale Invoice
                    </td>
                    <td className="border border-gray-200 py-2">11,651.610</td>
                    <td className="border border-gray-200 py-2">13,651.610</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2">POS Invoice</td>
                    <td className="border border-gray-200 py-2">0.000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 py-2" colSpan={2}>
                      Services
                    </td>
                    <td className="border border-gray-200 py-2">2,000.000</td>
                  </tr>
                  <tr>
                    <td
                      className="border text-end px-4 border-gray-200 py-2"
                      colSpan={4}
                    >
                      Revenue
                    </td>
                    <td className="border border-gray-200 py-2">
                      {" "}
                      -186,717.818
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
