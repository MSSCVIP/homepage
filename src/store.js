import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPhone:false,
    isEmail:false,
    isEosAdr:false
  },
  mutations: {
    validatePhone(state,val=''){
      if(val){
        this.$notify.warning({
          message: "手机号码不能为空！"
        })
      }
    }
  },
  actions: {

  },
});
