import Vue from 'vue'
import Router from 'vue-router'

import featured from '~/pages/featured.vue'
import error from '~/pages/error.vue'
import about from '~/pages/about.vue'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        linkActiveClass: 'router-link-active',
        routes: [
            {
                path: '/',
                component: featured,
            },
            {
                path: '/about',
                component: about,
            },
            {
                path: '/404',
                component: error,
            },
            {
                path: '*',
                redirect: '404'
            }
        ]
    })
}
