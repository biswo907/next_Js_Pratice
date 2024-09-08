export const isAuth = () => {
  const isStore = localStorage.getItem("user_email");

  if (isStore) {
    return { isAuth: true, user: isStore };
  } else {
    return false;
  }
};
