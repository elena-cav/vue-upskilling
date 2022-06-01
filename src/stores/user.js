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
  async login(username, password) {
    const user = await authenticate(username, password);

    if (!user) {
      state.value.error = "Incorrect username or password";
      return false;
    }
    state.value.firstname = user.firstname;
    state.value.lastname = user.lastname;
    state.value.username = user.username;
    state.value.error = "";
    return true;
  },
  async logout() {
    state.value.firstname = "";
    state.value.lastname = "";
    state.value.username = "";
  },

  async signup(firstname, lastname, username, password) {
    const response = await register(firstname, lastname, username, password);
    if (response.status !== 201) {
      console.log("inerror");
      state.value.error = "Something went wrong, please try again";
      return false;
    } else {
      state.value.firstname = firstname;
      state.value.lastname = lastname;
      state.value.username = username;
      state.value.error = "";
      console.log("Username", state.value.username);
      console.log("isloggedinSignupUser", getters.value.isLoggedIn);
      return true;
    }
  },
};

export default { state, getters, ...actions };
