export const getRandomBg = () => {
  let color = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + color.slice(0, 6);
};

export const transformToAvatar = (text) => {
  return text
    .split(" ")
    .map((str) => (str ? str[0].toUpperCase() : ""))
    .join("");
};

export const getSingleUserExist = (email, userList) => {
  let userObject = {
    user: {},
    isUserExist: false,
  };
  if (userList && userList.length > 0) {
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].email === email) {
        return (userObject = { user: userList[i], isUserExist: true });
      }
    }
    return (userObject = userObject = { user: {}, isUserExist: false });
  } else {
    return (userObject = { user: {}, isUserExist: false });
  }
};

export const getUserExist = (email, userList) => {
  let isUserExist = false;
  if (userList && userList.length > 0) {
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].email === email) {
        return (isUserExist = true);
      }
    }
    return (isUserExist = false);
  } else {
    return (isUserExist = false);
  }
};
