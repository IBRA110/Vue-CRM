/* eslint-disable */
import { createApp, Vue } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import message from './utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'

const app = createApp(App).use(store).use(router)
app.config.globalProperties.$date = dateFilter
app.config.globalProperties.$message = message 
app.mount('#app')
