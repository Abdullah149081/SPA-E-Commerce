import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:sticky top-0">
      <nav className="nav  justify-between items-center pl-4 lg:px-28 ">
        <a href="">
          {" "}
          <img src={logo} alt="" />
        </a>
        {/* a*4[href=$]{$}  */}
        <div>
          <div
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span className="pr-12 md:pr-0">
              {" "}
              {open ? (
                <XMarkIcon className="h-7 w-6 mt-7  text-btnSecondary md:hidden  cursor-pointer"></XMarkIcon>
              ) : (
                <Bars3Icon className="h-7 w-6 mt-7  text-btnPrimary  cursor-pointer md:hidden"></Bars3Icon>
              )}
            </span>
          </div>

          <div className={`flex flex-col  md:flex-row  md:block ${open ? "top-22 right-0  bg-[#1c2b35] py-6 pl-8 space-y-6 rounded-bl-lg absolute " : "hidden"}`}>
            <a href="/order">Order</a>
            <a href="/order-review">Order Review</a>
            <a href="/manage-Inventory">Manage Inventory</a>
            <a href="/login">Login</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
