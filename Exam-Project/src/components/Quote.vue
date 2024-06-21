<script setup>
import { ref } from 'vue'

defineProps({
    quote: String,
})

const count = ref(0)
</script>

<template>
        <br>
        <h1 class="text-4xl reveal-type" data-bg-color="#BCACAC" data-fg-color="#F9E7E7">{{ quote }}</h1>
</template>

<style scoped>
section {
    height: 100vh;
    display: grid;
    place-content: center;
}
</style>
