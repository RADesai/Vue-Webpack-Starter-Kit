import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Home from './Home.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
];

let router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  template: `
    <router-view class="view"></router-view>
  `
}).$mount('#app');
