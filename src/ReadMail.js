import React from "react";
import "./ReadMail.css";
import { MdDelete } from "react-icons/md";
import { BsThreeDotsVertical, BsReplyFill } from "react-icons/bs";
import { IoArrowBackOutline, IoPrint } from "react-icons/io5";
import { Avatar, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeReadMail } from "./redux/action";

const ReadMail = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  let mail = useSelector((state) => state.readMail);
  return (
    <div className="ReadMail">
      <div className="Readmail__Setting">
        <IconButton
          onClick={(e) => {
            history.goBack();
            dispatch(closeReadMail());
          }}
        >
          <IoArrowBackOutline className="icon" />
        </IconButton>
        <IconButton>
          <MdDelete />
        </IconButton>
      </div>
      <div className="Readmail__Subject">
        <p>{mail.subject}</p>
        <IconButton>
          <IoPrint className="icon" />
        </IconButton>
      </div>
      <div className="Readmail__Header">
        <div className="Readmail__Header-1">
          <Avatar></Avatar>
          <p>
            <span className="Readmail__Header-Name">{mail.recipients}</span>
            <span className="Readmail__Header-Email">{`<email>`}</span>
          </p>
        </div>
        <div className="Readmail__Header-2">
          <p>{new Date(mail.timestamp?.seconds * 1000).toLocaleTimeString()}</p>
          <IconButton>
            <BsReplyFill></BsReplyFill>
          </IconButton>
          <IconButton>
            <BsThreeDotsVertical></BsThreeDotsVertical>
          </IconButton>
        </div>
      </div>
      <div className="Readmail__Body">{mail.message}</div>
    </div>
  );
};

export default ReadMail;
