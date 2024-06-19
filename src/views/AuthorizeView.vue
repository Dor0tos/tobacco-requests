<script setup lang="ts">
import AccentButton from '@/ui/buttons/AccentButton.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import router from '@/router'

const store = useStore()

const loginAttempt = async (e) => {
    e.preventDefault()

    try {
        await store.dispatch('auth/login', {email: email.value, password: password.value})
        router.push({name: 'home'})
    }
    catch (error) {
        errorText.value = error.message
    }
}

const email = ref('')
const password = ref('')
const errorText = ref('')
</script>

<template>
    <main class="flex items-center justify-center h-full">
        <section class="w-96 p-6 bg-foreground-light dark:bg-foreground-dark rounded-lg shadow-xl">
            <h3 class="text-center">Вход</h3>
            <form class="flex flex-col gap-6">
                <div class="flex flex-col gap-2">
                    <label for="email" class="text-text-light dark:text-text-dark">E-Mail:</label>
                    <input
                        type="email"
                        id="email"
                        v-model="email"
                        class="bg-background-light dark:bg-background-dark rounded-md outline outline-2 outline-text-light dark:outline-text-dark p-2"
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="password" class="text-text-light dark:text-text-dark"
                        >E-Mail:</label
                    >
                    <input
                        type="password"
                        id="password"
                        v-model="password"
                        class="bg-background-light dark:bg-background-dark rounded-md outline outline-2 outline-text-light dark:outline-text-dark p-2"
                    />
                </div>
                <p
                    class="p-2 bg-error-light !text-error-dark rounded-md text-center"
                    v-if="errorText"
                >
                    {{ errorText }}
                </p>
                <AccentButton @clicked="loginAttempt">Войти</AccentButton>
            </form>
            <AccentButton @clicked="console.log(store.getters['auth/isAuthenticated'])">Check if auth</AccentButton>
            <AccentButton @clicked="router.push({ name: 'home' })">Go to HOME</AccentButton>
        </section>
    </main>
</template>
