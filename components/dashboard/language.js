import React, { useState, useRef, useEffect } from "react";

const Language = () => {
  const [isLan, setIsLan] = useState(false);
  const lan = useRef(null);

  useEffect(() => {
    const language = (event) => {
      if (!lan.current || !lan.current.contains(event.target)) {
        setIsLan(false);
      }
    };
    document.addEventListener("mousedown", language);
    return () => {
      document.addEventListener("mousedown", language);
    };
  }, [isLan]);

  return (
    <div>
      <div className="relative opt flex items-center me-7" ref={lan}>
        <div
          className="w-8 h-6 bg-black cursor-pointer"
          onClick={() => setIsLan(!isLan)}
        ></div>
        <i
          className="bx bx-chevron-down text-md md:text-gray-600 text-white cursor-pointer"
          onClick={() => setIsLan(!isLan)}
        ></i>
        <div
          className={`absolute z-20 bg-white text-black  top-12 -left-52 w-64 rounded-md shadow-2xl ${
            !isLan && "hidden"
          }`}
        >
          <div className="py-3 px-5 border-b border-gray-200">
            Select Language
          </div>
          <div>
            <div className="py-2 px-5 hover:bg-green-200">English</div>
            <div className="py-2 px-5 hover:bg-green-200">Pak</div>
            <div className="py-2 px-5 hover:bg-green-200">French</div>
            <div className="py-2 px-5 hover:bg-green-200">Spanish</div>
            <div className="py-2 px-5 hover:bg-green-200">Russian</div>
            <div className="py-2 px-5 hover:bg-green-200">Turkish</div>
            <div className="py-2 px-5 hover:bg-green-200">Chinese</div>
            <div className="py-2 px-5 hover:bg-green-200">Portuguese</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
