import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueLazyLoad from 'vue3-lazyload'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueLazyLoad, {
  loading: '',
  error: '',
  lifecycle: {
    loading: (el) => {
      console.log('loading', el)
    },
    error: (el) => {
      console.log('error', el)
    },
    loaded: (el) => {
      console.log('loaded', el)
    },
  },
})
app.use(createPinia())
app.use(router)

app.mount('#app')
