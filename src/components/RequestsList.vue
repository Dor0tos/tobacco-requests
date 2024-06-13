<script setup>
const props = defineProps({
    columns: {
        type: Number,
        default: 3
    }
})
</script>

<template>
    <section class="grid grid-flow-row grid-cols gap-5">
        <slot></slot>
    </section>
</template>

<style scoped>
.grid-cols {
    grid-template-columns: repeat(v-bind('props.columns'), minmax(0, 1fr));
}
</style>
