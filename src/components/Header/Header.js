import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import user from "../../images/user.png";
import "./Header.scss"

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">PAPPZ-FLIX</div>
      </Link>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
      
    </div>
  );
};
