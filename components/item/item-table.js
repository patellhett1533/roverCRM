import React from "react";

const ItemTable = () => {
  return (
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
                Picture
              </th>
              <th colSpan={2} className="text-start">
                Name
              </th>
              <th className="text-start max-md:hidden">Category</th>
              <th className="text-start max-md:hidden">On Hand</th>
              <th className="text-start max-md:hidden">Purchase</th>
              <th className="text-start max-md:hidden">Retail</th>
              <th className="text-start max-md:hidden">Status</th>
              <th className="text-start max-md:hidden">Action</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="h-20 border-b border-gray-300 last:border-none odd:bg-blue-50">
              <td colSpan={2} className="text-start pl-5">
                phone
              </td>
              <td colSpan={2}>Apple Watch Series 4</td>
              <td className="max-md:hidden">Electronics</td>
              <td className="max-md:hidden">10.000</td>
              <td className="max-md:hidden">650.000</td>
              <td className="max-md:hidden">700.000</td>
              <td className="max-md:hidden">
                <div className="bg-gradient-to-r w-fit px-2 text-white rounded from-blue-400 to-green-400">
                  Active
                </div>
              </td>
              <td className="max-md:hidden">
                <i className="bx bx-edit border border-blue-500 text-blue-500 p-1 rounded me-2 cursor-pointer"></i>
                <i className="bx bx-trash border border-red-500 text-red-500 p-1 rounded cursor-pointer"></i>
              </td>
            </tr>
            <tr className="h-20 border-b border-gray-300 last:border-none odd:bg-blue-50">
              <td colSpan={2} className="text-start pl-5">
                phone
              </td>
              <td colSpan={2}>Apple Watch Series 4</td>
              <td className="max-md:hidden">Electronics</td>
              <td className="max-md:hidden">10.000</td>
              <td className="max-md:hidden">650.000</td>
              <td className="max-md:hidden">700.000</td>
              <td className="max-md:hidden">
                <div className="bg-gradient-to-r w-fit px-2 text-white rounded from-blue-400 to-green-400">
                  Active
                </div>
              </td>
              <td className="max-md:hidden">
                <i className="bx bx-edit border border-blue-500 text-blue-500 p-1 rounded me-2 cursor-pointer"></i>
                <i className="bx bx-trash border border-red-500 text-red-500 p-1 rounded cursor-pointer"></i>
              </td>
            </tr>
            <tr className="h-20 border-b border-gray-300 last:border-none odd:bg-blue-50">
              <td colSpan={2} className="text-start pl-5">
                phone
              </td>
              <td colSpan={2}>Apple Watch Series 4</td>
              <td className="max-md:hidden">Electronics</td>
              <td className="max-md:hidden">10.000</td>
              <td className="max-md:hidden">650.000</td>
              <td className="max-md:hidden">700.000</td>
              <td className="max-md:hidden">
                <div className="bg-gradient-to-r w-fit px-2 text-white rounded from-blue-400 to-green-400">
                  Active
                </div>
              </td>
              <td className="max-md:hidden">
                <i className="bx bx-edit border border-blue-500 text-blue-500 p-1 rounded me-2 cursor-pointer"></i>
                <i className="bx bx-trash border border-red-500 text-red-500 p-1 rounded cursor-pointer"></i>
              </td>
            </tr>
            <tr className="h-20 border-b border-gray-300 last:border-none odd:bg-cyan-50">
              <td colSpan={2} className="text-start pl-5">
                phone
              </td>
              <td colSpan={2}>Apple Watch Series 4</td>
              <td className="max-md:hidden">Electronics</td>
              <td className="max-md:hidden">10.000</td>
              <td className="max-md:hidden">650.000</td>
              <td className="max-md:hidden">700.000</td>
              <td className="max-md:hidden">
                <div className="bg-gradient-to-r w-fit px-2 text-white rounded from-blue-400 to-green-400">
                  Active
                </div>
              </td>
              <td className="max-md:hidden">
                <i className="bx bx-edit border border-blue-500 text-blue-500 p-1 rounded me-2 cursor-pointer"></i>
                <i className="bx bx-trash border border-red-500 text-red-500 p-1 rounded cursor-pointer"></i>
              </td>
            </tr>
            <tr className="h-20 border-b border-gray-300 last:border-none odd:bg-cyan-50">
              <td colSpan={2} className="text-start pl-5">
                phone
              </td>
              <td colSpan={2}>Apple Watch Series 4</td>
              <td className="max-md:hidden">Electronics</td>
              <td className="max-md:hidden">10.000</td>
              <td className="max-md:hidden">650.000</td>
              <td className="max-md:hidden">700.000</td>
              <td className="max-md:hidden">
                <div className="bg-gradient-to-r w-fit px-2 text-white rounded from-blue-400 to-green-400">
                  Active
                </div>
              </td>
              <td className="max-md:hidden">
                <i className="bx bx-edit border border-blue-500 text-blue-500 p-1 rounded me-2 cursor-pointer"></i>
                <i className="bx bx-trash border border-red-500 text-red-500 p-1 rounded cursor-pointer"></i>
              </td>
            </tr>
            <tr className="h-20 border-b border-gray-300 last:border-none odd:bg-cyan-50">
              <td colSpan={2} className="text-start pl-5">
                phone
              </td>
              <td colSpan={2}>Apple Watch Series 4</td>
              <td className="max-md:hidden">Electronics</td>
              <td className="max-md:hidden">10.000</td>
              <td className="max-md:hidden">650.000</td>
              <td className="max-md:hidden">700.000</td>
              <td className="max-md:hidden">
                <div className="bg-gradient-to-r w-fit px-2 text-white rounded from-blue-400 to-green-400">
                  Active
                </div>
              </td>
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
          <p>Showing 1 to 23 of 23 entries</p>
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
  );
};

export default ItemTable;
