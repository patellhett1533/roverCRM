import ItemTable from "@/components/item/item-table";
import React from "react";

const item = () => {
  return (
    <div className="absolute md:w-4/5 w-full right-0 h-screen top-0 pt-20 overflow-y-scroll px-5 drop-shadow-xl">
      <div className="text-black bg-transparent w-full">
        <div className="bg-stone-50 drop-shadow-2xl mb-12">
          <div className="title border-b border-gray-200 py-5">
            <h3 className="text-lg border-l-4 border-sky-500 pl-5">Items</h3>
          </div>
          <div className="new-item px-5 py-4">
            <button className="flex items-center border border-sky-500 text-sky-500 px-2 py-1 text-small rounded transition-all ease-in-out delay-200 hover:bg-sky-500 hover:text-white">
              <i className="bx bx-plus pe-2 font-semibold text-lg"></i>
              <p>New Items</p>
            </button>
          </div>
          <div>
            <ItemTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default item;
