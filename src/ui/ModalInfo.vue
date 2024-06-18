<script setup>
const props = defineProps({
    title: String,
    value: String
})
</script>

<template>
    <div
        class="inline p-2 rounded-md shadow-md bg-background-light dark:bg-background-dark select-none"
    >
        <p class="opacity-50">{{ props.title }}:</p>
        <p>{{ props.value }}</p>
    </div>
</template>
