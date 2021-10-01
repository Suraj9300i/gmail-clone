import React, { useState } from "react";
import "./EmailSetting.css";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { MdArrowDropDown, MdRefresh, MdDelete } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoArrowBackOutline } from "react-icons/io5";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IconButton } from "@material-ui/core";

const EmailSetting = () => {
  const [select, setSelect] = useState(false);
  return (
    <div className="EmailSetting">
      <div className="EmailSetting__Buttons-Emaillist">
        <IconButton
          onClick={(e) => {
            setSelect(!select);
          }}
        >
          {select ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </IconButton>
        <MdArrowDropDown className="icon icon-dropdown" />
        <IconButton>
          <MdRefresh className="icon" />
        </IconButton>
        <IconButton>
          <BsThreeDotsVertical />
        </IconButton>
      </div>
      <div className="EmailSetting__Buttons-EmailRead hide">
        <IconButton>
          <IoArrowBackOutline className="icon" />
        </IconButton>
        <IconButton>
          <MdDelete />
        </IconButton>
      </div>
      <div className="EmailSetting__count">
        <p>1-50 of 1,233</p>
        <IconButton>
          <BiChevronLeft />
        </IconButton>
        <IconButton>
          <BiChevronRight />
        </IconButton>
      </div>
    </div>
  );
};

export default EmailSetting;
