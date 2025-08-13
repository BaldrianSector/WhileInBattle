<script setup>
</script>

<template>
    <div class="grid-container items-center justify-center h-screen text-center col-span-12">
        <slot></slot>
    </div>
</template>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(12, max(120px));
    grid-gap: 20px;
    justify-content: center;
}
</style>