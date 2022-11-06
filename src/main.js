import { createApp } from 'vue'
import App from './App.vue'
import JQuery from 'jquery'

window.$ = JQuery

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'

// import '@popperjs/core/dist/umd/popper.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)
app.mount('#app')
