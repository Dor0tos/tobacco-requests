<script setup>
import NavigationBar from './components/NavigationBar.vue'
import Panel from './ui/Panel.vue'
import RequestsList from './components/RequestsList.vue'
import RequestsCard from './components/RequestCard.vue'
import TRFooter from './components/TRFooter.vue'
</script>

<template>
    <div class="w-3/4 mx-auto pt-10 flex flex-col gap-8 items-center">
        <NavigationBar />
        <main class="w-4/5">
            <Panel>
                <RequestsList :columns="3">
                    <RequestsCard v-for="x in 4" />
                </RequestsList>
            </Panel>
        </main>
        <TRFooter />
    </div>
</template>

<style scoped></style>
