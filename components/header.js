import React from "react";
import Notify from "./dashboard/notify";
import Language from "./dashboard/language";
import Setting from "./dashboard/setting";

const Header = (props) => {
  return (
    <div className="flex justify-end w-full py-7">
      <i
        className={`bx bx-dots-horizontal-rounded text-white absolute z-20 top-8 right-10  cursor-pointer text-xl md:invisible visible`}
        onClick={() => props.change(!props.value)}
      ></i>
      {/* notification, language, setting */}
      <div className={`w-4/5 h-full px-6 flex items-center justify-between`}>
        <i className="bx bx-fullscreen cursor-pointer text-xl text-gray-600 invisible md:visible"></i>
        <div
          className={`flex items-center transition-all ease-in delay-200 justify-center md:z-10 md:visible ${
            props.value ? "absolute top-7 right-20 z-20" : "invisible"
          }`}
        >
          <Notify />
          <Language />
          <Setting />
        </div>
      </div>
    </div>
  );
};

export default Header;
