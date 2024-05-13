<script setup>
import { ref, onMounted } from 'vue'
import TRButton from '../ui/buttons/trButton.vue'
// Icons
import IconMoon from '../icons/IconMoon.vue'
import IconSun from '../icons/IconSun.vue'

function changeTheme() {
    const html = document.documentElement

    if (isDarkTheme.value) {
        html.classList.remove('dark')
    } else {
        html.classList.add('dark')
    }

    isDarkTheme.value = !isDarkTheme.value
}

let isDarkTheme = ref(document.documentElement.classList.contains('dark'))
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
