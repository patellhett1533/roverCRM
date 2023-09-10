import React from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";

const DataPicker = () => {
  return (
    <DateRangePicker
      initialSettings={{ startDate: "01/01/2020", endDate: "01/15/2020" }}
    >
      <div className="flex items-center justify-between rounded border border-gray-200 px-2 py-1.5 md:w-1/3 w-full mb-4 md:mb-0">
        <div className="flex items-center">
          <i className="bx bxs-calendar-alt pe-2 text-gray-600"></i>
          <p className="tracking-wide select-none text-gray-600">
            Pich a date range
          </p>
        </div>
        <i className="bx bx-caret-down text-gray-600"></i>
      </div>
    </DateRangePicker>
  );
};

export default DataPicker;
