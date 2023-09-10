import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const Currency = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["USD"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown className="w-full">
      <DropdownTrigger className="md:w-40 w-full border border-gray-200 px-2 py-1.5">
        <Button
          variant="bordered"
          className="capitalize text-gray-600 flex items-center justify-between outline-none rounded"
        >
          {selectedValue}
          <i className="bx bx-caret-down text-gray-600"></i>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection actions"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className="bg-white border border-gray-200 w-40 rounded"
      >
        <DropdownItem key="bdt" className="hover:bg-sky-600/60 text-gray-600">
          BDT
        </DropdownItem>
        <DropdownItem key="eur" className="hover:bg-sky-600/60 text-gray-600">
          EUR
        </DropdownItem>
        <DropdownItem key="usd" className="hover:bg-sky-600/60 text-gray-600">
          USD
        </DropdownItem>
        <DropdownItem key="gbp" className="hover:bg-sky-600/60 text-gray-600">
          GBP
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Currency;
