import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header justify-between items-center md:px-28 ">
        <a href="">
          {" "}
          <img src={logo} alt="" />
        </a>
        {/* a*4[href=$]{$}  */}
        <div>
          <a href="/order">Order</a>
          <a href="/order-review">Order Review</a>
          <a href="/manage-Inventory">Manage Inventory</a>
          <a href="/login">Login</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
