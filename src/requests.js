import usersData from "./data/usersData";
import axios from "axios";
export const authenticate = async (username, password) => {
  const foundUser = usersData.users.find(
    (s) => s.password === password && s.username === username
  );
  return foundUser;
};
export const register = async (firstname, lastname, username, password) => {
  try {
    return await axios.post(`http://localhost:3001/users`, {
      firstname,
      lastname,
      username,
      password,
    });
  } catch (e) {
    console.log(e);
  }
};
