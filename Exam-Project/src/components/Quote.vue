<script setup>
import { ref } from 'vue'

defineProps({
    quote: String,
})

const count = ref(0)
</script>

<template>

        <!-- centered text in the middle of the section -->
        <br>
        <h1 class="text-4xl reveal-type">{{ quote }}</h1>

</template>

<style scoped>
section {
    height: 100vh;
    display: grid;
    place-content: center;
}
</style>
