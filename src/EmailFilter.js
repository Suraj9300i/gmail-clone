import React, { useState } from "react";
import "./EmailFilter.css";
import { MdInbox } from "react-icons/md";
import { BsFillPeopleFill, BsFillTagFill } from "react-icons/bs";

const EmailFilter = () => {
  const [filter, setFilter] = useState("Primary");
  return (
    <div className="EmailFilter">
      <div
        onClick={(e) => {
          setFilter("Primary");
        }}
        className={`EmailFilter__type ${
          filter === "Primary" && "EmailFilter__type-active"
        }`}
      >
        <MdInbox />
        <p>Primary</p>
      </div>
      <div
        onClick={(e) => {
          setFilter("Social");
        }}
        className={`EmailFilter__type ${
          filter === "Social" && "EmailFilter__type-active"
        }`}
      >
        <BsFillPeopleFill />
        <p>Social</p>
      </div>
      <div
        onClick={(e) => {
          setFilter("Promotion");
        }}
        className={`EmailFilter__type ${
          filter === "Promotion" && "EmailFilter__type-active"
        }`}
      >
        <BsFillTagFill />
        <p>Promotion</p>
      </div>
    </div>
  );
};

export default EmailFilter;
