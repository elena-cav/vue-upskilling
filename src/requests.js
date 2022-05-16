import usersData from "./data/usersData";

export async function login(username, password) {
  console.log(usersData, username, password);
  // const usersJson = await request.json();

  // const foundUser = usersJson.find(
  //   (s) => s.password === password && s.username === username
  // );
  // return foundUser;
}
export async function signup(body) {
  console.log(body);
}
