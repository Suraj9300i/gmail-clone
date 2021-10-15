import React from "react";
import EmailFilter from "./EmailFilter";
import EmailIntro from "./EmailIntro";
import "./EmailList.css";
import { useState, useEffect } from "react";
import { firestore } from "./Firebase/Firebase";

const EmailList = () => {
  let [emails, setEmails] = useState([]);

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
            ></EmailIntro>
          );
        })}
      </div>
    </div>
  );
};

export default EmailList;
