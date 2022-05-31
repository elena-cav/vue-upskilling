import usersData from "./data/usersData";
import axios from "axios";
export const login = async (username, password) => {
  console.log(usersData, username, password);

  const foundUser = usersData.users.find(
    (s) => s.password === password && s.username === username
  );
  console.log(foundUser);
  return foundUser;
};
export const signup = async (body) => {
  console.log("BODY", body);
  try {
    return await axios.post(`http://localhost:3001/users`, body);
  } catch (e) {
    console.log(e);
  }
};
