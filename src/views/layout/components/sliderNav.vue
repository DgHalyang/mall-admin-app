<template>
  <div class="main-header">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breakcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">统计</a></a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li class="username">{{$store.state.user.username}}<a-icon type="down" /></li>
      <li class="login-out" @click="loginout">退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    toggleCollapsed() {
    //   this.collapsed = !this.collapsed;
    // 触发vuex->actions从而触发mutations->state
      this.$store.dispatch('changeCollapsed');
    },
    // 退出登录
    loginout() {
      this.$store.dispatch('logout');
      this.$router.push({
        name: 'Login',
      });
    },
  },
};
</script>
