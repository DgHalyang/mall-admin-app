module.exports = {
  css: {
    loaderOptions: {
      // 给 less 传递选项
      less: {
        // 添加时报错,不能换行，所以一下配置
        javascriptEnabled: true,
      },
    },
  },
};
