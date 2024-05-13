<script setup>
const emit = defineEmits(['clicked'])
</script>

<template>
    <button
        @click="
            (e) => {
                $emit('clicked', e)
            }
        "
        class="bg-foreground-light dark:bg-foreground-dark py-2 px-4 rounded-md text-accent text-lg lg:hover:shadow-lg font-medium select-none"
    >
        <slot></slot>
    </button>
</template>
