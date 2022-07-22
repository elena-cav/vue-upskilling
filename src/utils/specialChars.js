const specialCharsRegex = /[!@#$%^&*)(+=._-]/;
export default function specialChars(password) {
  return specialCharsRegex.test(password);
}
