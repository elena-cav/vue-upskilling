export async function login(username, password) {
  const request = await fetch("./users.json");
  const usersJson = await request.json();
  return usersJson.find(
    (s) => s.password === password && s.username === username
  );
}

export async function getUser() {
  const request = await fetch("/current.json");
  const user = await request.json();
  return user;
}
