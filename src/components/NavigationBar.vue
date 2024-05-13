<script setup>
import TRButton from '../ui/buttons/trButton.vue'
import AccentButton from '../ui/buttons/AccentButton.vue'
import ThemeChangeButton from '../components/ThemeChangeButton.vue'
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
            <!--ToDO: Сделать отображение имени аккаунта-->
            <p>TODO: Аккаунт</p>
            <TRButton>Выход</TRButton>
            <ThemeChangeButton />
        </div>
    </nav>
</template>
