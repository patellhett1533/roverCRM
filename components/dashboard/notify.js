import React, { useState, useRef, useEffect } from "react";

const Notify = () => {
  const [isNotify, setIsNotify] = useState(false);
  const notify = useRef(null);

  useEffect(() => {
    const notification = (event) => {
      if (!notify.current || !notify.current.contains(event.target)) {
        setIsNotify(false);
      }
    };
    document.addEventListener("mousedown", notification);
    return () => {
      document.addEventListener("mousedown", notification);
    };
  }, [isNotify]);

  return (
    <div className="relative opt flex items-center me-7" ref={notify}>
      <i
        className="bx bx-bell text-xl md:text-gray-600 text-white cursor-pointer"
        onClick={() => setIsNotify(!isNotify)}
      ></i>
      <i
        className="bx bx-chevron-down text-md md:text-gray-600 text-white cursor-pointer"
        onClick={() => setIsNotify(!isNotify)}
      ></i>
      <div
        className={`absolute bg-white z-30 text-black top-12 md:-left-52 -left-36 md:w-64 rounded-md shadow-2xl ${
          !isNotify && "hidden"
        }`}
      >
        <div className="py-3 px-5 border-b border-gray-200">
          Item Quantity Alert
        </div>
        <div>
          <div className="py-2 px-5 hover:bg-green-200">English</div>
          <div className="py-2 px-5 hover:bg-green-200">Pak</div>
          <div className="py-2 px-5 hover:bg-green-200">French</div>
          <div className="py-2 px-5 hover:bg-green-200">Spanish</div>
          <div className="py-2 px-5 hover:bg-green-200">Russian</div>
          <div className="py-2 px-5 hover:bg-green-200">Turkish</div>
        </div>
      </div>
    </div>
  );
};

export default Notify;
