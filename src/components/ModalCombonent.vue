<script setup>
import TrButton from '@/ui/buttons/trButton.vue'
import ModalInfo from '@/ui/ModalInfo.vue'
import { onClickOutside } from '@vueuse/core'
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
    isOpen: Boolean,
    data: Object
})

const emit = defineEmits(['modal-close'])

const target = ref(null)
onClickOutside(target, () => emit('modal-close'))
</script>

<template>
    <div v-if="isOpen" class="z-[999] fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]">
        <div class="flex items-center justify-center h-full">
            <div
                ref="target"
                name="container"
                class="w-1/2 bg-foreground-light dark:bg-foreground-dark rounded-xl p-6 shadow-md flex flex-col gap-5"
            >
                <header>
                    <h3 class="font-semibold">
                        {{ props.data.title || 'No title' }}
                    </h3>
                </header>
                <main class="grow">
                    <pre
                        class="font-noto dark:text-text-accent-dark text-text-accent-light"
                        name="conentent-plain-text"
                        v-if="props.data.type == 'plain-text'"
                        v-html="props.data.content || 'Без описания'"
                    />
                    <div name="conentent-form" v-if="props.data.type == 'form'"></div>
                </main>
                <footer class="flex justify-between items-end">
                    <section class="flex gap-5">
                        <ModalInfo title="Создано" :value="props.data.info.createdAt" />
                        <ModalInfo title="Статус" :value="props.data.info.status" />
                        <ModalInfo title="Отправлено из" value="Кашира" />
                    </section>
                    <TrButton @clicked="emit('modal-close')">Закрыть</TrButton>
                </footer>
            </div>
        </div>
    </div>
</template>
