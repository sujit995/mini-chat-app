import React from "react";
import Logo from "../../images/logo.png";
import User from '../../images/user.jpg';
import { FaSignOutAlt } from "react-icons/fa";
import { auth } from '../../lib/firebase';

export default function Header() {
  console.log(auth);
  return (
    <div className="chatscreen-header d-flex justify-content-between">
      <div className="logo">
        <img src={Logo} />
      </div>
      <div className="right_wrapper">
        {/* DP */}
        <div className="user_info">
          <img src={auth.currentUser?.photoURL} />
          <span className="username">{auth.currentUser?.displayName}</span>
        </div>
        {/* Dropdown */}
        <button
          type="button"
          className="btn btn-light dropdown-toggle dropdown-toggle-split"
          onClick={() => auth.signOut()}
        >
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
}
