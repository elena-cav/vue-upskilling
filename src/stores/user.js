import { computed, reactive } from "vue";
import { login } from "../requests";

const state = reactive({
  name: "",
  username: "",
  error: "",
});

const getters = reactive({
  isLoggedIn: computed(() => state.username !== ""),
});

const actions = {
  async login(username, password) {
    const user = await login(username, password);

    if (!user) {
      state.error = "Incorrect username or password";
      return false;
    }
    state.name = user.name;
    state.username = user.username;
    state.error = "";

    return true;
  },
  async logout() {
    state.name = "";
    state.username = "";
  },
};

export default { state, getters, ...actions };
