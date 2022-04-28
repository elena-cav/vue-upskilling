export async function login(username, password) {
  const request = await fetch("./users.son");
  const usersJson = await request.json();
  return usersJson.find(
    (s) => s.password === password && s.username === username
  );
}

export async function getUser() {
  const request = await fetch("/current.json");
  const user = await request.json();
  console.log(user);
  return user;
}
