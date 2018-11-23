import Vue from 'vue';
import Vuex from 'vuex'
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import qs from 'qs';
import three from 'three';
import './plugins/element.js';

import En from '@/translation/translationEn'
import Cn from '@/translation/translationCn'

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.prototype.$qs = qs;


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
