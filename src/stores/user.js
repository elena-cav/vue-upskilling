import { computed, ref } from "vue";
import { login, signup } from "../requests";

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
    const user = await login(username, password);

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

  async signup(data) {
    const response = await signup(data);
    console.log("RESPONSE", response);
  },
};

export default { state, getters, ...actions };
