import { createApp } from 'vue'
import App from './App.vue'
import SoftUI from '../lib'

const app = createApp(App);

app.use(SoftUI).mount('#app')
