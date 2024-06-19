import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import store from '@/stores/store'

import loginRoute from './login-page/index'
import requestsRoute from './request-page/index'
import adminRoute from './reguest-page-admin/index'
import settingsRoute from './settings-page/index'

import { useStore } from 'vuex'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        loginRoute,
        requestsRoute,
        adminRoute,
        settingsRoute
    ]
})

const DEFAULT_TITLE = '.Req - '

router.beforeEach((to, from, next) => {
    console.log('trying to route...')
    nextTick(() => {
        if (to.matched.some((record) => record.meta.requiresAuth)) {
            const isAuth = store.getters['auth/isAuthenticated']
            if (!isAuth && to.name !== 'auth') {
                next({ name: 'auth' })
            } else {
                if (to.matched.some((record) => record.meta.mustBeAdmin)) {
                    if (['owner', 'tech-admin'].includes(store.getters['auth/role']())) {
                        next({ name: 'admin' })
                    } else {
                        next({ name: 'home' })
                    }
                } else {
                    next()
                }
            }
        } else {
            next()
        }

        document.title = DEFAULT_TITLE + to.meta.title
    })
})

export default router
