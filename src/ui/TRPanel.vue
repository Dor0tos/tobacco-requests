<template>
    <main class="w-full h-fit p-6 bg-panel-light dark:bg-panel-dark rounded-xl shadow-xl">
        <slot></slot>
    </main>
</template>

<style scoped>
main {
    overflow-y: auto;
}

/* width */
::-webkit-scrollbar {
    width: 30px;
    margin-top: 24px;
}

/* Track */
::-webkit-scrollbar-track {
    border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    border: 10px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 9999px;
    background-color: #aaaaaa80;
}
</style>
