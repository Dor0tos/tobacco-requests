<script setup>
import { ref, onMounted } from 'vue'
import TRButton from '../ui/buttons/trButton.vue'
// Icons
import IconMoon from '../icons/IconMoon.vue'
import IconSun from '../icons/IconSun.vue'

function changeTheme() {
    isDarkTheme.value = !isDarkTheme.value
    updateTheme()
}

function updateTheme() {
    const html = document.documentElement
    const containsDark = document.documentElement.classList.contains('dark')

    if (isDarkTheme.value) {
        if (!containsDark) {
            html.classList.add('dark')
        }

        localStorage.setItem('theme', 'dark')
    } else {
        if (containsDark) {
            html.classList.remove('dark')
        }

        localStorage.setItem('theme', 'light')
    }
}

onMounted(() => {
    let theme = localStorage.getItem('theme')
    if (!theme) {
        localStorage.setItem('theme', 'light')
        isDarkTheme.value = false
    } else {
        isDarkTheme.value = theme == 'dark'
    }

    updateTheme()
})

let isDarkTheme = ref(false)
</script>

<template>
    <TRButton @click="changeTheme" class="overflow-hidden">
        <Transition name="slide" mode="out-in">
            <IconMoon v-if="isDarkTheme" />
            <IconSun v-else />
        </Transition>
    </TRButton>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.15s ease-out;
}

.slide-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}

.slide-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>
