import { createApp} from 'vue'
import urql from '@urql/vue'
import router from './routes'
import store from './store';
import App from './App.vue'

import './index.css'

const Vue = createApp(App)
Vue.use(router)
Vue.use(store)
Vue.use(urql, {
    url: 'http://localhost:4000/graphql'
})
Vue.mount('#app')
