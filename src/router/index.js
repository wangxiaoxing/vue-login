import Vue from 'vue'
import Router from 'vue-router'
// import cp1 from '../componets/cp1.vue
// import foot from '../componets/foot'
import reg from '../componets/reg'
import success from '../componets/success'
import login from '../componets/login'
import index from '../componets/index'
import we from '../componets/we'
import cart from '../componets/cart'
import message from '../componets/message'
import people from '../componets/people'
import foot from '../componets/foot'
Vue.use(Router)
export default new Router({
    routes: [{
        path: '/login',
        name: 'login',
        component:login
    }, {
            path: '/success',
            name: 'success',
            component:success
        }, {
            path: '/reg',
            name: 'reg',
            component:reg
        }, {
            path: '/',
            name: 'foot',
            component:foot
        }, {
            path: '/we',
            name: 'we',
            component:we
        }, {
            path: '/cart',
            name: 'cart',
            component:cart
        }, {
            path: '/message',
            name: 'message',
            component:message
        }, {
            path: '/people',
            name: 'people',
            component:people
        }]
})