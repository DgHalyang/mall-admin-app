/**
 * 存储的是角色对应的权限
 */
const roleToRouter = {
  coustomer: [{
    name: 'Product',
  }, {
    name: 'ProductList',
  }, {
    name: 'ProductAdd',
  }],
  admin: [{
    name: 'Product',
  }, {
    name: 'ProductList',
  }, {
    name: 'ProductAdd',
  }, {
    name: 'Category',
  }],
};
/**
 * 过滤掉没有权限的路由
 * @param {String} role
 * @param {Array} routes
 */
export default function getMenuRoute(role, routes) {
  console.log(role, routes);
  const allowRoutesName = roleToRouter[role].map((item) => item.name);
  const resultRoutes = routes.filter((r) => {
    const obj = r;
    if (allowRoutesName.indexOf(r.name) !== -1) {
      const { children } = obj;
      obj.children = children.filter((child) => allowRoutesName.indexOf(child.name) !== -1);
      return true;
    }
    return false;
  });
  return resultRoutes;
}
