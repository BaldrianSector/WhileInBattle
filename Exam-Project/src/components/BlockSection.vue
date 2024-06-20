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
    <div class="flex items-center justify-center h-full">
      <h1 class="text-4xl text-white">{{ msg }}</h1>
    </div>
  
  </section>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
