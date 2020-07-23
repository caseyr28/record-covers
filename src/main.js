import Vue from 'vue'
import App from './App.vue'
import AOS from "aos";

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init({ disable: "phone" });
  },
  render: h => h(App),
}).$mount('#app')
