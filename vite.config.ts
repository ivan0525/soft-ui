import vueJsx from "@vitejs/plugin-vue-jsx"
import vue from '@vitejs/plugin-vue'

module.exports = {
  plugins: [
    vue(),
    vueJsx()
  ],
  optimizeDeps: {
    include: ['lodash']
  },
  proxy: {}
}