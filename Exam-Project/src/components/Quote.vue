<script setup>
import { ref } from 'vue'

defineProps({
    quote: String,
})

const count = ref(0)
</script>

<template>
        <br>
        <h2 class="text-4xl reveal-type px-[300px] leading-[3rem]" data-bg-color="#BCACAC" data-fg-color="#F9E7E7">{{ quote }}</h2>
</template>

<style scoped>
section {
    height: 100vh;
    display: grid;
    place-content: center;
}
</style>
