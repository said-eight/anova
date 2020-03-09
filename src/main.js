import Vue from 'vue';
import App from './App';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import router from './router'
import store from './store'
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
