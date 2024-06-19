import AdminSettingsView from '@/views/AdminSettingsView.vue'

export default {
    path: '/settings',
    name: 'settings',
    meta: {
        title: 'Настройки',
        requiresAuth: true,
        mustBeAdmin: true
    },
    component: AdminSettingsView
}