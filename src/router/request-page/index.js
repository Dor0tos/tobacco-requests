import UserView from '@/views/UserView.vue'

export default {
    path: '/',
    name: 'home',
    meta: {
        title: 'Мои запросы',
        requiresAuth: true
    },
    component: UserView
}