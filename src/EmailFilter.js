import React from "react";
import "./EmailFilter.css";
import { MdInbox } from "react-icons/md";
import { BsFillPeopleFill, BsFillTagFill } from "react-icons/bs";

const EmailFilter = () => {
  return (
    <div className="EmailFilter">
      <div className="EmailFilter__type EmailFilter__type-active">
        <MdInbox />
        <p>Primary</p>
      </div>
      <div className="EmailFilter__type">
        <BsFillPeopleFill />
        <p>Social</p>
      </div>
      <div className="EmailFilter__type">
        <BsFillTagFill />
        <p>Promotion</p>
      </div>
    </div>
  );
};

export default EmailFilter;
