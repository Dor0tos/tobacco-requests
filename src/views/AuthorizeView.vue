<script setup lang="ts">
import { supabase } from '@/libs/supabase'
import AccentButton from '@/ui/buttons/AccentButton.vue'
import Translator from '@/libs/supabaseAuthTranslation'
import { onMounted, ref } from 'vue'
import { isAuth, getUser, getSession } from '@/libs/AuthHandler'
import { useStore } from 'vuex'
import router from '@/router'

const store = useStore()

const loginButtonClick = async (e) => {
    errorText.value = ''

    e.preventDefault()

    let { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })

    if (data.user) {
        store.dispatch('auth/login', data.session)
        router.push({ name: 'home' })
    } else {
        console.log('error >', error)
        errorText.value = Translator(error.message)
    }
}

const email = ref('')
const password = ref('')
const errorText = ref('')

onMounted(async () => {
    if (await isAuth()) {
        store.dispatch('auth/login', await getSession())
    }
})
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
                <AccentButton @clicked="loginButtonClick">Войти</AccentButton>
            </form>
        </section>
    </main>
</template>
