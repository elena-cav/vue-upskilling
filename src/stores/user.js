import { computed, ref } from "vue";
import { authenticate, register } from "../requests";

const state = ref({
  firstname: "",
  lastname: "",
  username: "",
  error: "",
});

const getters = ref({
  isLoggedIn: computed(() => state.value.username !== ""),
});

const actions = {
  async getUser() {
    const user = localStorage.getItem("currentUser");
    const parsedUser = JSON.parse(user);
    if (parsedUser == null) return;

    state.value.firstname = parsedUser.firstname;
    state.value.lastname = parsedUser.lastname;
    state.value.username = parsedUser.username;
  },
  async login(username, password) {
    const user = await authenticate(username, password);

    if (!user) {
      state.value.error = "Incorrect username or password";
      return false;
    }
    const { firstname, lastname } = user;
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ firstname, lastname, username })
    );
    state.value.firstname = firstname;
    state.value.lastname = lastname;
    state.value.username = username;
    state.value.error = "";
    return true;
  },
  async logout() {
    state.value.firstname = "";
    state.value.lastname = "";
    state.value.username = "";
    localStorage.setItem("currentUser", JSON.stringify(null));
  },

  async signup(firstname, lastname, username, password) {
    const response = await register(firstname, lastname, username, password);
    if (!response.status || response.status !== 201) {
      state.value.error = "Something went wrong, please try again";
      return false;
    } else {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ firstname, lastname, username })
      );
      state.value.firstname = firstname;
      state.value.lastname = lastname;
      state.value.username = username;
      state.value.error = "";
      return true;
    }
  },
};

export default { state, getters, ...actions };
