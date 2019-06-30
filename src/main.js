import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import './registerServiceWorker'
import NProgress from 'nprogress'

import '../node_modules/nprogress/nprogress.css'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyDqCsQ0l_BhGgNYYqoYQ4E5vwVPjkveKZc",
  authDomain: "to-do-list-55dd1.firebaseapp.com",
  databaseURL: "https://to-do-list-55dd1.firebaseio.com",
  projectId: "to-do-list-55dd1",
  storageBucket: "",
  messagingSenderId: "438378635283",
  appId: "1:438378635283:web:199ce54a3a3f0844"
};

firebase.initializeApp(config)

export const db = firebase.firestore()

// eslint-disable-next-line
router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

// eslint-disable-next-line
router.afterEach((to, from) => {
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
