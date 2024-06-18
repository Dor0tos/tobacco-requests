<script setup>
import NavigationBar from './components/NavigationBar.vue'
import ModalComponent from './components/ModalCombonent.vue'
import Panel from './ui/TRPanel.vue'
import TRFooter from './components/TRFooter.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const isModalOpened = computed(() => store.getters['modal/isModalOpened'])
const data = computed(() => store.getters['modal/modalContent'])

const closeModal = () => {
    store.dispatch('modal/closeModal')
}

const handleModal = () => {}
</script>

<template>
    <div
        class="bg-pattern-light dark:bg-pattern-dark w-full min-h-[100vh] absolute top-0 -z-10 pattern"
    />
    <div class="w-3/4 mx-auto pt-10 flex flex-col gap-8 items-center h-[100vh]">
        <NavigationBar />
        <Panel class="w-2/3 h-full">
            <RouterView />
        </Panel>
        <TRFooter />
    </div>
    <ModalComponent :is-open="isModalOpened" :data="data" @modal-close="closeModal">
        <template #modal-header>My Header</template>
    </ModalComponent>
</template>

<style scoped>
.pattern {
    -webkit-mask-image: url('/src/assets/img/pattern.svg');
    mask-image: url('/src/assets/img/pattern.svg');
}
</style>
