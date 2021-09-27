import { getThemeProps } from "@material-ui/styles";
import React, { Children } from "react";
import "./SidebarElement.css";

function SidebarElement(props) {
  return (
    <div className={`SidebarElement ${props.active && "active"}`}>
      {props.children}
      <p className="SidebarElement__title">{props.title}</p>
      <p className="SidebarElement__value">{props.value}</p>
    </div>
  );
}

export default SidebarElement;
