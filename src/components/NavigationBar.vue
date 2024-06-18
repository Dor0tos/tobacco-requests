<script setup>
import TRButton from '../ui/buttons/trButton.vue'
import ThemeChangeButton from '../components/ThemeChangeButton.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { supabase } from '@/libs/supabase'
import router from '@/router'

const store = useStore()

const AccountName = computed(() => store.getters['auth/displayName'])

const logout = () => {
    supabase.auth.signOut()
    store.dispatch('auth/logout')
    router.push('/auth')
}
</script>

<template>
    <nav
        class="bg-foreground-light dark:bg-foreground-dark flex flex-row w-full gap-2 py-4 px-6 rounded-xl items-center justify-between shadow-xl"
    >
        <h1
            class="font-play font-bold text-text-accent-light dark:text-text-accent-dark text-3xl select-none"
        >
            .Request
        </h1>
        <div class="flex flex-row items-center gap-2">
            <p>{{ AccountName }}</p>
            <TRButton @clicked="logout" v-if="AccountName">Выход</TRButton>
            <ThemeChangeButton />
        </div>
    </nav>
</template>
