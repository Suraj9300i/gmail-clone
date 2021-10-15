export const openComposeCreater = () => {
  return {
    type: "OPEN",
  };
};

export const closeComposeCreater = () => {
  return {
    type: "CLOSE",
  };
};

export const openReadMail = (mail) => {
  return {
    type: "OPENMAIL",
    payload: mail,
  };
};

export const closeReadMail = () => {
  return {
    type: "CLOSEMAIL",
  };
};
