import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import qs from 'qs';
import three from 'three';
import './plugins/element.js';

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.prototype.$qs = qs;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
