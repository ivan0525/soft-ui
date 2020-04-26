import Button from './button'
import Icon from './icon'
import Switch from './switch'
import Divider from './divider'
import Dragger from './dragger'

const components = {
  Button,
  Icon,
  Switch,
  Divider,
  Dragger
}

// 插件的install方法
const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    const component = components[key]
    Vue.component(component.name, component)
  })
}

// 当Vue是全局变量是,自动注册插件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const Soft = {
  install
}

export default Soft
