import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { userContext } from "../../provider/AuthProvider";
import ActiveLink from "../ActiveLink";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(userContext);
  const handlerLogOut = () => {
    logOut();
  };

  return (
    <div className="md:sticky top-0 z-10">
      <nav className="nav  justify-between items-center pl-4 lg:px-28  ">
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
        {/* a*4[href=$]{$}  */}
        <div>
          <div
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span className="pr-12 md:pr-0">
              {open ? (
                <XMarkIcon className="h-7 w-6 mt-7  text-btnSecondary md:hidden  cursor-pointer"></XMarkIcon>
              ) : (
                <Bars3Icon className="h-7 w-6 mt-7  text-btnPrimary  cursor-pointer md:hidden"></Bars3Icon>
              )}
            </span>
          </div>

          <div
            className={`flex flex-col text-white md:static font-semibold md:space-x-10  md:flex-row  md:block ${
              open ? "top-22 right-0  bg-[#1c2b35] py-6 pl-12 pr-6 space-y-6 rounded-bl-lg absolute z-10" : "hidden"
            }`}
          >
            {user && <span className="font-medium ">{user.email}</span>}
            <ActiveLink to="/orders">Orders</ActiveLink>
            <ActiveLink to="/order-review">Order Review</ActiveLink>
            <ActiveLink to="/manage-Inventory">Manage Inventory</ActiveLink>
            {user ? (
              <button onClick={handlerLogOut} className="text-left hover:text-btnPrimary" type="button">
                log out
              </button>
            ) : (
              <ActiveLink to="/login">Login</ActiveLink>
            )}
            {!user && <ActiveLink to="/sign-up">Sign up</ActiveLink>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
