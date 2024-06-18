import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import UserView from '../views/UserView.vue'
import AuthorizeView from '../views/AuthorizeView.vue'
import AdminHomeView from '../views/AdminHomeView.vue'
import AdminSettingsView from '../views/AdminSettingsView.vue'
import store from '@/stores/store'
import { useStore } from 'vuex'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                title: 'Мои запросы',
                requiresAuth: true
            },
            component: UserView
        },
        {
            path: '/auth',
            name: 'auth',
            meta: {
                title: 'Вход'
            },
            component: AuthorizeView
        },
        {
            path: '/admin',
            name: 'admin',
            meta: {
                title: 'Запросы',
                requiresAuth: true,
                mustBeAdmin: true
            },
            component: AdminHomeView
        },
        {
            path: '/settings',
            name: 'settings',
            meta: {
                title: 'Настройки',
                requiresAuth: true,
                mustBeAdmin: true
            },
            component: AdminSettingsView
        }
    ]
})

const DEFAULT_TITLE = '.Req - '

router.beforeEach((to, from, next) => {
    console.log('From >', from)
    console.log('To >', to)

    console.log('Store >', store._state.data)
    nextTick(() => {
        if (to.matched.some((record) => record.meta.requiresAuth)) {
            if (!store.getters.isAuthenticated && to.name !== 'auth') {
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
