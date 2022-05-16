import { computed, ref } from "vue";
import { login } from "../requests";

const state = ref({
  name: "",
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
    state.value.name = user.name;
    state.value.username = user.username;
    state.value.error = "";

    return true;
  },
  async logout() {
    state.value.name = "";
    state.value.username = "";
  },

  async signup(data) {
    console.log(data);
  },
};

export default { state, getters, ...actions };
