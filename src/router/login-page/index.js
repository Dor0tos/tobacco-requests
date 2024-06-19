import AuthorizeView from '@/views/AuthorizeView.vue'

export default {
    path: '/auth',
    name: 'auth',
    meta: {
        title: 'Вход',
        requiresAuth: false
    },
    component: AuthorizeView
}