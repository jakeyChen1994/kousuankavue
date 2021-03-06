import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './route-config.js';
import App from './views/App.vue';
import XHeader from './components/XHeader'
import store from './store/index.js';
// import './style/index.scss';
import FastClick from 'fastclick'

FastClick.attach(document.body);

Vue.mixin({
  props: {
    bookIndex: String,
    chapIndex: String
  },
  components:{XHeader}
});
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes
});

new Vue({
  el: '#application',
  store,
  router,
  render: h => h(App)
});
