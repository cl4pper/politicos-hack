import Vue from 'vue'
import App from './App.vue'
// ROUTER
import VueRouter from 'vue-router';

// ROUTING LINKS
import Home from './Routes/Home/Home.vue';
import Search from './Routes/Search/Search.vue';
import Register from './Routes/Register/Register.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/busca', component: Search },
  { path: '/registro', component: Register },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
