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
        class="bg-accent py-2 px-4 rounded-md select-none text-white text-lg lg:hover:shadow-md font-medium transition-shadow"
    >
        <slot></slot>
    </button>
</template>
