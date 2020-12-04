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
        <a-breadcrumb-item>
          {{ currentRoute[0] ? currentRoute[0].meta.title : "" }}
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <router-link
            :to="{ name: currentRoute[1] ? currentRoute[1].name : '' }"
          >
            {{ currentRoute[1] ? currentRoute[1].meta.title : "" }}
          </router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li class="username">
        {{ $store.state.user.username }}<a-icon type="down" />
      </li>
      <li class="login-out" @click="loginout">退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: this.$router.currentRoute.matched,
    };
  },
  watch: {
    // 监听路由->面包屑改变
    $route() {
      // console.log(this.$router);
      console.log(this.$router.currentRoute);
      this.currentRoute = this.$router.currentRoute.matched;
    },
  },
  // created() {
  //   console.log(this.$router.currentRoute);
  //   this.currentRoute = this.$router.currentRoute.matched;
  // },
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
