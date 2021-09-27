import { IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import SidebarElement from "./SidebarElement";
import { MdInbox, MdDrafts, MdSend } from "react-icons/md";
import { AiFillStar, AiFillTag } from "react-icons/ai";
import { FaRegKeyboard } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Sidebar__compose">
        <img
          src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
          alt="Gmail"
        />
        <p>Compose</p>
      </div>
      <div className="Sidebar__buttons">
        <SidebarElement title={"Inbox"} value={30} active={true}>
          <MdInbox className="icon active" />
        </SidebarElement>
        <SidebarElement title={"Starred"} value={27}>
          <AiFillStar className="icon" />
        </SidebarElement>
        <SidebarElement title={"Snoozed"} value={15}>
          <IoTime className="icon" />
        </SidebarElement>
        <SidebarElement title={"Sent"} value={53}>
          <MdSend className="icon" />
        </SidebarElement>
        <SidebarElement title={"Drafts"} value={24}>
          <MdDrafts className="icon" />
        </SidebarElement>
        <SidebarElement title={"Categories"} value={12}>
          <AiFillTag className="icon" />
        </SidebarElement>
      </div>
      <div className="Sidebar__meet">
        <h1>Meet</h1>
        <SidebarElement title={"New Meeting"}>
          <BsFillCameraVideoFill className="icon" />
        </SidebarElement>
        <SidebarElement title={"Join meeting"}>
          <FaRegKeyboard className="icon" />
        </SidebarElement>
      </div>
      <div className="Sidebar__hangout"></div>
    </div>
  );
}

export default Sidebar;
