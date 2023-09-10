import React, { useState, useRef, useEffect } from "react";
const Setting = () => {
  const [isSet, setIsSet] = useState(false);
  const set = useRef(null);
  useEffect(() => {
    const setting = (event) => {
      if (!set.current || !set.current.contains(event.target)) {
        setIsSet(false);
      }
    };
    document.addEventListener("mousedown", setting);
    return () => {
      document.addEventListener("mousedown", setting);
    };
  }, [isSet]);

  return (
    <div className="relative opt flex items-center" ref={set}>
      <i
        className="bx bx-cog text-xl md:text-gray-600 text-white cursor-pointer"
        onClick={() => setIsSet(!isSet)}
      ></i>
      <i
        className="bx bx-chevron-down text-md md:text-gray-600 text-white cursor-pointer"
        onClick={() => setIsSet(!isSet)}
      ></i>
      <div
        className={`absolute z-20 bg-white text-black top-12 -left-52 w-64 rounded-md shadow-2xl ${
          !isSet && "hidden"
        }`}
      >
        <div className="py-3 px-5 bg-sky-500 rounded-t-md text-white border-b border-gray-100 flex items-center justify-between">
          <p>Mr Admin</p>
          <i className="bx bx-log-out text-xl"></i>
        </div>
        <div>
          <div className="py-4 px-6 cursor-pointer hover:bg-green-200">
            Profile
          </div>
          <div className="py-4 px-6 cursor-pointer hover:bg-green-200">
            Signout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
