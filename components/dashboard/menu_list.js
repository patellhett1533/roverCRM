import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuList = () => {
  const [relation, setRelation] = useState(false);
  const [sale, setSale] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const [bank, setBank] = useState(false);
  const [report, setReport] = useState(false);
  const [setting, setSetting] = useState(false);

  const router = useRouter();

  // logic for hide and show submenu in sidebar
  const toggleRelation = () => {
    setRelation(relation ? false : true);
  };
  const toggleSale = () => {
    setSale(sale ? false : true);
  };
  const togglePurchase = () => {
    setPurchase(purchase ? false : true);
  };
  const toggleBank = () => {
    setBank(bank ? false : true);
  };
  const toggleReport = () => {
    setReport(report ? false : true);
  };
  const toggleSetting = () => {
    setSetting(setting ? false : true);
  };

  return (
    <ul>
      {/* dashboard */}
      <Link
        href="/dashboard"
        className={
          "px-6 py-4 flex items-center hover:border-white" +
          `${
            router.pathname === "/dashboard"
              ? "bg-black/20 border-l-4 border-sky-500"
              : "bg-transparent"
          }`
        }
      >
        <i className="bx bx-home-alt text-xl me-4"></i>
        Dashboard
      </Link>
      {/* relationship */}
      <div
        className={"px-6 py-4 flex items-center cursor-pointer"}
        onClick={toggleRelation}
      >
        <i className="bx bx-group text-xl me-4"></i>
        Relationship
        <i
          className={`bx ml-8 text-xl ${
            relation ? "bx-chevron-down" : "bx-chevron-right"
          }`}
        ></i>
      </div>
      <div
        className={`flex-col transition-all ease-in-out delay-100 ${
          !relation ? "hidden" : "flex"
        }`}
      >
        <Link
          href="/customer/list"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/customer/list" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Customers
        </Link>
        <Link
          href="/supliers"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/supliers" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Supliers
        </Link>
        <Link
          href="/users"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/users" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Team Member
        </Link>
      </div>
      {/* item */}
      <Link
        href="/items"
        className={
          "px-6 py-4 flex items-center" +
          `${
            router.pathname === "/items" &&
            "bg-black/20 border-l-4 border-transparent border-white"
          }`
        }
      >
        <i className="bx bx-layer text-xl me-4"></i>
        Items
      </Link>
      {/* pos */}
      <Link
        href="/pos"
        className={
          "px-6 py-4 flex items-center" +
          `${
            router.pathname === "/pos" &&
            "bg-black/20 border-l-4 border-transparent border-white"
          }`
        }
      >
        <i className="bx bx-shopping-bag text-xl me-4"></i>
        Point Of Sale
      </Link>
      {/* sales */}
      <div
        className={"px-6 py-4 flex items-center cursor-pointer"}
        onClick={toggleSale}
      >
        <i className="bx bx-cube text-xl me-4"></i>
        Sales
        <i
          className={`bx ml-8 text-xl ${
            sale ? "bx-chevron-down" : "bx-chevron-right"
          }`}
        ></i>
      </div>
      <div
        className={`flex-col transition-all ease-in-out delay-100 ${
          !sale ? "hidden" : "flex"
        }`}
      >
        <Link
          href="/order/list"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/order/list" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Quotations
        </Link>
        <Link
          href="/invoice/list"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/invoice/list" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Invoices
        </Link>
        <Link
          href="/payment/list"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/payment/list" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Payment
        </Link>
      </div>
      {/* purchase/stocks */}
      <div
        className={"px-6 py-4 flex items-center cursor-pointer"}
        onClick={togglePurchase}
      >
        <i className="bx bx-cart-alt text-xl me-4"></i>
        Purchase/Stocks
        <i
          className={`bx ml-8 text-xl ${
            purchase ? "bx-chevron-down" : "bx-chevron-right"
          }`}
        ></i>
      </div>
      <div
        className={`flex-col transition-all ease-in-out delay-100 ${
          !purchase ? "hidden" : "flex"
        }`}
      >
        <Link
          href="/purchase/list"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/purchase/list" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Purchases
        </Link>
        <Link
          href="/purchase_receive/list"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/purchase_receive/list" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Purchases Receive
        </Link>
        <Link
          href="/purchase_payment/list"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/purchase_payment/list" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Payments
        </Link>
        <Link
          href="/stock_transfer/list"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/stock_transfer/list" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Stock Transfer
        </Link>
        <Link
          href="/adjustment/list"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/adjustment/list" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Stock Addjustment
        </Link>
      </div>
      {/* banking & transaction */}
      <div
        className={"w-full px-6 py-4 flex items-center cursor-pointer"}
        onClick={toggleBank}
      >
        <i className="bx bxs-bank text-xl me-4"></i>
        Banking & Transaction
        <i
          className={`bx ml-1 text-xl ${
            bank ? "bx-chevron-down" : "bx-chevron-right"
          }`}
        ></i>
      </div>
      <div
        className={`flex-col transition-all ease-in-out delay-100 ${
          !bank ? "hidden" : "flex"
        }`}
      >
        <Link
          href="/bank/list"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/bank/list" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Bank Account
        </Link>
        <Link
          href="/account/list"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/account/list" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Bank Account Deposite
        </Link>
        <Link
          href="/transfer/list"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/transfer/list" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Bank Account Transfer
        </Link>
        <Link
          href="/transaction/list"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/transaction/list" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Transaction
        </Link>
      </div>
      {/* projacts */}
      <Link
        href="/project/list"
        className={
          "px-6 py-4 flex items-center" +
          `${
            router.pathname === "/project/list" &&
            "bg-black/20 border-l-4 border-transparent border-white"
          }`
        }
      >
        <i className="bx bxs-droplet-half text-xl me-4"></i>
        Projects
      </Link>
      {/* task */}
      <Link
        href="/task/list"
        className={
          "px-6 py-4 flex items-center" +
          `${
            router.pathname === "/task/list" &&
            "bg-black/20 border-l-4 border-transparent border-white"
          }`
        }
      >
        <i className="bx bx-paste text-xl me-4"></i>
        Task
      </Link>
      {/* timesheet */}
      <Link
        href="/time-sheet/list"
        className={
          "px-6 py-4 flex items-center" +
          `${
            router.pathname === "/time-sheet/list" &&
            "bg-black/20 border-l-4 border-transparent border-white"
          }`
        }
      >
        <i className="bx bx-calendar-event text-xl me-4"></i>
        Timesheets
      </Link>
      {/* tickets */}
      <Link
        href="/ticket/list"
        className={
          "px-6 py-4 flex items-center" +
          `${
            router.pathname === "/ticket/list" &&
            "bg-black/20 border-l-4 border-transparent border-white"
          }`
        }
      >
        <i className="bx bxs-file-plus text-xl me-4"></i>
        Tickets
      </Link>
      {/* calender */}
      <Link
        href="/calender"
        className={
          "px-6 py-4 flex items-center" +
          `${
            router.pathname === "/calender" &&
            "bg-black/20 border-l-4 border-transparent border-white"
          }`
        }
      >
        <i className="bx bx-calendar text-xl me-4"></i>
        Calender
      </Link>
      {/* expenses */}
      <Link
        href="/expense/list"
        className={
          "px-6 py-4 flex items-center" +
          `${
            router.pathname === "/expense/list" &&
            "bg-black/20 border-l-4 border-transparent border-white"
          }`
        }
      >
        <i className="bx bxs-donate-heart text-xl me-4"></i>
        Expenses
      </Link>
      {/* leads */}
      <Link
        href="/lead/list"
        className={
          "px-6 py-4 flex items-center" +
          `${
            router.pathname === "/lead/list" &&
            "bg-black/20 border-l-4 border-transparent border-white"
          }`
        }
      >
        <i className="bx bx-phone text-xl me-4"></i>
        Leads
      </Link>
      {/* knowledge based */}
      <Link
        href="/knowledge-base"
        className={
          "px-6 py-4 flex items-center" +
          `${
            router.pathname === "/knowledge-base" &&
            "bg-black/20 border-l-4 border-transparent border-white"
          }`
        }
      >
        <i className="bx bxs-book-alt text-xl me-4"></i>
        Knowledge Base
      </Link>
      {/* report */}
      <div
        className={"w-full px-6 py-4 flex items-center cursor-pointer"}
        onClick={toggleReport}
      >
        <i className="bx bxs-bar-chart-alt-2 text-xl me-4"></i>
        Report
        <i
          className={`bx ml-8 text-xl ${
            report ? "bx-chevron-down" : "bx-chevron-right"
          }`}
        ></i>
      </div>
      <div
        className={`flex-col transition-all ease-in-out delay-100 ${
          !report ? "hidden" : "flex"
        }`}
      >
        <Link
          href="/report/inventory-stock-on-hand"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/report/inventory-stock-on-hand" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Inventory Stock On Hand
        </Link>
        <Link
          href="/report/sales-report"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/report/sales-report" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Sales Report
        </Link>
        <Link
          href="/report/purchase-report"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/report/purchase-report" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Purchases Report
        </Link>
        <Link
          href="/transaction/expense-report"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/transaction/expense-report" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Expense Report
        </Link>
        <Link
          href="/transaction/income-report"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/transaction/income-report" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Income Report
        </Link>
        <Link
          href="/transaction/income-vs-expense"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/transaction/income-vs-expense" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Income vs Expense
        </Link>
        <Link
          href="/report/lead-report"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/report/lead-report" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Leads Report
        </Link>
      </div>
      {/* setting */}
      <div
        className={"w-full px-6 py-4 flex items-center cursor-pointer"}
        onClick={toggleSetting}
      >
        <i className="bx bx-cog text-xl me-4"></i>
        Settings
        <i
          className={`bx ml-8 text-xl ${
            setting ? "bx-chevron-down" : "bx-chevron-right"
          }`}
        ></i>
      </div>
      <div
        className={`flex-col transition-all ease-in-out delay-100 ${
          !setting ? "hidden" : "flex"
        }`}
      >
        <Link
          href="/company/setting"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/company/setting" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Company Detail
        </Link>
        <Link
          href="/item-category"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/item-category" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          General Setting
        </Link>
        <Link
          href="/tax"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/tax" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Finance
        </Link>
        <Link
          href="/customer-invoice-temp/5"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/customer-invoice-temp/5" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Email Templates
        </Link>
        <Link
          href="/customer-sms-temp/5"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/customer-sms-temp/5" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          SMS Templates
        </Link>
        <Link
          href="/setting-preference"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/setting-preference" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Preference
        </Link>
        <Link
          href="/barcode/create"
          className={
            "px-10 py-2 flex items-center" +
            `${
              router.pathname === "/barcode/create" &&
              "bg-black/20 border-l-4 border-transparent border-white"
            }`
          }
        >
          Print Barcode/Level
        </Link>
      </div>
    </ul>
  );
};

export default MenuList;
