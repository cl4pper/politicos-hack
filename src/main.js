import Vue from 'vue'
import App from './App.vue'
// ROUTER
import VueRouter from 'vue-router';

// ROUTING LINKS
import Home from './Routes/Home/Home.vue';
import Search from './Routes/Search/Search.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/busca', component: Search },
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
