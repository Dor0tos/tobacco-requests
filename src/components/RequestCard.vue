<script setup>
const props = defineProps({
    title: String
})
</script>

<template>
    <div
        class="h-[90px] w-full bg-foreground-light dark:bg-foreground-dark rounded-lg lg:hover:scale-105 lg:hover:shadow-lg flex-col flex cursor-pointer"
    >
        <main class="grow px-4 flex items-center">
            <h3
                class="text-text-accent-light dark:text-text-accent-dark font-play text-xl font-bold"
            >
                {{ props.title || '#Название' }}
            </h3>
        </main>
        <footer class="h-6 bg-red-500 rounded-b-lg rounded-t-[4px] px-4 text-white">
            Не просмотрен
        </footer>
    </div>
</template>
