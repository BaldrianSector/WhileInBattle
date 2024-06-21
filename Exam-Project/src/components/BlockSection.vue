<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})

const count = ref(0)
</script>

<template>
    <section class="w-100 h-screen">
        <!-- centered text in the middle of the section -->
        <div class="grid items-center justify-center h-full text-center">
            <h1 class="text-4xl text-white">{{ msg }}</h1>
            <slot></slot>
        </div>
    </section>
</template>

<style scoped>
section {
    height: 100vh;
    display: grid;
    place-content: center;
}
</style>
