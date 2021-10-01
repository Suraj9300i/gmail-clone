import React from "react";
import "./SidebarElement.css";

function SidebarElement(props) {
  return (
    <div
      className={`SidebarElement ${props.active && "active"}`}
      onClick={props.customClickEvent}
    >
      {props.children}
      <p className="SidebarElement__title">{props.title}</p>
      <p className="SidebarElement__value">{props.value}</p>
    </div>
  );
}

export default SidebarElement;
