export async function login(username, password) {
  const request = await fetch("/users.json");
  const usersJson = await request.json();

  const foundUser = usersJson.find(
    (s) => s.password === password && s.username === username
  );
  return foundUser;
}
