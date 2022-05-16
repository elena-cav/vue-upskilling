import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import router from "./router";

library.add(faEye, faEyeSlash);
createApp(App).use(router).component("fa", FontAwesomeIcon).mount("#app");
