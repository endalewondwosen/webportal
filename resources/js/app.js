
// window.Vue = require('vue').default;

// Vue.component('App', require('./App.vue').default);

import Vue from "vue";
import App from "./App.vue"
import router from './router' 
import VueAxios from 'vue-axios';
import Auth from './Auth.js';
import axios from 'axios'
Vue.prototype.auth = Auth;
Vue.use(VueAxios, axios);
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);
import Swal from "sweetalert2";
window.Swal = Swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

window.Toast = Toast;

import Notification from "./Notification.js";
window.Notification=Notification;
const app = new Vue({
    el: '#app',
    router,
    render:h =>h(App)
});
