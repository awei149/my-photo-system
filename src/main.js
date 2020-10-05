import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import {Container, Header, Main, Button, Row, Icon} from 'element-ui'
import axios from 'axios'
import router from './router/router.js'
import Swiper from "swiper";
import indexdb from './indexdb/indexdb.js'
// import 'swiper/dist/css/swiper.min.css';
Vue.prototype.$http = axios;

Vue.prototype.$VueEvent= Vue.prototype.$VueEvent || new Vue();
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
// Vue.use(VueRouter);
Vue.use(Button);
Vue.use(Row);
Vue.use(Icon);
Vue.prototype.indexdb = indexdb;
// import Home from './component/Home.vue'
// import Tiled from './component/photostyle/Tiled.vue'
// const routes = [
//   {path: '/', redirect: '/home'},
//   {
//     path: '/home', 
//     component: Home,
//     children:[
//       {path: '/', redirect: '/home/tiled'},
//       {path: 'tiled', component: Tiled}
//     ]
// }
// ]
// const router = new VueRouter({
//   routes
// })
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
