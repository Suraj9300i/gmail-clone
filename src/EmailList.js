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
      let querySnapshot = await firestore.collection("emails").get();
      let allEmails = [];
      for (let i = 0; i < querySnapshot.docs.length; i++) {
        allEmails.push({
          id: querySnapshot.docs[i].id,
          ...querySnapshot.docs[i].data(),
        });
      }
      setEmails(allEmails);
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
              time="2:30PM"
            ></EmailIntro>
          );
        })}
      </div>
    </div>
  );
};

export default EmailList;
