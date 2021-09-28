import React, { useState } from "react";
import "./EmailIntro.css";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IconButton } from "@material-ui/core";

const EmailIntro = (props) => {
  const [select, setSelect] = useState(false);
  const [starred, setStarred] = useState(false);

  return (
    <div className="EmailIntro">
      <IconButton
        onClick={(e) => {
          setSelect(!select);
        }}
      >
        {select ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      </IconButton>
      <IconButton
        onClick={(e) => {
          setStarred(!starred);
        }}
      >
        {starred ? <AiFillStar /> : <AiOutlineStar />}
      </IconButton>
      <div className="EmailIntro__name">{props.name}</div>
      <span className="EmailIntro__mail">
        <div className="EmailIntro__mail-subject">{props.subject}</div>
        <div className="EmailIntro__mail-message">
          &nbsp;-&nbsp; {props.message}
        </div>
      </span>
      <div className="EmailIntro__time">{props.time}</div>
    </div>
  );
};

export default EmailIntro;
