import React from "react";
import ItemTable from "@/components/item/item-table";
import DataPicker from "@/components/dashboard/datapicker";
import DropDown from "@/components/item/DropDown";

const list = () => {
  return (
    <div className="absolute md:w-4/5 w-full right-0 h-screen top-0 pt-20 overflow-y-scroll px-5 drop-shadow-xl">
      <div className="text-black bg-transparent w-full">
        <div className="bg-stone-50 drop-shadow-2xl mb-12">
          <div className="title border-b border-gray-200 py-2 flex items-center justify-between">
            <h3 className="text-lg border-l-4 border-sky-500 pl-5">Invoices</h3>
            <div className="new-item px-5 py-4">
              <button className="flex items-center border border-sky-500 text-sky-500 px-2 py-1 text-small rounded transition-all ease-in-out delay-200 hover:bg-sky-500 hover:text-white">
                <i className="bx bx-plus pe-2 font-semibold text-lg"></i>
                <p>New Items</p>
              </button>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center w-full justify-between px-6 my-3">
            <DataPicker />
            <DropDown />
            <DropDown />
            <DropDown />
            <DropDown />
          </div>

          <div className="grid grid-cols-4 px-4 place-items-center w-full my-4">
            <div className="total-card border border-gray-400 rounded-md w-56 px-4 py-4 text-blue-700">
              <h2 className="text-xl font-semibold">Total Amount</h2>
              <p className="text-md">2.503.565</p>
              <p className="text-md">2.503.565</p>
              <p className="text-md">2.503.565</p>
            </div>
            <div className="total-card border border-gray-400 rounded-md w-56 px-4 py-4 text-green-600">
              <h2 className="text-xl font-semibold">Total Paid</h2>
              <p className="text-md">2.503.565</p>
              <p className="text-md">2.503.565</p>
              <p className="text-md">2.503.565</p>
            </div>
            <div className="total-card border border-gray-400 rounded-md w-56 px-4 py-4 text-gray-600">
              <h2 className="text-xl font-semibold">Total Due</h2>
              <p className="text-md">2.503.565</p>
              <p className="text-md">2.503.565</p>
              <p className="text-md">2.503.565</p>
            </div>
            <div className="total-card border border-gray-400 rounded-md w-56 px-4 py-4 text-red-500">
              <h2 className="text-xl font-semibold">Over Due</h2>
              <p className="text-md">2.503.565</p>
              <p className="text-md">2.503.565</p>
              <p className="text-md">2.503.565</p>
            </div>
          </div>
          <div>
            <div className="above-table px-5 flex md:items-center flex-col md:flex-row justify-between mb-5">
              <div className="perpage flex items-center border border-gray-300 rounded w-fit">
                <div className="flex items-center px-3 py-2 border-r border-gray-300 bg-stone-300/40 cursor-pointer">
                  <select className="w-full outline-none h-full">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
                <p className="px-3 py-1.5 border-r border-gray-300 cursor-pointer">
                  Export
                </p>
                <div className="px-3 py-2 flex items-center cursor-pointer">
                  <i className="bx bx-refresh"></i>
                </div>
              </div>
              <div className="searchbar md:mt-0 mt-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none border border-gray-300 px-2 py-1"
                />
              </div>
            </div>
            <div className="item-tabel mt-5 px-5">
              <table className="w-full">
                <thead>
                  <tr className="bg-stone-200 h-10 text-stone-500/80 text-sm">
                    <th colSpan={2} className="text-start pl-5">
                      Invoice No.
                    </th>
                    <th colSpan={2} className="text-start">
                      Customer Name
                    </th>
                    <th className="text-start max-md:hidden">Location</th>
                    <th className="text-start max-md:hidden">Total Price</th>
                    <th className="text-start max-md:hidden">Paid Amount</th>
                    <th className="text-start max-md:hidden">Status</th>
                    <th className="text-start max-md:hidden">Date</th>
                    <th className="text-start max-md:hidden">Action</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="h-12 border-b border-gray-300 last:border-none odd:bg-blue-50">
                    <td
                      colSpan={2}
                      className="text-start pl-5 text-stone-900/80"
                    >
                      INV-0003
                    </td>
                    <td colSpan={2} className="text-stone-900/80">
                      William Jhones{" "}
                      <span className="text-gray-500">(USD)</span>
                    </td>
                    <td className="max-md:hidden text-gray-500">
                      San Francisco
                    </td>
                    <td className="max-md:hidden text-gray-500">1,430.460</td>
                    <td className="max-md:hidden text-gray-500">1,430.460</td>
                    <td className="max-md:hidden text-gray-500">
                      <span className="border border-blue-400 text-blue-400 px-5 py-1 rounded text-sm">
                        Paid
                      </span>
                    </td>
                    <td className="max-md:hidden text-gray-500">01-Sep-2023</td>
                    <td className="max-md:hidden">
                      <i className="bx bx-edit border border-blue-500 text-blue-500 p-1 rounded me-2 cursor-pointer"></i>
                      <i className="bx bx-trash border border-red-500 text-red-500 p-1 rounded cursor-pointer"></i>
                    </td>
                  </tr>
                  <tr className="h-12 border-b border-gray-300 last:border-none odd:bg-blue-50">
                    <td
                      colSpan={2}
                      className="text-start pl-5 text-stone-900/80"
                    >
                      INV-0003
                    </td>
                    <td colSpan={2} className="text-stone-900/80">
                      William Jhones{" "}
                      <span className="text-gray-500">(USD)</span>
                    </td>
                    <td className="max-md:hidden text-gray-500">
                      San Francisco
                    </td>
                    <td className="max-md:hidden text-gray-500">1,430.460</td>
                    <td className="max-md:hidden text-gray-500">1,430.460</td>
                    <td className="max-md:hidden text-gray-500">
                      <span className="border border-blue-400 text-blue-400 px-5 py-1 rounded text-sm">
                        Paid
                      </span>
                    </td>
                    <td className="max-md:hidden text-gray-500">01-Sep-2023</td>
                    <td className="max-md:hidden">
                      <i className="bx bx-edit border border-blue-500 text-blue-500 p-1 rounded me-2 cursor-pointer"></i>
                      <i className="bx bx-trash border border-red-500 text-red-500 p-1 rounded cursor-pointer"></i>
                    </td>
                  </tr>
                  <tr className="h-12 border-b border-gray-300 last:border-none odd:bg-blue-50">
                    <td
                      colSpan={2}
                      className="text-start pl-5 text-stone-900/80"
                    >
                      INV-0003
                    </td>
                    <td colSpan={2} className="text-stone-900/80">
                      William Jhones{" "}
                      <span className="text-gray-500">(USD)</span>
                    </td>
                    <td className="max-md:hidden text-gray-500">
                      San Francisco
                    </td>
                    <td className="max-md:hidden text-gray-500">1,430.460</td>
                    <td className="max-md:hidden text-gray-500">1,430.460</td>
                    <td className="max-md:hidden text-gray-500">
                      <span className="border border-blue-400 text-blue-400 px-5 py-1 rounded text-sm">
                        Paid
                      </span>
                    </td>
                    <td className="max-md:hidden text-gray-500">01-Sep-2023</td>
                    <td className="max-md:hidden">
                      <i className="bx bx-edit border border-blue-500 text-blue-500 p-1 rounded me-2 cursor-pointer"></i>
                      <i className="bx bx-trash border border-red-500 text-red-500 p-1 rounded cursor-pointer"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-action mt-4 flex px-5 items-center justify-between">
              <div className="showing">
                <p className="text-stone-800/80">
                  Showing 1 to 11 of 11 entries
                </p>
              </div>
              <div className="pagination mt-5 mb-4">
                <div>
                  <nav
                    class="isolate inline-flex -space-x-px shadow-sm"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span class="sr-only">Previous</span>
                      <p>Previous</p>
                    </a>

                    <a
                      href="/"
                      aria-current="page"
                      class="relative z-10 inline-flex items-center bg-sky-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span class="sr-only">Next</span>
                      <p>Next</p>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default list;
