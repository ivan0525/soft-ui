// 有一个组件，向上找到最近的一个指定组件
function findComponentUpward (context, componentName) {
  let parent = context.$parent;
  let name = parent.$options.name;
  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent;
    if (parent) {
      name = parent.$options.name;
    }
  }
  return parent;
}

export default {
  findComponentUpward,
};
