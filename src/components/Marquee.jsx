import React from "react";

function Marquee() {
  return (
    <div>
      <div className="bg-gray-300 hidden md:block">
        <div className="container m-auto px-20">
          <div className="grid grid-cols-3 py-1 justify-center items-center text-center">
            <Blue text={`secure `} text1={"payment through paypal"} />
            <Blue text={`free `} text1={"shipping on orders over 5,000 RS"} />
            <Blue text={`100%  `} text1={" authentic"} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Blue({ text, text1 }) {
  return (
    <>
      <h3 className="uppercase text-xs font-semibold text-gray-600">
        <span className="text-blue-500">{text}</span>
        {text1}
      </h3>
    </>
  );
}

export default Marquee;