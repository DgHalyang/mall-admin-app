import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// vue add ant-design-vue命令
import './plugins/ant-design-vue';
// 引入重置样式
import '@/assets/css/reset.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
