import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

// materializeCss
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')