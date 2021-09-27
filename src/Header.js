import React from "react";
import "./Header.css";
import { FiMenu, FiSearch, FiSettings } from "react-icons/fi";
import { IoMdOptions } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import { MdApps } from "react-icons/md";
import { Avatar, IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="Header">
      <div className="Header__left">
        <IconButton>
          <FiMenu className="Icon" />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="Gmail"
        />
      </div>
      <div className="Header__middle">
        <IconButton>
          <FiSearch className="Icon" />
        </IconButton>
        <input
          className="Header__middle__input"
          placeholder="Search mail"
        ></input>
        <IconButton>
          <IoMdOptions className="Icon" />
        </IconButton>
      </div>
      <div className="Header__right">
        <IconButton>
          <BiHelpCircle className="Icon" />
        </IconButton>
        <IconButton>
          <FiSettings className="Icon" />
        </IconButton>
        <IconButton>
          <MdApps className="Icon" />
        </IconButton>
        <IconButton>
          <Avatar
            className="Header__right-avatar"
            src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
            alt="avatar"
          ></Avatar>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
