import { createApp } from 'vue'
import router from './routes'
import store from './store';
import App from './App.vue'

const Vue = createApp(App)
Vue.use(router)
Vue.use(store)
Vue.mount('#app')
