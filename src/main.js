import "@/assets/scss/main.scss";
import {createPinia} from "pinia";
import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import LsButton from "./components/LsButton.vue";
import LsGetquote from "./components/LsGetQuote.vue";
import LsApply from "./components/LsApply.vue";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.component("LsButton", LsButton);
app.component("LsGetquote", LsGetquote);
app.component("LsApply", LsApply);
app.mount("#app");
