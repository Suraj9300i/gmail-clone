import React from "react";
import EmailFilter from "./EmailFilter";
import EmailIntro from "./EmailIntro";
import "./EmailList.css";

const EmailList = () => {
  return (
    <div className="EmailList">
      <EmailFilter></EmailFilter>
      <div className="AllEmails">
        <EmailIntro
          name="Suraj Gupta"
          subject="Send Resume"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        atque fuga qui aut, dolore asperiores sapiente voluptates ducimus
        repellat magnam, iste expedita ipsa dolor quo."
          time="2:30PM"
        ></EmailIntro>
        <EmailIntro
          name="Jack Smith"
          subject="Meeting at sharp 18O'Clock"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        atque fuga qui aut,"
          time="1:70PM"
        ></EmailIntro>
        <EmailIntro
          name="Apple"
          subject="Buy Apple 11 pro"
          message="dolore asperiores sapiente voluptates ducimus
        repellat magnam, iste expedita ipsa dolor quo."
          time="11:37PM"
        ></EmailIntro>
      </div>
    </div>
  );
};

export default EmailList;
