import React, { useState } from "react";
import "./Compose.css";
import { BiMinus } from "react-icons/bi";
import { BsArrowsAngleExpand, BsType } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { IoIosAttach } from "react-icons/io";
import {
  AiFillCaretDown,
  AiOutlineLink,
  AiOutlineSmile,
  AiOutlineFileImage,
} from "react-icons/ai";
import { closeComposeCreater } from "./redux/action";
import { useDispatch } from "react-redux";

const Compose = () => {
  const dispatch = useDispatch();
  let [collapse, setCollapse] = useState(false);

  let collapseHandler = (e) => {
    setCollapse(!collapse);
  };

  return (
    <div className={`Compose ${collapse && "collapse"}`}>
      <div className="Compose__Header" onClick={collapseHandler}>
        <p>New Message</p>
        <div className="Compose__Header-Buttons">
          <BiMinus className="Compose-icon" onClick={collapseHandler} />
          <BsArrowsAngleExpand className="Compose-icon" />
          <TiDelete
            onClick={(e) => {
              dispatch(closeComposeCreater());
            }}
            className="Compose-icon"
          />
        </div>
      </div>
      <div className="Compose__Main">
        <input className="input__Recipients" placeholder="Recipients"></input>
        <input className="input__Subject" placeholder="Subject"></input>
        <textarea rows="20" className="input__Message"></textarea>
      </div>
      <div className="Compose__Footer">
        <div className="button-Send">
          <p>Send</p>
          <AiFillCaretDown />
        </div>
        <div className="Compose-Attachment">
          <BsType />
          <IoIosAttach />
          <AiOutlineLink />
          <AiOutlineSmile />
          <AiOutlineFileImage />
        </div>
      </div>
    </div>
  );
};

export default Compose;
