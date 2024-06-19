import AdminHomeView from '@/views/AdminHomeView.vue'

export default {
    path: '/admin',
    name: 'admin',
    meta: {
        title: 'Запросы',
        requiresAuth: true,
        mustBeAdmin: true
    },
    component: AdminHomeView
}