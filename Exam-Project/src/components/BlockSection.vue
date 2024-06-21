<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})

const count = ref(0)
</script>

<template>
    <section class="w-100 h-100 relative grid-container">
        <img src="../assets/images/Noise.png" alt="" class="absolute inset-0 w-full h-screen object-cover">
        <slot></slot>
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