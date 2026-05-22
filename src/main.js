import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";

import {library} from "@fortawesome/fontawesome-svg-core";
import "@vuepic/vue-datepicker/dist/main.css";
import {fas} from "@fortawesome/pro-solid-svg-icons";
import {far} from "@fortawesome/pro-regular-svg-icons";
import {fal} from "@fortawesome/pro-light-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import "./assets/css/taiwind-conf.css";
import "./assets/scss/main.scss";

library.add(fas, far, fal, fab);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.config.errorHandler = (err, instance, info) => {
  console.log("Vue error:", err);
  console.log("Info:", info);
};

app.use(router).mount("#app");
