<script setup>
import { ref } from 'vue'
import ColGrid from './ColGrid.vue';

defineProps({
    msg: String,
})

const count = ref(0)
</script>

<template>
    <section class="w-100 h-100 relative grid-container">
        <img src="../assets/images/Noise.png" alt="noise" class="absolute inset-0 w-full h-screen object-cover mix-blend-color-burn z-50 pointer-events-none select-none">
        <slot name="hero"></slot>
        <ColGrid>
            <slot></slot>
        </ColGrid>
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