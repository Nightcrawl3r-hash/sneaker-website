import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="container m-auto pb-6">
      <hr className="py-4" />
      <div className="grid   md:grid-cols-5 gap-2">
        <div className="text-left">
          <Linkz text={`Shop`} />
          <div className="flex flex-col gap-y-2">
            <Sublink text={`Men's sneakers`} />
            <Sublink text={`Kid's Sneakers`} />
            <Sublink text={`Women's Sneakers`} />
            <Sublink text={`Sale Items`} />
          </div>
        </div>

        <div className="text-left">
          <Linkz text={"About us"} />
          <div className="flex flex-col gap-y-2">
            <Sublink text={`Our Team`} />
            <Sublink text={`Our Story`} />
            <Sublink text={`Press`} />
          </div>
        </div>

        <div className="text-left">
          <Linkz text={`customer service`} />
          <div className="flex flex-col gap-y-2">
            <Sublink text={"shipping & delivery"} />
            <Sublink text={"Return & exchange"} />
            <Sublink text={`FAQ's`} />
            <Sublink text={"Contact us"} />
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="flex flex-row gap-4 justify-end">
            <a href="#">
              {" "}
              <FaFacebook
                className="border  border-gray-700 p-1 rounded-full hover:shadow-2xl text-gray-700 hover:text-orange-600 transition-all ease-in-out"
                size={36}
              />
            </a>

            <a href="#">
              <FaTwitter
                className="border  border-gray-700 p-1 rounded-full hover:shadow-2xl text-gray-700 hover:text-orange-600 transition-all ease-in-out"
                size={36}
              />
            </a>

            <a href="#">
              {" "}
              <FaInstagram
                className="border  border-gray-700 p-1 rounded-full hover:shadow-2xl text-gray-700 hover:text-orange-600 transition-all ease-in-out"
                size={36}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
function Sublink({ text }) {
  return <a href="#" className="text-xs text-gray-700 capitalize">{text}</a >;
}

function Linkz({ text }) {
  return (
    <>
      <h2 className="text-sm font-semibold text-gray-800 py-2 uppercase">
        {text}
      </h2>
    </>
  );
}
export default Footer;