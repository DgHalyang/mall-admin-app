import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getUserCookie, removeUserCookie } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换菜单栏
    collapsed: false,
    // 存储用户信息
    user: getUserCookie(),
  },
  mutations: {
    changeCollapsed(state) {
      console.log(state);
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    logout(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
      setCookie(userInfo);
    },
    logout({ commit }) {
      commit('logout');
      removeUserCookie();
    },
  },
  modules: {
  },
});
