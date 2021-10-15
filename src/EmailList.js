import React from "react";
import EmailFilter from "./EmailFilter";
import EmailSetting from "./EmailSetting";
import EmailIntro from "./EmailIntro";
import "./EmailList.css";
import { useState, useEffect } from "react";
import { firestore } from "./Firebase/Firebase";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openReadMail } from "./redux/action";

const EmailList = () => {
  let [emails, setEmails] = useState([]);
  let history = useHistory();
  let dispatch = useDispatch();

  useEffect(() => {
    async function fun() {
      firestore
        .collection("emails")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setEmails(
            snapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        });
    }
    fun();
  }, []);

  return (
    <div className="EmailList">
      <EmailSetting></EmailSetting>
      <EmailFilter></EmailFilter>
      <div className="AllEmails">
        {emails.map((email) => {
          return (
            <EmailIntro
              key={email.id}
              name={email.recipients}
              subject={email.subject}
              message={email.message}
              time={new Date(
                email.timestamp?.seconds * 1000
              ).toLocaleTimeString()}
              onClick={(e) => {
                history.push("/mail");
                dispatch(openReadMail(email));
              }}
            ></EmailIntro>
          );
        })}
      </div>
    </div>
  );
};

export default EmailList;
