import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [BtnName, setBtnName] = useState("Login");
  console.log("header render");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              BtnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {BtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
