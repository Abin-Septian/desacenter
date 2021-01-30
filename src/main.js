import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'
import App from './App.vue'
import router from './router'
import store from './store'

import MyPlugin from './plugins/my-plugin'

Vue.use(BootstrapVue)
Vue.use(MyPlugin)
Vue.use(firestorePlugin)

var firebaseConfig = {
    apiKey: "AIzaSyD5ogYxw5vkfasXU4vRB5eX1ZCk0griC9I",
    authDomain: "desacenter-76054.firebaseapp.com",
    projectId: "desacenter-76054",
    storageBucket: "desacenter-76054.appspot.com",
    messagingSenderId: "580185481900",
    appId: "1:580185481900:web:f110c33d639390790e7509"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false
Vue.prototype.$log = console.log

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
