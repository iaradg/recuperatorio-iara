import Vue from 'vue'
import VueRouter from 'vue-router'

import Vista from './componentes/VistaPractico.vue'
import Choice from './componentes/EjChoice.vue'

Vue.use(VueRouter)

export const router =new VueRouter({
    mode: 'history',
    routes : [
        {path: '/', redirect: '/vista'},
        {path: '/vista', component: Vista},
        {path: '/choice', component: Choice},
    ]
})