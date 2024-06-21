<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})

const count = ref(0)
</script>

<template>
    <section class="w-100 h-screen relative grid-container">
        <img src="../assets/images/Noise.png" alt="" class="absolute inset-0 w-full h-full object-cover">
        <div class="relative grid items-center justify-center h-full text-center col-span-12">
            <h1 class="text-4xl text-gray-500">{{ msg }}</h1>
            <slot></slot>
        </div>
    </section>
</template>

<style scoped>
section {
    height: 100vh;
    display: grid;
    place-content: center;
    position: relative;
}

.relative {
    position: relative;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(12, 120px);
    grid-gap: 20px;
    justify-content: center;
}
</style>