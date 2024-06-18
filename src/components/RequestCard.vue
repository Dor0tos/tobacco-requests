<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const openModal = () => {
    const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour12: false,
        timeZone: '+06:00',
        hour: 'numeric',
        minute: 'numeric'
    }

    const data = {
        title: title.value,
        type: 'plain-text',
        content: props.text,
        info: {
            createdAt: props.createdAt.toLocaleDateString('ru-ru', options),
            status: status.value
        }
    }
    store.dispatch('modal/openModal', data)
}

const props = defineProps({
    id: Number,
    createdAt: Date,
    createdBy: String,
    text: String,
    requestType: Promise,
    status: String,
    adminMode: Boolean
})

function parseStatus(status) {
    switch (status) {
        case 'not-seen':
            return 'Не просмотрен'
        case 'seen':
            return 'Просмотрен'
        case 'in-progress':
            return 'В процессе'
        case 'complete':
            return 'Выполнен'
        default:
            return 'Не просмотрен'
    }
}

const title = ref('')
const status = ref('')
const createdBy = ref('')

onMounted(() => {
    props.requestType.then((data) => {
        try {
            if (!data.length) {
                throw new Error('Data is empty')
            }

            title.value = data[0].title
        } catch (error) {
            console.error(error)
        }
    })

    status.value = parseStatus(props.status)
})
</script>

<template>
    <div
        @click="openModal"
        class="h-fit w-full bg-foreground-light dark:bg-foreground-dark rounded-lg lg:hover:scale-[1.01] lg:hover:shadow-lg flex-col flex cursor-pointer"
    >
        <main class="p-4 items-center">
            <h3 class="font-play text-xl font-bold">
                {{ title }}
            </h3>
            <p
                v-if="props.text"
                v-html="props.text"
                class="text-ellipsis whitespace-nowrap overflow-hidden"
            />
        </main>
        <footer
            class="h-6 rounded-b-lg rounded-t-[4px] px-4 text-white"
            :class="{
                'bg-red-500': props.status == 'not-seen',
                'bg-blue-500': props.status == 'seen',
                'bg-yellow-500': props.status == 'in-progress',
                'bg-green-500': props.status == 'complete'
            }"
        >
            <span class="text-white" v-if="adminMode">Кашира -</span> {{ status }}
        </footer>
    </div>
</template>
