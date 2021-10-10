import React, { useState } from "react";
import "./Sidebar.css";
import SidebarElement from "./SidebarElement";
import { MdInbox, MdDrafts, MdSend } from "react-icons/md";
import { AiFillStar, AiFillTag } from "react-icons/ai";
import { FaRegKeyboard } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import { openComposeCreater } from "./redux/action";
import { useDispatch } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();
  let [active, setactive] = useState("Inbox");
  return (
    <div className="Sidebar">
      <div
        className="Sidebar__compose"
        onClick={(e) => {
          dispatch(openComposeCreater());
        }}
      >
        <img
          src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
          alt="Gmail"
        />
        <p>Compose</p>
      </div>
      <div className="Sidebar__buttons">
        <SidebarElement
          customClickEvent={(e) => {
            setactive("Inbox");
          }}
          title={"Inbox"}
          value={30}
          active={active === "Inbox"}
        >
          <MdInbox className="icon" />
        </SidebarElement>
        <SidebarElement
          customClickEvent={(e) => {
            setactive("Starred");
          }}
          title={"Starred"}
          value={27}
          active={active === "Starred"}
        >
          <AiFillStar className="icon" />
        </SidebarElement>
        <SidebarElement
          customClickEvent={(e) => {
            setactive("Snoozed");
          }}
          title={"Snoozed"}
          value={15}
          active={active === "Snoozed"}
        >
          <IoTime className="icon" />
        </SidebarElement>
        <SidebarElement
          customClickEvent={(e) => {
            setactive("Sent");
          }}
          title={"Sent"}
          value={53}
          active={active === "Sent"}
        >
          <MdSend className="icon" />
        </SidebarElement>
        <SidebarElement
          customClickEvent={(e) => {
            setactive("Drafts");
          }}
          title={"Drafts"}
          value={24}
          active={active === "Drafts"}
        >
          <MdDrafts className="icon" />
        </SidebarElement>
        <SidebarElement
          customClickEvent={(e) => {
            setactive("Categories");
          }}
          title={"Categories"}
          value={12}
          active={active === "Categories"}
        >
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
