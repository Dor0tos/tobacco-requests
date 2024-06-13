<script setup>
import NavigationBar from './components/NavigationBar.vue'
import Panel from './ui/Panel.vue'
import RequestsList from './components/RequestsList.vue'
import RequestsCard from './components/RequestCard.vue'
import TRFooter from './components/TRFooter.vue'
</script>

<template>
    <div
        class="h-full bg-pattern-light dark:bg-pattern-dark w-full min-h-[100vh] absolute -z-10 pattern"
    />
    <div
        class="h-full bg-no-repeat bg-left bg-[url('/src/assets/img/blue_light.png')] w-full min-h-[100vh] absolute -z-10"
    />
    <div
        class="h-full bg-no-repeat bg-right bg-[url('/src/assets/img/orange_light.png')] w-full min-h-[100vh] absolute -z-10"
    />
    <div class="w-3/4 mx-auto pt-10 flex flex-col gap-8 items-center">
        <NavigationBar />
        <main class="w-4/5">
            <Panel>
                <RequestsList :columns="3">
                    <RequestsCard title="Вывоз брака" />
                    <RequestsCard title="Техническая заявка - Оборудование" />
                    <RequestsCard title="Прочее" />
                    <RequestsCard title="Заказ бытовых расходников" />
                </RequestsList>
            </Panel>
        </main>
        <TRFooter />
    </div>
</template>

<style scoped>
.pattern {
    -webkit-mask-image: url('/src/assets/img/pattern.svg');
    mask-image: url('/src/assets/img/pattern.svg');
}
</style>
