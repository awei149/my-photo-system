import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../component/Home.vue'
import Tiled from '../component/photostyle/Tiled.vue'
import Life from'../component/photostyle/Life.vue'
import Login from '../component/Login.vue'
const routes = [
    {path: '/', redirect: '/home'},
    {path: '/login', name:'login', component: Login},
    {
      path: '/home', 
      component: Home,
      name:'home',
      beforeEnter: (to, from, next) => {
        // ...
        if(sessionStorage.key(0)){
          next(true)
        }else{
          next('/login?redirect='+to.path)
        }
      },
      children:[
        {path: '/', redirect: '/home/tiled'},
        {path: 'tiled', component: Tiled},
        {path:'life',component:Life}
      ]
  }
]
const router = new VueRouter({
    routes
  })
export default router;