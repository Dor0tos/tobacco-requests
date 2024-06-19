<script setup>
import { onMounted } from 'vue';
import RequestsPanel from '../modules/RequestsPanel.vue'

onMounted(() => {
    console.log('Ended at User view')
})
</script>

<template>
    <RequestsPanel />
</template>
