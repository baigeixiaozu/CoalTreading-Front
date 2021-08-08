import { createApp } from "vue";
import App from "./App.vue";
import installElementPlus from "./plugins/element";
import router from "./router";
import axios from "./utils/axios";
import VueAxios from 'vue-axios';
import store from "./store";

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.use(store)
installElementPlus(app);
app.mount("#app");