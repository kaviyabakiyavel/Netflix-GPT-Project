const checkValidData = (email, password, name = null) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

   if (name !== null) {
    const isNameValid = /^[A-Za-z][a-zA-Z '.-]{1,}$/.test(name.trim());
    if (!isNameValid) return "Name is not valid";
  }

  if (!email || !password) return "Email and password are required";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

export default checkValidData;