import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import store from './store'
import { setHeaderToken } from '@/utils/auth'

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = require('popper.js').default
  window.$ = window.jQuery = require('jquery')

  require('bootstrap')
} catch (e) {}

const token = localStorage.getItem('token')
if (token) {
  setHeaderToken(token)
}

const app = createApp(App)
app.use(router).mount('#app')
