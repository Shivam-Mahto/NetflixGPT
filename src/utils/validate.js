export const validateName = (name) => {
  const nameIsValid = /^[a-zA-Z ]{4,60}$/.test(name);
  if (!nameIsValid) {
    return "Please enter a valid name";
  }

  return null;
};
export const validateEmail = (email) => {
  const emailIsValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(
    email
  );

  if (!emailIsValid) {
    return "Please enter a valid email address";
  }

  return null;
};

export const validatePassword = (password) => {
  const passwordIsValid = password.length >= 4 && password.length <= 60;

  if (!passwordIsValid) {
    return "Your password must contain between 4 and 60 characters.";
  }

  return null;
};
