import React, { useState, useRef, useEffect } from "react";
import MenuList from "./dashboard/menu_list";

const Sidebar = (props) => {
  const [isToggle, setIsToggle] = useState(false);
  const ref = useRef(null);

  // logic of when click outside the box than close the menubar
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || !ref.current.contains(event.target)) {
        setIsToggle(false);
      }
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [isToggle]);

  return (
    <div className="h-screen text-white overflow-y-scroll absolute top-0 w-full">
      {/* control sidebar and option */}
      <div className="absolute top-0 left-0 w-full h-20 flex">
        {/* mobile view of sidebar */}
        <div
          className={`logo px-8 bg-sky-900 absolute top-0 left-0 md:z-40 z-10 md:w-1/5 w-full h-full`}
        >
          <p
            className={`transition-all ease-in delay-200  absolute md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-thin text-center top-1/2 ${
              props.value && "-top-16"
            }`}
          >
            roverCRM
          </p>
          <i
            className={`bx bx-menu text-xl transition-all ease-in delay-200 absolute md:top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer md:invisible top-1/2 ${
              props.value && "-top-16"
            }`}
            onClick={() => setIsToggle(true)}
          ></i>
        </div>
      </div>
      {/* Menubar List */}
      <div
        className={`sidebar overflow-y-scroll scroll-smooth h-full z-30 md:pt-28 pt-8 transition-all ease-in absolute md:left-0 md:top-0 top-0 bg-sky-900 md:w-1/5 w-1/2 ${
          !isToggle ? "-left-72" : "left-0"
        }`}
        ref={ref}
      >
        <div className="navigation">
          <p className="text-xs px-6">NAVIGATION</p>
        </div>
        <MenuList />
      </div>
    </div>
  );
};

export default Sidebar;
