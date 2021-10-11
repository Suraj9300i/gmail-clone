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
import firebase from "firebase/compat";
import { firestore } from "./Firebase/Firebase";

const Compose = () => {
  const dispatch = useDispatch();
  let [collapse, setCollapse] = useState(false);

  let [recipients, setRecipients] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");

  let collapseHandler = (e) => {
    setCollapse(!collapse);
  };

  let closeCompose = () => {
    dispatch(closeComposeCreater());
  };

  let formSubmit = (e) => {
    e.preventDefault();

    firestore.collection("emails").add({
      recipients,
      subject,
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    closeCompose();
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
              closeCompose();
            }}
            className="Compose-icon"
          />
        </div>
      </div>
      <form onSubmit={formSubmit}>
        <div className="Compose__Main">
          <input
            className="input__Recipients"
            placeholder="Recipients"
            value={recipients}
            onChange={(e) => {
              setRecipients(e.target.value);
            }}
          ></input>
          <input
            className="input__Subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          ></input>
          <textarea
            rows="20"
            className="input__Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="Compose__Footer">
          <button className="button-Send" type="submit">
            <p>Send</p>
            {/* <AiFillCaretDown /> */}
          </button>
          <div className="Compose-Attachment">
            <BsType />
            <IoIosAttach />
            <AiOutlineLink />
            <AiOutlineSmile />
            <AiOutlineFileImage />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Compose;
