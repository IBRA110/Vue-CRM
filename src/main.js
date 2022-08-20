/* eslint-disable */
import { createApp, Vue } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min.js'
import dateFilter from './filters/date.filter'



const app = createApp(App).use(store).use(router)
app.config.globalProperties.$date = dateFilter
app.mount('#app')