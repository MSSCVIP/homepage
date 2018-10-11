import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // isPhone:false,
    // isEmail:false,
    // isEosAdr:false
  },
  mutations: {
    // validatePhone(state,val=''){
    //
    // }
      DOWNLOADWP(){
          let host = window.location.host;
          window.open(host + '/files/white-paper-v2.4.pdf');
      }
  },
  actions: {

  },
});
