import React from "react";
import Link from "next/link";

const TableData = (props) => {
  return (
    <>
      <div
        className={`project-summary ${props.role !== "project" && "hidden"}`}
      >
        <h3 className="px-7 py-3 text-lg font-medium border-b border-gray-300">
          Project Summary
        </h3>
        <div className="flex md:flex-row flex-col items-center justify-between px-5 py-3">
          <div className="w-full flex items-center justify-between px-5 md:border-e border-gray-300 py-2">
            <p>Not Started</p>
            <Link href="#" className="text-green-400">
              1
            </Link>
          </div>
          <div className="w-full flex items-center justify-between px-5 md:border-e border-gray-300 py-2">
            <p>In Progress</p>
            <Link href="#" className="text-green-400">
              2
            </Link>
          </div>
          <div className="w-full flex items-center justify-between px-5 md:border-e border-gray-300 py-2">
            <p>On Hold</p>
            <Link href="#" className="text-green-400">
              1
            </Link>
          </div>
          <div className="w-full flex items-center justify-between px-5 py-2">
            <p>Finished</p>
            <Link href="#" className="text-green-400">
              1
            </Link>
          </div>
        </div>
        <table class="table-fixed w-full text-gray-600">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-3 text-start font-medium">Project Name</th>
              <th className="py-3 px-3 text-start font-medium">Start Date</th>
              <th className="py-3 px-3 text-start font-medium">Deadline</th>
              <th className="py-3 px-3 text-start font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 last:border-transparent">
              <td className="py-3 px-3 text-start">Bill Master</td>
              <td className="py-3 px-3 text-start">2023-08-12</td>
              <td className="py-3 px-3 text-start">2023-08-18</td>
              <td className="py-3 px-3 text-start">In Progress</td>
            </tr>
            <tr className="border-b border-gray-200 last:border-transparent">
              <td className="py-3 px-3 text-start">Inventory With POS</td>
              <td className="py-3 px-3 text-start">2023-08-12</td>
              <td className="py-3 px-3 text-start">2023-08-16</td>
              <td className="py-3 px-3 text-start">Not Started</td>
            </tr>
            <tr className="border-b border-gray-200 last:border-transparent">
              <td className="py-3 px-3 text-start">vRent</td>
              <td className="py-3 px-3 text-start">2023-08-12</td>
              <td className="py-3 px-3 text-start">2023-08-17</td>
              <td className="py-3 px-3 text-start">Finished</td>
            </tr>
            <tr className="border-b border-gray-200 last:border-transparent">
              <td className="py-3 px-3 text-start">Pay Money</td>
              <td className="py-3 px-3 text-start">2023-08-12</td>
              <td className="py-3 px-3 text-start">2020-10-31</td>
              <td className="py-3 px-3 text-start">On Hold</td>
            </tr>
            <tr className="border-b border-gray-200 last:border-transparent">
              <td className="py-3 px-3 text-start">CRM-Expert</td>
              <td className="py-3 px-3 text-start">2023-08-12</td>
              <td className="py-3 px-3 text-start"></td>
              <td className="py-3 px-3 text-start">In Progess</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={`task-summary ${props.role !== "task" && "hidden"}`}>
        <h3 className="px-7 py-3 text-lg font-medium border-b border-gray-300">
          Task Summary
        </h3>
        <div className="flex md:flex-row flex-col items-center justify-between px-5 py-3">
          <div className="w-full flex items-center justify-between px-5 md:border-e border-gray-300 py-2">
            <p>Not Started</p>
            <Link href="#" className="text-green-400">
              1
            </Link>
          </div>
          <div className="w-full flex items-center justify-between px-5 md:border-e border-gray-300 py-2">
            <p>In Progress</p>
            <Link href="#" className="text-green-400">
              2
            </Link>
          </div>
          <div className="w-full flex items-center justify-between px-5 md:border-e border-gray-300 py-2">
            <p>On Hold</p>
            <Link href="#" className="text-green-400">
              1
            </Link>
          </div>
          <div className="w-full flex items-center justify-between px-5 py-2">
            <p>Finished</p>
            <Link href="#" className="text-green-400">
              1
            </Link>
          </div>
        </div>
        <table class="table-auto w-full text-gray-600">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-3 text-start font-medium">Task Name</th>
              <th className="py-3 px-3 text-start font-medium">Start Date</th>
              <th className="py-3 px-3 text-start font-medium">Due Date</th>
              <th className="py-3 px-3 text-start font-medium">Priority</th>
              <th className="py-3 px-3 text-start font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 last:border-transparent">
              <td className="py-3 px-3 text-start">
                Tax and discount calculation for invoice, quoation, purchase and
                POS
              </td>
              <td className="py-3 px-3 text-start">2023-08-12</td>
              <td className="py-3 px-3 text-start">2023-08-16</td>
              <td className="py-3 px-3 text-start">High</td>
              <td className="py-3 px-3 text-start">Not Started</td>
            </tr>
            <tr className="border-b border-gray-200 last:border-transparent">
              <td className="py-3 px-3 text-start">
                Inactive item categories are showing in item edit category drop
                down option.
              </td>
              <td className="py-3 px-3 text-start">2023-08-12</td>
              <td className="py-3 px-3 text-start"></td>
              <td className="py-3 px-3 text-start">High</td>
              <td className="py-3 px-3 text-start">Not Started</td>
            </tr>
            <tr className="border-b border-gray-200 last:border-transparent">
              <td className="py-3 px-3 text-start">
                Improvement - Removal of PerfectMoney Payment Method from
                everywhere
              </td>
              <td className="py-3 px-3 text-start">2023-08-12</td>
              <td className="py-3 px-3 text-start"></td>
              <td className="py-3 px-3 text-start">Medium</td>
              <td className="py-3 px-3 text-start">Not Started</td>
            </tr>
            <tr className="border-b border-gray-200 last:border-transparent">
              <td className="py-3 px-3 text-start">
                Bug Fix - Send money confirm incorrect amount and total display
              </td>
              <td className="py-3 px-3 text-start">2023-08-12</td>
              <td className="py-3 px-3 text-start"></td>
              <td className="py-3 px-3 text-start">High</td>
              <td className="py-3 px-3 text-start">Not Started</td>
            </tr>
            <tr className="border-b border-gray-200 last:border-transparent">
              <td className="py-3 px-3 text-start">
                New feature - selection of fiat currency wallets during user
                registration
              </td>
              <td className="py-3 px-3 text-start">2023-08-12</td>
              <td className="py-3 px-3 text-start"></td>
              <td className="py-3 px-3 text-start">Low</td>
              <td className="py-3 px-3 text-start">Not Started</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={`ticket-summary ${props.role !== "ticket" && "hidden"}`}>
        <h3 className="px-7 py-3 text-lg font-medium border-b border-gray-300">
          Ticket Summary
        </h3>
        <div className="flex md:flex-row flex-col items-center justify-between px-5 py-3">
          <div className="w-full flex items-center justify-between px-5 md:border-e border-gray-300 py-2">
            <p>Not Started</p>
            <Link href="#" className="text-green-400">
              1
            </Link>
          </div>
          <div className="w-full flex items-center justify-between px-5 md:border-e border-gray-300 py-2">
            <p>In Progress</p>
            <Link href="#" className="text-green-400">
              2
            </Link>
          </div>
          <div className="w-full flex items-center justify-between px-5 md:border-e border-gray-300 py-2">
            <p>On Hold</p>
            <Link href="#" className="text-green-400">
              1
            </Link>
          </div>
          <div className="w-full flex items-center justify-between px-5 py-2">
            <p>Finished</p>
            <Link href="#" className="text-green-400">
              1
            </Link>
          </div>
        </div>
        <table class="table-auto w-full text-gray-600">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-3 text-start font-medium">
                Ticket Subject
              </th>
              <th className="py-3 px-3 text-start font-medium">Priority</th>
              <th className="py-3 px-3 text-start font-medium">Status</th>
              <th className="py-3 px-3 text-start font-medium">Last Reply</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 last:border-transparent">
              <td className="py-3 px-3 text-start">Product Detail</td>
              <td className="py-3 px-3 text-start">High</td>
              <td className="py-3 px-3 text-start">Open</td>
              <td className="py-3 px-3 text-start">2023-08-12 08:59:02</td>
            </tr>
            <tr className="border-b border-gray-200 last:border-transparent">
              <td className="py-3 px-3 text-start">Purchase</td>
              <td className="py-3 px-3 text-start">Medium</td>
              <td className="py-3 px-3 text-start">Open</td>
              <td className="py-3 px-3 text-start">2023-08-12 08:59:02</td>
            </tr>
            <tr className="border-b border-gray-200 last:border-transparent">
              <td className="py-3 px-3 text-start">Setup the environment</td>
              <td className="py-3 px-3 text-start">High</td>
              <td className="py-3 px-3 text-start">Open</td>
              <td className="py-3 px-3 text-start">2023-08-12 08:59:02</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableData;
