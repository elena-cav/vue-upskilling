import specialChars from "./specialChars";

describe("Special characters", () => {
  test("should return false if the password does not have any special characters ", () => {
    const password = "password";
    const result = specialChars(password);
    expect(result).toBe(false);
  });
  test("should return true if the password contains at least one special character ", () => {
    const password = "password.";
    const result = specialChars(password);
    expect(result).toBe(true);
  });
});
