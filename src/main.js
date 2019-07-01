import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';
import { config } from '../firebaseConfig';
import './registerServiceWorker';

Vue.config.productionTip = false;

firebase.initializeApp(config);

let app;
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');

    if (user) {
      store.dispatch('setUser', user);
      router.push('trashit');
    } else {
      store.dispatch('removeUser');
      router.push('trashit');
    }
  }
});
