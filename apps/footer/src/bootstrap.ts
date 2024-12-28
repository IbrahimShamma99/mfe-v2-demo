import { createApp } from "vue";
import Footer from "./footer.vue";

// Mount function to start up the app
const mount = (el: Element) => {
  const app = createApp(Footer);
  app.mount(el); // this a function from Vue.
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_footer-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
