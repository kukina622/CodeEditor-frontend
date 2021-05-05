import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;
Vue.prototype.$bus=new Vue()
Vue.use(VueAxios, axios)

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
